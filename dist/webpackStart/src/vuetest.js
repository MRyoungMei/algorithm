import Vue from 'vue'
import App from './App.vue'

export const app=new Vue({
  el:'#app',
  template:App,
  components:{

  },
  data() {
    return {
      message:'hello vue'
    }
  },
})