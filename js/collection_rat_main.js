'use strict';

const GroupTokenId = '23792a1b5ae8b96fd3b6b91067b3cb11808a88bde1ed13fbc2c6d339462ef061';

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
			g.commanders.push(item.graphTxn.details);
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
