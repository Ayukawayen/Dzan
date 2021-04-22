'use strict';

Vue.component('v_commander', {
	template: `
		<div v-if="c.id" class="commander" :notGroup="!c.isGroup">
			<div class="version">α1</div>
			
			<div class="avatar">
				<img :src="c.avatar" :style="{ transform: 'scale(' + c.avatarScale[0] + ',' + c.avatarScale[1] + ')' }" />
				<div class="claz"><span>{{ c.clazIcon }}</span></div>
			</div>
			
			<div class="name">
				<span class="title">{{ c.name }}</span><span class="pinyin">({{ c.pinyin }})</span>
			</div>
			
			<div class="rank">
				<div class="value">{{c.rank}}</div>
			</div>
			
			<div class="attr">
				<div class="off" v-html="attrHtml(c.attr.off)"></div>
				<div class="def" v-html="attrHtml(c.attr.def)"></div>
			</div>
			
			<div class="solider">
				<div class="h">{{c.solider[0]}}</div>
				<div class="s">{{c.solider[1]}}</div>
				<div class="b">{{c.solider[2]}}</div>
			</div>
			
				
			
			<div class="skills">
				<div class="skill" v-for="skill in c.skills" :domain="skill.domain">
					<div class="desc">{{ descLang(skill.desc) }}</div>
				</div>
			</div>
			
			<div class="sn"><span>#{{ c.id }}</span></div>
		</div>
	`,
	
	props: ['c'],

	methods: {
		descLang: function(desc) {
			return desc[g.lang || 'zhtw'];
		},
		attrHtml: function(value) {
			value = ''+value;
			let l = value.length - 2;
			return value.substr(0,l) + '<span class="decimal">.' + value.substr(l) + '</span>';
		},
	},
});

