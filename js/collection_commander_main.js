'use strict';

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
	
	let url = `https://api.fullstack.cash/v4/slp/balancesForAddress/${addr}`;
	
	fetch(url, (response)=>{
		let items = response.filter((item)=>(item.balance==1));
		items.sort((a,b)=>(a.tokenId>b.tokenId ? 1 : -1));
		
		let tokenIds = [];
		
		for(let i=0;i<items.length;++i) {
			tokenIds.push(items[i].tokenId);
			
			if(i>=19) break;
		}
		
		loadCommanderNames(tokenIds);
	});
}

function loadCommanderNames(tokenIds) {
	let url = `https://api.fullstack.cash/v4/slp/list/`;
	let data = JSON.stringify({tokenIds:tokenIds});
	
	/*
	[
		{
			"decimals": 0,
			"timestamp": "2021-04-22 07:25:28",
			"timestamp_unix": 1619076328,
			"versionType": 65,
			"documentUri": "https://github.com/Ayukawayen/Dzan/tree/α1",
			"symbol": "DzanCmdr (α1)",
			"name": "阿 塞 (A Sai)",
			"containsBaton": false,
			"id": "8dd006eec029199e543783d3fe1b4975114ff9d56b8816c35a9d0e71097518db",
			"documentHash": null,
			"initialTokenQty": 1,
			"blockCreated": 684461,
			"totalMinted": null,
			"totalBurned": null,
			"circulatingSupply": null
		},
		{
			"decimals": 0,
			"timestamp": "2021-04-22 06:46:15",
			"timestamp_unix": 1619073975,
			"versionType": 65,
			"documentUri": "https://github.com/Ayukawayen/Dzan/tree/α1",
			"symbol": "DzanCmdr (α1)",
			"name": "皮 德 (Pi De)",
			"containsBaton": false,
			"id": "9cb0a72af4444e595f2c8d36e59cb02ee2aa1c46cba5ac72e4957ba003532f58",
			"documentHash": null,
			"initialTokenQty": 1,
			"blockCreated": 684456,
			"totalMinted": null,
			"totalBurned": null,
			"circulatingSupply": null
		}
	]
	*/
	
	post(url, data, (response)=>{
		let items = response.filter((item)=>{
			if(!item.name) return false;
			//if(item.symbol != 'DzanCmdr (α1)') return false;
			
			return true;
		});
		
		items.sort((a,b)=>{
			if( (b.symbol=='DzanCmdr (α1)' ? 1 : 0) - (a.symbol=='DzanCmdr (α1)' ? 1 : 0) );
		});
		
		items.forEach((item)=>{
			g.commanders.push(new Commander(item.id, item.name, item.symbol=='DzanCmdr (α1)'));
		});
	});
}

function post(url, data, cb, extra) {
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function(){
		if (this.readyState!=4 || this.status!=200) return;
		
		cb(JSON.parse(this.responseText), extra);
	}
	xhr.open('POST', url, true);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.send(data);
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
