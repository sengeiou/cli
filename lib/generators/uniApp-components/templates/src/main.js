import Vue from 'vue';
import uView from 'uview-ui';
import App from './App';
import CDemo from './components/c-demo';

Vue.use(uView);
Vue.component('c-demo', CDemo);

Vue.config.productionTip = false;

App.mpType = 'app';

const app = new Vue({
    ...App,
});
app.$mount();
