import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Notifications from 'vue-notification'
import chatOnline from 'vue-beautiful-chat';

import VueSocketIO from 'vue-socket.io'
Vue.use(chatOnline);
Vue.use(new VueSocketIO({
    debug: true,
    connection: 'http://localhost:3000/',

}));
Vue.use(Notifications)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
