import {add} from './aa.js'
import {minus,avddd} from './bb.js'
import Vue from 'vue'
import cpn from './cpn.vue'

add(30,20);
minus(30,20);
console.log(avddd);

require('./test.less')
require('./test.css')

new Vue({
  el:"#app",
  template:"<cpn/>",
  components:{
    cpn
  }
})