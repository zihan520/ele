// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

import Goods from './components/goods/Goods.vue'
import Ratings from './components/ratings/ratings.vue'
import Seller from './components/seller/Seller.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
	routes: [
		{ path: '/goods', component: Goods},
		{ path: '/ratings', component: Ratings},
		{ path: '/seller', component: Seller},
	],
	linkActiveClass: 'active'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

router.push('goods')
