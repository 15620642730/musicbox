// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import qs from 'qs'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

Vue.prototype.$axios = Axios
Vue.prototype.HOST = '/baidu_music_api'
// Vue.prototype.HOST = '/baidu_music_api'
//添加请求拦截器
Axios.interceptors.request.use(function(config){
  //在发送请求之前做些什么
  if(config.method === "post"){
    config.data = qs.stringify(config.data);
  }
  console.log(config)
  return config;
},function(error){
  //对请求错误做些什么
  return Promise.reject(error);
});

//添加响应拦截器
Axios.interceptors.response.use(function(response){
  if(response.status !==200){
    return;
  }
  //对响应数据做些什么
  return response;
},function(error){
  //对响应错误做点什么
  return Promise.reject(error);
});


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
