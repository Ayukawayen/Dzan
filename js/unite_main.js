'use strict';

const StaffGroupTokenId = '9d4e6b7b75f388098ffda2c388a9b21995f49c94f31bf579855b1f61a3704092';

const BasePubkey = '02d0ad083c7f19332a80031b52dd87b54c6813eceb1697541cb2116aaa85cfc214';

let g = {
	commander:{},
	staff:{},
	unitedCommander:{ skills:[] },
	uniteAddr:'',
};

g.lang = 'zhtw';

jsbtc.asyncInit().then(()=>{
	new Vue({
		el: 'main',
		data: {data:g},
		computed: {
			g:function() { return this.data; },
		},
	});
});



function refreshUniteAddr() {
	let seed = g.commander.id.substr(0,32) + g.staff.id.substr(32,32);

	let pubkey = jsbtc.publicKeyAdd(BasePubkey, seed);
	let addr = bchaddr.toCashAddress(jsbtc.publicKeyToAddress(pubkey, {witnessVersion: null}));
	addr = cashaddr.decode(addr);
	addr = cashaddr.encode('simpleledger', addr.type, addr.hash);
	g.uniteAddr = addr;
}

function refreshUnited() {
	if(!g.commander.id) return;
	if(!g.staff.id) return;

	g.unitedCommander = CommanderFrom(g.commander);
	
	g.unitedCommander.addStaff(g.staff);

	refreshUniteAddr();
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

	httpFetch(url, (response)=>{
		for(let i=0; i<response.g.length; ++i) {
			let d = response.g[i].graphTxn.details;
			let staff = new Staff(d.documentSha256Hex||'c043199621e36662bcc290d5957a5125bef834f7c9bdab3094b63c057de84c77', d.name);
			
			g.commander.addStaff(staff);
		}
		
		refreshUnited();
	});
}

function loadCommander(id) {
	if(!id) return;
	
	let url = `https://api.fullstack.cash/v4/slp/list/${id}`;
	
	httpFetch(url, (response)=>{
		if(!response.name) return;
		
		g.commander = new Commander(id, response.name);
		loadStaffs(response.name);
		
		refreshUnited();
	});
}

function loadStaff(id) {
	if(!id) return;
	
	let url = `https://api.fullstack.cash/v4/slp/list/${id}`;
	
	httpFetch(url, (response)=>{
		if(!response.name) return;
		
		g.staff = new Staff(id, response.name);
		
		refreshUnited();
	});
}




function httpFetch(url, cb, extra) {
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function(){
		if (this.readyState!=4 || this.status!=200) return;
		
		cb(JSON.parse(this.responseText), extra);
	}
	xhr.open('GET', url, true);
	xhr.send();
}
