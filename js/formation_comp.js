'use strict';

Vue.component('v_formation', {
	template: `
		<div class="formation">
			<div class="unit" v-for="u in formation.units" :key="u.id">
				<div class="name">
					<div class="title">{{ u.posName }}</div>
					<div class="commanderName">{{ u.name }}</div>
					<div class="pinyin">({{ u.pinyin }})</div>
				</div>
				
				<div class="subUnits">
					<div class="subUnit" v-for="s,i in u.solider" :s="i | soliderClaz" :key="u.id+'/s/'+i">
						<div class="amount">{{s.amount}}</div>
						<div class="attrs">
							<div class="attr off" v-html="attrHtml(s.attrs.o)"></div>
							<div class="attr def" v-html="attrHtml(s.attrs.d)"></div>
							<div class="attr mor" v-html="attrHtml(s.attrs.m)"></div>
						</div>
					</div>
				</div>
				
				<div class="skills">
					<div class="skill" v-for="skill in u.commander.skills" :domain="skDomain(u.commander, skill)">
						<div class="desc">{{ skDesc(u.commander, skill) }}</div>
					</div>
				</div>
			</div>
			<div class="unit summary">
				<div class="name">
					<div class="title">Total</div>
					<div><button @click="onResetClick()">Reset</button></div>
				</div>
				<div class="subUnits">
					<div class="subUnit" v-for="a,i in formation.amounts" :s="i | soliderClaz" :key="i">
						<div class="amount">{{a}}</div>
					</div>
				</div>
				<div class="stats">
					<div class="stat"><span class="title">攻勢作戰</span><span class="value" v-html="statHtml(formation.stat.off)"></span></div>
					<div class="stat"><span class="title">守勢作戰</span><span class="value" v-html="statHtml(formation.stat.def)"></span></div>
				</div>
			</div>
		</div>
	`,
	
	props: ['formation'],
	
	filters: {
		soliderClaz: function(value) {
			return ['h','s','b'][value];
		},
	},
	methods: {
		skDomain: function(cmdr, skill) {
			if(!skill) return '';
			return cmdr.domain;
		},
		skDesc: function(cmdr, skill) {
			if(!skill) return '';
			return skill.desc(cmdr, g.lang || 'zhtw');
		},
		attrHtml: function(value) {
			value = ''+value;
			let l = value.length - 10;
			return value.substr(0,l) + '<span class="decimal">.' + value.substr(l,2) + '</span>';
		},
		statHtml: function(value) {
			value = ''+Math.round(value);
			let l = value.length - 8;
			return value.substr(0,l) + '<span class="decimal">.' + value.substr(l,8) + '</span>';
		},
		onResetClick: function() {
			this.formation.reset();
		},
	},
});

