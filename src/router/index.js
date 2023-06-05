import Vue from 'vue'
// 导入第三方模块
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 引入组件
import Home from '../views/Home/Home'
import Index from '../views/Index/Index'
import Message from '../views/Message/Message'
import Shopping_cart from '../views/Shopping/Shopping_cart'
import Detail from '@/components/Detail/Detail'
import Login from '@/views/Login/Login'

// 实例化
const router =  new VueRouter({
    // 通过routes添加路由配置，可以添加多个路由配置
    routes: [
        // path路由路径，component对应的组件
        {
            path:'/',
            component:Index
        },
        {
            path:'/home',
            component:Home
        },
        {
            path:'/index',
            component:Index,
        },
        {
            path:'/msg',
            component:Message
        },
       
        {
            path:'/shopping',
            component:Shopping_cart
        },
        {
            path:'/detail',
            component:Detail,
            meta:{
                showfather:true,
            }
        },  
        {
            path:'/login',
            component:Login,
            meta:{
                showfather:true,
            }
        },
    ]
})


// 导出路由实例
export default router