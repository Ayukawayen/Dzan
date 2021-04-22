'use strict';

Vue.component('v_commander_collection', {
	template: `
		<div class="commanders">
			<v_commander v-for="c in cmdrs" :c="c" :key="c.id"></v_commander>
		</div>
	`,
	
	props: ['cmdrs'],
});

