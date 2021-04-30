'use strict';

Vue.component('v_commander_list', {
	template: `
		<table class="commanders">
			<thead>
				<tr>
					<th>Name <span class="sort" @click="sort('name',1)">△</span><span class="sort" @click="sort('name',-1)">▽</span> </th>
					<td>👑 <span class="sort" @click="sort('rank',1)">△</span><span class="sort" @click="sort('rank',-1)">▽</span> </td>
					<td>⚔️ <span class="sort" @click="sort('off',1)">△</span><span class="sort" @click="sort('off',-1)">▽</span> </td>
					<td>🛡️ <span class="sort" @click="sort('def',1)">△</span><span class="sort" @click="sort('def',-1)">▽</span> </td>
					<td>🐴 <span class="sort" @click="sort(  'h',1)">△</span><span class="sort" @click="sort(  'h',-1)">▽</span> </td>
					<td>🔱 <span class="sort" @click="sort(  's',1)">△</span><span class="sort" @click="sort(  's',-1)">▽</span> </td>
					<td>🏹 <span class="sort" @click="sort(  'b',1)">△</span><span class="sort" @click="sort(  'b',-1)">▽</span> </td>
					<td>Skill</td>
				</tr>
			</thead>
			<tbody>
				<tr v-for="c in cmdrs" :key="c.id">
					<th><span class="title">{{ c.name }}</span><span class="pinyin">({{ c.pinyin }})</span></th>
					<td>{{c.rank}}</td>
					<td v-html="attrHtml(c.attr.off)"></td>
					<td v-html="attrHtml(c.attr.def)"></td>
					<td>{{c.solider[0]}}</td>
					<td>{{c.solider[1]}}</td>
					<td>{{c.solider[2]}}</td>
					<td class="skills">
						<div class="skill" v-for="skill in c.skills" :domain="skill.domain">
							<div class="desc">{{ descLang(skill.desc) }}</div>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	`,
	
	props: ['cmdrs'],

	methods: {
		descLang: function(desc) {
			return desc[g.lang || 'zhtw'];
		},
		attrHtml: function(value) {
			value = ''+value;
			let l = value.length - 2;
			return value.substr(0,l) + '<span class="decimal">.' + value.substr(l) + '</span>';
		},
		
		sort: function(by, direct) {
			let evalue = (c)=>{
				if(by=='off') return c.attr.off;
				if(by=='def') return c.attr.off;
				if(by=='h') return c.solider[0];
				if(by=='s') return c.solider[1];
				if(by=='b') return c.solider[2];
				if(by=='rank') return c.rank;
				if(by=='name') return c.pinyin;
			};
			
			this.cmdrs.sort((a,b)=>{
				if(evalue(a) > evalue(b)) return direct;
				if(evalue(a) < evalue(b)) return direct*-1;
				return 0;
			});
		},
	},
});

