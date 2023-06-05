<!-- 首页组件 -->
<template>
    <div class="index-contain">
        <!-- 标头 -->
        <Header title="课设作业购物平台"></Header>
        <!-- 搜索框 -->
        <van-search placeholder="请输入搜索关键词" background="orange" shape="round"/>
        <!-- 轮播图 -->
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <!-- 循环渲染轮播图项 -->
            <van-swipe-item v-for="item in swipeList" :key="item.id">
                <img class="swipe" :src="item.img" alt="">
            </van-swipe-item>
        </van-swipe>
        <van-notice-bar scrollable text="618大促即将开始！" />
        <!-- 功能区6宫格分割 -->
        <van-grid icon-size="35px" :border="false">
            <!-- 鼠标经过变色 -->
            <!-- 判断变量是否为当前下标 -->
            <van-grid-item v-for="item in textList" :key="item.id" :icon="item.icon" :text="item.text" />
        </van-grid>
        <!-- 商品展示 -->
        <van-row type="flex" gutter="10">
            <van-col span="10" offset="1">
                <Display></Display>
            </van-col>
        <!-- <van-col span="10" offset="1"><Display></Display></van-col>
            <van-col span="10" offset="1"><Display></Display></van-col>
                <van-col span="10" offset="1"><Display></Display></van-col> -->
        </van-row>
    </div>
</template>

<script>
// 导入库
import axios from "axios"

// 导入组件
import Header from "../../components/Header/Header.vue";
import Display from '../../components/Display/Display.vue'
export default {
    components: {
        Header,
        Display,
    },
    data() {
        return {
            // 存放图片路径的数组
            swipeList: [],
            // 存放导航
            textList: [],
            // 状态当前选项
            active: 'false',
            // 存放商品列表
            displayList: [],

        }
    },
    methods: {


        // 请求商品列表数据
    },
    created() {
        // 初始化数组
        this.swipeList = [
            { id: 1, img: require('@/assets/img/1.webp') },
            { id: 2, img: require('@/assets/img/2.webp') },
            { id: 3, img: require('@/assets/img/3.webp') },
            { id: 4, img: require('@/assets/img/4.webp') },
        ],
            this.textList = [
                { id: 1, text: '零食', icon: require('@/assets/icon/bangbangtang.svg') },
                { id: 2, text: '主食', icon: require('@/assets/icon/fantuan.svg') },
                { id: 3, text: '点心', icon: require('@/assets/icon/hanbao.svg') },
                { id: 4, text: '肉类', icon: require('@/assets/icon/mianyang.svg') },
                { id: 5, text: '玩具', icon: require('@/assets/icon/mogu.svg') },
                { id: 6, text: '服装', icon: require('@/assets/icon/shoutibao.svg') },
                { id: 7, text: '水果', icon: require('@/assets/icon/xigua.svg') },
                { id: 8, text: '海鲜', icon: require('@/assets/icon/youyu.svg') },
            ]
    },
    computed: {
    },

}
</script>
<style lang="less" scoped>
.index-contain {
    background-color: orange;
}


.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;

    // background-color: #39a9ed;

}

.swipe {
    height: 200px;
}

.van-row {
    background-color: rgb(241, 241, 241);
    margin-top: 15px;
    border-radius: 5%;
}

.van-col {
    margin-bottom: 5px;
}
</style>
