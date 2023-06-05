<template>
    <div>
        <Header title="课设作业购物平台"></Header>
        <!-- 动态绑定加上v-bind，不加等于传一个字符串 -->
        <!-- 循环渲染goods组件 -->
        <Goods v-for="item in list" :key="item.id" :title="item.goods_name" :price="item.goods_price" :pic="item.goods_img"
      :status="item.goods_state">
    </Goods>
    <Footer></Footer>
    </div>
</template>
<script>
// 导入库
import axios from "axios"
// 导入组件
import Header from "../../components/Header/Header.vue";
import Goods from "../../components/Goods/Goods.vue"
import Footer from '../../components/Footer/Footer.vue'
import Counter from "../../components/Counter/Counter.vue"

export default {
    // 注册组件
    components: {
        Header,
        Goods,
        Footer,
        Counter,

    },
    // 在根组件里接收数据，父传子传给其他子组件
    methods: {
        // 封装请求列表数据的方法
        async initList() {
            // ：是重命名
            const { data: res } = await axios.get('https://www.escook.cn/api/cart')
            console.log(res.list);
            //  如果状态码为200，则成功获取到数据，转存
            if (res.status == 200) {
                this.list = res.list
            }
        }
    },
    // 在cli里data是一个函数，返回一个对象
    data() {
        return {
            list: [],
        }
    },
    // 生命周期钩子,在created时期发送axios请求
    created() {
        this.initList()


    },

  
}
</script>
<style lang="less" scoped></style>
