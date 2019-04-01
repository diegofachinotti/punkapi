import Vue from 'vue';
import Vuetify from 'vuetify';

import App from './App.vue';

import 'vuetify/dist/vuetify.min.css';

new Vue({
     el: '#app',
     render: h => h(App)
});

Vue.use(Vuetify);
