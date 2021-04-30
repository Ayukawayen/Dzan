'use strict';

const GroupTokenId = '11b4a01480bfd5bc15307595fec8e57840fce86d49f4e13c4560195ce9d0614e';

let g = {
	commanders:[],
};

g.lang = 'zhtw';

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

function loadCommanders() {
	let addr = location.hash ? location.hash.substr(1) : null;
	
	if(!addr) return;
	
	let query = {
		"v": 3,
		"q": {
			"db": ["g"],
			"find":{
				"$and": [
					{"graphTxn.outputs.address": addr},
					{"tokenDetails.nftGroupIdHex": GroupTokenId},
					{"graphTxn.outputs.status": "UNSPENT"}
				]
			},
			"sort": {"tokenDetails.tokenIdHex":1}
		}
	};
	query = btoa(JSON.stringify(query));

	let url = `https://slpdb.fountainhead.cash/q/${query}`;
	
	fetch(url, (response)=>{
		response.g.forEach((item)=>{
			g.commanders.push(new Commander(item.tokenDetails.tokenIdHex, item.graphTxn.details.name, true));
		});
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
