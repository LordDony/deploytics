import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import firebase from 'firebase';

Vue.config.productionTip = false;

const config = {
  apiKey: "AIzaSyCcEubmGz59_kQlz80R7aGiziOIm5YCY0E",
  authDomain: "pwa-example-9b33d.firebaseapp.com",
  databaseURL: "https://pwa-example-9b33d.firebaseio.com",
  projectId: "pwa-example-9b33d",
  storageBucket: "",
  messagingSenderId: "83896001636",
  appId: "1:83896001636:web:fee33036c837b9a8882b71"
};

firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.usePublicVapidKey("BFXQ2yCrfLOJIhkcyt47r109L3iV4i1ffLLN7IzsGMdwvAg7gWJvGq9sDzpgburTXXiRMDXUAJrwdmpTI8BFkMI");

messaging.requestPermission().then(() => {
  console.log('Notificacion permission granted');

  messaging.getToken().then((token) => {
    console.log(token);
  });
}).catch((err) => {
  console.log('Unable to get permission to notify', err);
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
