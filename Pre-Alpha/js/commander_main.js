'use strict';

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



loadCommander();

function onSubmit() {
	location.hash = '#' + document.querySelector('#tokenId').value;
	loadCommander();
}

function loadCommander() {
	let id = location.hash ? location.hash.substr(1) : null;
	
	if(!id) return;
	
	let url = `https://api.fullstack.cash/v4/slp/list/${id}`;
	
	fetch(url, (response)=>{
		if(!response.name) return;
		
		g.commander = new Commander(id, response.name);
		
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
