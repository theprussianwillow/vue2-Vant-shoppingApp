<template>
  <div class="app-container active ">   
    <!-- <h1>App 根组件</h1> -->
    <!-- 路由占位符 -->
    <router-view></router-view>
  

    <!-- tabbar底部导航栏 -->
    <!-- 路由模式 -->
    <van-tabbar route  active-color="#ee0a24" v-show="!$route.meta.showfather">
      <van-tabbar-item icon="home-o" to="./index">首页</van-tabbar-item>
      <van-tabbar-item icon="chat-o" to="./msg">消息</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="./shopping">购物车</van-tabbar-item>
      <van-tabbar-item icon="wap-home-o" to="./home">我的</van-tabbar-item>
    </van-tabbar>
   
  </div>
</template>

<script>

// 导入组件

export default {
  
}
</script>

<style lang="less" scoped>
.active {
  padding-top: 45px;
  padding-bottom: 50px;
 
}
</style>
