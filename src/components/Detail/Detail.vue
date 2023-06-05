<!-- 商品详情页 -->
<template>
    <div class="detail-container">
        <!-- 导航栏 -->
        <van-nav-bar title="标题" left-text="返回" fixed left-arrow @click-left="onClickLeft" />
        <div class="detail-top">
            <!-- 图片+标题 -->
            <img src="../../assets/img/produce1.jpg" alt="">
            <!-- 标题 -->
            <div class="detail-title">
                <span>价格</span>
                <p>xxxxxxx</p>

            </div>
        <!-- 商品规格 -->

        <!-- 评论区 -->

        <!-- 店铺信息 -->
        </div>
        
            <!-- 商品导航 -->
        <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="客服" />
            <van-goods-action-icon icon="shop-o" text="店铺" to="/store"/>
            <van-goods-action-button color="orange" type="warning" text="加入购物车" />
            <van-goods-action-button color="red" type="danger" text="立即购买" />
        </van-goods-action>
    </div>
</template>
<script>
export default {
    data() {
        return {
        }
    },
    created() {
    },
    methods: {
        // 返回首页
        onClickLeft(){
            this.$router.push('./index')
        }
    },
}
</script>
<style lang="less" scoped>
.van-nav-bar{
    background-color:rgba(255, 252, 252, 0.2);
}
.detail-top{
    background-color: #ccc;
   img{
       width: 100%;
       height: 100%;
   }
}
</style>
