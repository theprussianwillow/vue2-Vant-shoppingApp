import Vue from 'vue'
import App from './App.vue'
// 导入vant组件库
import Vant from 'vant'
import 'vant/lib/index.css';

// 导入 bootstrap 样式表
import 'bootstrap/dist/css/bootstrap.min.css'

// 导入路由
import router from './router/index';


// 使mock生效
import './mock/index'

Vue.config.productionTip = false
Vue.use(Vant);

// 挂载到全局vue实例上
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
