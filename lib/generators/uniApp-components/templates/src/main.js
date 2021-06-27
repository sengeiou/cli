import Vue from 'vue'
import uView from 'uview-ui';
import App from './App'
import VDemo from './components/v-demo';

Vue.use(uView);
Vue.component('v-demo', VDemo);

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
