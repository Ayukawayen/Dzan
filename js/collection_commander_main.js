'use strict';

const GroupTokenId = '11b4a01480bfd5bc15307595fec8e57840fce86d49f4e13c4560195ce9d0614e';
const StaffGroupTokenId = '9d4e6b7b75f388098ffda2c388a9b21995f49c94f31bf579855b1f61a3704092';

let g = {
	commanders:[],
};

g.lang = 'zhtw';

let commanderIndexByNames = {};

new Vue({
	el: 'main',
	data: {data:g},
	computed: {
		commanders:function() { return g.commanders; },
	},
});



loadCommanders();

function onSubmit() {
	g.commanders= [];
	location.hash = '#' + document.querySelector('#address').value;
	loadCommanders();
}

function loadStaffs() {
	let query = {
		"v": 3,
		"q": {
			"db": ["g"],
			"aggregate":[{
				"$match": {
					"tokenDetails.nftGroupIdHex": StaffGroupTokenId,
					"graphTxn.details.transactionType": "GENESIS"
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
			let splitted = d.documentUri.split('/');

			let index = commanderIndexByNames[splitted[1]||''];
			if(!index) continue;

			let staff = new Staff(d.documentSha256Hex||'c043199621e36662bcc290d5957a5125bef834f7c9bdab3094b63c057de84c77', d.name);
			
			g.commanders[index].addStaff(staff);
		}
		
	});
}

function loadCommanders() {
	let addr = location.hash ? location.hash.substr(1) : null;
	
	if(!addr) return;
	
	let query = {
		"v": 3,
		"q": {
			"db": ["g"],
			"aggregate":[{
				"$match": {
					"$and": [
						{"graphTxn.outputs.address": addr},
						{"tokenDetails.nftGroupIdHex": GroupTokenId},
						{"graphTxn.outputs.status": "UNSPENT"}
					]
				}
			},{
				"$lookup": {
					"from": "tokens",
					"localField": "tokenDetails.tokenIdHex",
					"foreignField": "tokenDetails.tokenIdHex",
					"as": "token"
				}
			}],
			"sort": {"token.tokenDetails.timestamp_unix":-1, "tokenDetails.tokenIdHex":1},
			"limit": 24000
		}
	};
	query = btoa(JSON.stringify(query));

	let url = `https://slpdb.fountainhead.cash/q/${query}`;
	
	fetch(url, (response)=>{
		response.g.forEach((item)=>{
			let commander = new Commander(item.tokenDetails.tokenIdHex, item.token[0].tokenDetails.name);
			g.commanders.push(commander);
			
			let name = commander.pinyin.replace(' ', ',');
			commanderIndexByNames[name] = g.commanders.length - 1;
		});
		
		loadStaffs();
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
