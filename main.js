import Vue from 'vue'
import App from './App'
import {
	router,
	RouterMount
} from './router/router.js' //路径换成自己的
import store from './store'

Vue.use(router)

// 注册全局组件
import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue";
import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue";
import MescrollEmpty from '@/components/mescroll-uni/components/mescroll-empty.vue';
Vue.component('mescroll-body', MescrollBody)
Vue.component('mescroll-uni', MescrollUni)
Vue.component('mescroll-empty', MescrollEmpty)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})

RouterMount(app, router, '#app');

app.$mount()
