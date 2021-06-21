'use strict';


function Formation() {
	this.reset();
}

Formation.prototype.reset = function() {
	this.commanders = [];
	this.pointer = 0;
	
	this.refresh();
}

Formation.prototype.refresh = function() {
	this.effect = {};
	['0','1','2','3','4','army'].forEach((pos)=>{
		this.effect[pos] = {};
		['0','1','2'].forEach((s)=>{
			this.effect[pos][s] = {};
			['o','d','m'].forEach((a)=>{
				this.effect[pos][s][a] = 10000;
			});
		});
	});
	
	this.units = [];
	this.stat = {
		off: 0,
		def: 0,
	};
	
	
	let army = {
		solider:[0,0,0,],
	};
	for(let pos=0;pos<5;++pos) {
		let commander = this.commanders[pos] || defaultCommander();
		for(let s=0;s<3;++s) {
			army.solider[s] += commander.solider[s];
		}
	}
	this.amounts = army.solider;
	
	for(let pos=0;pos<5;++pos) {
		let commander = this.commanders[pos] || defaultCommander();
		commander.skills.forEach((skill)=>{
			if(!skill || !skill.verify) return;
			if(!skill.verify(commander, army, pos)) return;
			
			let eff = skill.effect(commander, army, pos);
			for(let pos in eff) {
				this.effect[pos] ||= {};
				for(let s in eff[pos]) {
					this.effect[pos][s] ||= {};
					for(let a in eff[pos][s]) {
						this.effect[pos][s][a] ||= 0;
						this.effect[pos][s][a] += eff[pos][s][a];
					}
				}
			}
		});
	}
	
	let posNames = ['左軍', '前軍', '中軍', '後軍', '右軍', ];
	for(let pos=0;pos<5;++pos) {
		let commander = this.commanders[pos] || defaultCommander();
		let unit = {
			commander: commander,
			posName: posNames[pos],
			name: commander.name,
			pinyin: commander.pinyin,
			solider:[],
		};
		
		for(let s=0;s<3;++s) {
			unit.solider[s] = {
				amount:commander.solider[s],
			};
			
			let attrs = {
				o:commander.attr.off,
				d:commander.attr.def,
				m:10000,
			};
			
			for(let a in attrs) {
				attrs[a] *= (this.effect[pos][s][a]);
				attrs[a] *= (this.effect['army'][s][a]);
			}
			
			unit.solider[s].attrs = attrs;

			this.stat.off += commander.solider[s] * attrs.o / 100000000 * attrs.m / 100000000;
			this.stat.def += commander.solider[s] * attrs.d / 100000000 * attrs.m / 100000000;
		}
		
		this.units[pos] = unit;
	}
}
Formation.prototype.setCommander = function(pos, commander) {
	this.commanders[pos] = commander;
	this.refresh();
}
Formation.prototype.appendCommander = function(commander) {
	if(this.pointer >= 5) return;
	this.setCommander(this.pointer, commander||defaultCommander() );
	++this.pointer;
}

const defaultCommander = ()=>({
	name:'無名將領',
	pinyin:'NoName',
	solider: [1000,1000,1000],
	attr: { off:5000, def:5000, },
	skills: [null,null,null],
});
