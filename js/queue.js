'use strict';

var PurchaseAddr = 'bitcoincash:qp265kvj3ma6f9u5qjfgejtskgfqqdx77vh2vges9e';

getPurchaseUtxos();

function getPurchaseUtxos() {
	let url = `https://api.fullstack.cash/v4/electrumx/utxos/${PurchaseAddr}`;
	fetch(url, (response, extra)=>{
		if(!response) return;
		if(!response.utxos) return;
		
		let utxos = response.utxos.sort((a,b)=>{
			if(a.height != b.height) {
				return (a.height&b.height) ? a.height - b.height : b.height - a.height;
			}
			return 0;
		});
		
		let output = '';
		let rank = 1;
		let count = 0;
		for(let i=0;i<utxos.length;++i) {
			let utxo = utxos[i];

			if(utxo.value < 10000) continue;
			
			++count;
			
			if(i<=0 || utxos[i-1].height != utxos[i].height) rank = count;
			
			output += utxo.tx_hash+':'+utxo.tx_pos + '\t' + utxo.height + '\t#' + rank + '\r\n';
		}

		document.querySelector('#output').textContent = output;
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

