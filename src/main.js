import Vue from 'vue'
import App from './App'
import router from './router'
import 'common/stylus/index.styl'
import VueResource from "vue-resource"
import VueLazyLoad from 'vue-lazyload'
import fastclick from 'fastclick'

import Mint from 'mint-ui'
import "mint-ui/lib/style.css"
//Vue.config.productionTip = false

import "./assets/css/icons-extra.css"
import "./assets/css/mui.min.css"
import "./assets/css/site.css"


Vue.use(VueResource);

Vue.use(Mint)

import { Header, Popup } from 'mint-ui'
Vue.component(Header.name, Header);
Vue.component(Popup.name, Popup);

Vue.use(VueLazyLoad, {
	loading: require('common/js/image/default.png')
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
