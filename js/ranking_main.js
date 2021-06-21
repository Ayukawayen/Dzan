'use strict';

const GroupTokenId = '11b4a01480bfd5bc15307595fec8e57840fce86d49f4e13c4560195ce9d0614e';
const StaffGroupTokenId = '9d4e6b7b75f388098ffda2c388a9b21995f49c94f31bf579855b1f61a3704092';

let g = {
	commanders:{},
	formations:{},
	rankings:{
		off:[],
		def:[],
	},
};

var formationStats = [];
var commanders = {};
var formationCodes = {};
var commanderIndexByNames = {};

g.lang = 'zhtw';

new Vue({
	el: 'main',
	data: {data:g},
	computed: {
		g:function() { return this.data; },
	},
});



loadCommanders();

function loadFormations() {
	let query = {
		"v": 3,
		"q": {
			"db": ["g"],
			"aggregate":[{
				"$match": {
					"graphTxn.details.transactionType": "GENESIS",
					"graphTxn.details.symbol": "DzanFmtn " + String.fromCharCode(0xce, 0xb1) + "1"
				}
			},{
				"$lookup": {
					"from": "confirmed",
					"localField": "tokenDetails.tokenIdHex",
					"foreignField": "tx.h",
					"as": "confirmed"
				}
			}],
			"sort": {"_id":-1},
			"limit": 24000
		}
	};
	query = btoa(JSON.stringify(query));

	let url = `https://slpdb.fountainhead.cash/q/${query}`;

	fetch(url, (response)=>{
		for(let i=0; i<response.g.length; ++i) {
			let g = response.g[i];
			
			let addr = g.graphTxn.outputs[0].address;
			if(formationCodes[addr]) continue;
			
			if(!g.confirmed[0]) continue;
			
			let isVerified = false;
			let inputs = g.confirmed[0].in;
			for(let ii=0; ii<inputs.length; ++ii) {
				if(inputs[ii].e.a == addr) {
					isVerified = true;
					break;
				}
			}
			if(!isVerified) continue;
			
			let code = g.graphTxn.details.name;
			formationCodes[addr] = code;
		}
		
		let formations = {};
		for(let addr in formationCodes) {
			let formation = new Formation();
			formations[addr] = formation;
			let pinyins = Codec.decodeCommanders(formationCodes[addr]);

			pinyins.forEach((pinyin)=>{
				let index = commanderIndexByNames[pinyin.replace(' ',',')];
				if(!index) return;
				
				let commander = (commanders[addr]||{})[index[1]];
				formation.appendCommander(commander);
			});
			formationStats.push({
				addr: addr,
				off: formation.stat.off,
				def: formation.stat.def,
			});
		}
		g.formations = formations;

		['off', 'def'].forEach((type)=>{
			g.rankings[type] = formationStats.sort((a,b)=>(b[type] - a[type])).map((item)=>(item.addr));
		});
		
	});
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
		response.g.forEach((item)=>{
			let d = item.graphTxn.details;
			let splitted = d.documentUri.split('/');

			let index = commanderIndexByNames[splitted[1]||''];
			if(!index) return;

			let staff = new Staff(d.documentSha256Hex||'c043199621e36662bcc290d5957a5125bef834f7c9bdab3094b63c057de84c77', d.name);
			
			commanders[index[0]][index[1]].addStaff(staff);
		});
		
		g.commanders = commanders;
		loadFormations();
	});
}

function loadCommanders() {
	let query = {
		"v": 3,
		"q": {
			"db": ["g"],
			"aggregate":[{
				"$match": {
					"$and": [
						//{"graphTxn.outputs.address": addr},
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
			let addr = item.graphTxn.outputs[0].address;
			commanders[addr] = commanders[addr] || {};
			commanders[addr][commander.id] = commander;
			
			let name = commander.pinyin.replace(' ', ',');
			commanderIndexByNames[name] = [addr, commander.id];
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
