'use strict';

const StaffGroupTokenId = '9d4e6b7b75f388098ffda2c388a9b21995f49c94f31bf579855b1f61a3704092';

let g = {
	commander:{},
};

g.lang = 'zhtw';

new Vue({
	el: 'main',
	data: {data:g},
	computed: {
		g:function() { return this.data; },
	},
});



load();

function load() {
	let id = location.hash ? location.hash.substr(1) : null;

	if(!id) return;
	
	loadStaff(id);
}

function onSubmit() {
	location.hash = '#' + document.querySelector('#tokenId').value;
	load();
}

function loadStaff(id) {
	let query = {
		"v": 3,
		"q": {
			"db": ["g"],
			"aggregate":[{
				"$match": {
					"tokenDetails.nftGroupIdHex": StaffGroupTokenId,
					"graphTxn.details.transactionType": "GENESIS",
					"graphTxn.details.documentSha256Hex": id
				}
			}],
			"limit": 1
		}
	};
	query = btoa(JSON.stringify(query));

	let url = `https://slpdb.fountainhead.cash/q/${query}`;

	fetch(url, (response)=>{

		if(response.g.length <= 0) {
			loadCommander(id);
			
			return;
		}
		
		let d = response.g[0].graphTxn.details;
		g.commander = new Staff(d.documentSha256Hex||'c043199621e36662bcc290d5957a5125bef834f7c9bdab3094b63c057de84c77', d.name);
	});
}

function loadStaffs(commanderName) {
	commanderName = commanderName.split('(')[1].split(')')[0].replace(' ', ',');

	let query = {
		"v": 3,
		"q": {
			"db": ["g"],
			"aggregate":[{
				"$match": {
					"tokenDetails.nftGroupIdHex": StaffGroupTokenId,
					"graphTxn.details.transactionType": "GENESIS",
					"graphTxn.details.documentUri": { "$regex": "^/"+commanderName }
				}
			}],
			"sort": {"_id":1},
			"limit": 24000
		}
	};
	query = btoa(JSON.stringify(query));

	let url = `https://slpdb.fountainhead.cash/q/${query}`;

	fetch(url, (response)=>{
		for(let i=0; i<response.g.length; ++i) {
			let d = response.g[i].graphTxn.details;
			let staff = new Staff(d.documentSha256Hex||'c043199621e36662bcc290d5957a5125bef834f7c9bdab3094b63c057de84c77', d.name);
			
			g.commander.addStaff(staff);
		}
		
	});
}

function loadCommander(id) {
	let url = `https://api.fullstack.cash/v4/slp/list/${id}`;
	
	fetch(url, (response)=>{
		if(!response.name) return;
		
		g.commander = new Commander(id, response.name);
		
		loadStaffs(response.name);
	});
}




function fetch(url, cb, extra) {
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function(){
		if (this.readyState!=4 || this.status!=200) return;
		
		cb(JSON.parse(this.responseText), extra);
	}
	xhr.open('GET', url, true);
	xhr.send();
}
