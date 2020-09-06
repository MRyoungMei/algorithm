<<<<<<< HEAD
import {add} from './aa.js'
import {minus,avddd} from './bb.js'
import Vue from 'vue'
import cpn from './cpn.vue'
=======
import Vue from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import 'ant-design-vue/dist/antd.css';
import $ from 'jquery'
Vue.config.productionTip = false;
>>>>>>> 6859ff30514302e6dcb5c26e8d7eeff9ca492751

Vue.use(Antd);

<<<<<<< HEAD
require('./test.less')
require('./test.css')

new Vue({
  el:"#app",
  template:"<cpn/>",
  components:{
    cpn
  }
})
=======
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
>>>>>>> 6859ff30514302e6dcb5c26e8d7eeff9ca492751
