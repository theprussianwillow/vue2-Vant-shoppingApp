<!-- 首页商品展示组件 -->
<template>
    <div class="display-containter" @click="godetail">
        <!-- 顶部 -->
        <div class="display-top">
            <!-- 图片 -->
            <img src="../../assets/img/item1.webp" alt="">
            <!-- 标题 -->
            <div class="displays-title">
                <van-tag type="danger" size="medium">618大促</van-tag>
                <van-tag type="warning" style="margin-left: 5px;">热卖</van-tag>
                <p >
                    卡其色运动短裤女夏季宽松休闲西装阔腿高腰直筒a字显瘦5五分中裤
                </p>
            </div>
        </div>
        <!-- 底部 -->
        <div class="display-bom">
            <!-- 左侧价格 -->
            <span class="displays-price">￥{{ 0 }}</span>
            <!-- 右侧图标 -->
            <span class="displays-icon">
                <van-icon name="bars" size="30px"/>
            </span>
        </div>



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
        // 进入商品详情页的方法
        godetail() {
            this.$router.push('detail');
        }
    },
}
</script>
<style lang="less" scoped>
.display-containter {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 160px;
    height: 210px;
    background-color: rgb(255, 255, 255);
    border-radius: 10%;
}
.display-top{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
img {
    height: 100px;
    width: 100px;
}


p {
    width: 150px;
    // 2行换行
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    // 添加省略号
    text-overflow: ellipsis;
    font-size: 12px;
    padding: 0 5px;
    margin: 0;
}
.display-bom {
    width: 140px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
    border-top: 1px solid #ccc;
}
.displays-price{
    color: red;
    font-size: 20px;
    font-weight: 900;
}

</style>
