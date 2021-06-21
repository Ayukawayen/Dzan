'use strict';

Vue.component('v_ranking', {
	template: `
		<table class="ranking">
			<caption>{{ type | type }}</caption>
			<tbody>
				<tr class="fmtn" v-for="addr,i in ranking" :key="addr">
					<td class="index">#{{ i+1 }}</td>
					<td class="owner" :title="addr">{{ addr | addr }}</td>
					<td class="value" :title="statTitle(formations[addr].stat[type])" v-html="statHtml(formations[addr].stat[type])"></td>
					<td class="units">
						<div class="unit" v-for="u in formations[addr].units" :key="u.id">
							<div class="name">{{ u.name }}</div>
							<div class="pinyin">({{ u.pinyin }})</div>
							<div class="statValue">{{ unitStatValue(u,type) }}</div>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	`,

	props: ['type', 'formations', 'ranking'],
	
	filters: {
		type: function(value) {
			return {
				off: '攻勢作戰',
				def: '守勢作戰',
			}[value];
		},
		addr: function(value) {
			return value.split(':')[1].substr(0,8);
		},
	},
	methods: {
		statHtml: function(value) {
			return Math.round(value / 100000000);
		},
		statTitle: function(value) {
			value = value.toString();
			return value.slice(0,-8) + '.' + value.slice(-8);
		},
		unitStatValue: function(unit, type) {
			let t = type[0];
			
			let result = 0;
			
			unit.solider.forEach((s)=>{
				let v = 100 * s.attrs[t]/1000000000000 * s.attrs.m/1000000000000 * s.amount;
				result += v;
			});
			
			result = Math.round(result).toString();
			result = result.slice(0,-2) + '.' + result.slice(-2);
			
			return result;
		},
	},
});

