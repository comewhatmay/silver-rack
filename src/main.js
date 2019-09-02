import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'

Vue.config.productionTip = false
/*Vue.use(VueRouter)

let component1 = {
  template:`<div class="title">Page 1</div>`
}
let component2 = {
  template:`<div class="title">Page 2</div>`
}
let component3 = {
  template:`<div class="title">Page 3</div>`
}

let router = new VueRouter({
  routes: [
    {
      path: '/page1',
      name: 'Page 1',
      component: component1,
    },
    {
      path: '/page2',
      name: 'Page 2',
      component: component2,
    },
    {
      path: '/page3',
      name: 'Page Three',
      component: component3,
    },
    { path: '*', redirect: '/page1' }
  ]
})
*/
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
