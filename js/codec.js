'use strict';

const Codes = [
	['','b','p','m','f','d','t','n','l','g','k','h','s','y','w',],
	['a','i','u','e','o',],
	['','a','i','u','e','o',],
	['','n',],
];

var Codec = {};

Codec.decodeCommanders = (code)=>{
	let result = [];
	for(let i=0;i<code.length;i+=4) {
		result.push(Codec.decodeCommander(code.substr(i,4)));
	}
	return result;
}
Codec.encodeCommanders = (pinyins)=>{
	return pinyins.map(Codec.encodeCommander).join('');
}

Codec.decodeCommander = (code)=>{
	let result = [];
	for(let i=0;i<code.length;i+=2) {
		result.push(Codec.decodeCommanderWord(code.substr(i,2)));
	}
	result = result.join(' ');
	return result;
}

Codec.encodeCommander = (pinyin)=>{
	return pinyin.split(' ').map(Codec.encodeCommanderWord).join('');
}


Codec.decodeCommanderWord = (code)=>{
	let cs = [];
	
	code = parseInt(code, 36);
	
	let buf = (code>>1) & 31;
	cs[3] = code & 1;
	cs[2] = buf%6;
	cs[1] = ((buf-cs[2])/6)%5;
	cs[0] = (code>>6) & 15;
	
	let result = '';
	
	for(let i=0;i<4;++i) {
		result += Codes[i][cs[i]];
	}
	
	result = result.replace('hi','shi').replace('ki','chi').replace('gi','ji');
	result = result[0].toUpperCase() + result.substr(1);
	return result;
}

Codec.encodeCommanderWord = (w)=>{
	w = w.toLowerCase().replace('j','g').replace('ch','k').replace('sh','h');
	
	let cs = [0,0,0,0];
	if(w.endsWith('n')) {
		cs[3] = 1;
		w = w.substr(0, w.length-1);
	}
	
	for(let i=0; i<3; ++i) {
		cs[i] = Codes[i].indexOf(w[0]||'');
		if(cs[i] >= 0) {
			w = w.substr(1);
		} else {
			cs[i] = 0;
		}
	}
	
	let result = (cs[0]<<6) | ((cs[1]*6+cs[2])<<1) | cs[3];
	
	result = result.toString(36);
	while(result.length < 2) {
		result = '0'+result;
	}
	
	return result;
}
