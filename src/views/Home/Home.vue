<!-- 个人中心组件 -->
<template>
    <div class="home-contain">
        <Header title="课设作业购物平台"></Header>
        <!-- 用户介绍 -->
        <div class="home-top">
            <!-- 跳到登入界面 -->
            <img src="../../assets/img/head.jpg" alt="" @click="login">
            <div class="home-num">
                <!-- 用户名 -->
                <p style=" font-weight: bold;">用户名：xxxxxx</p>
                <!-- 粉丝关注好友 -->
                <span class="home-mini">关注</span>
                <span class="home-mini">粉丝</span>
                <span class="home-mini">好友</span>
            </div>
            <!-- 设置 客服-->
            <div class="home-icon">
                <van-icon name="service-o" size="30px" />
                <span>客服</span>
            </div>
            <div class="home-icon">
                <van-icon name="setting-o" size="30px" />
                <span>设置</span>
            </div>

        </div>
        <!-- 订单区 -->
        <van-grid>
            <van-grid-item icon="pending-payment" text="待付款" />
            <van-grid-item icon="sign" text="待发货" />
            <van-grid-item icon="logistics" text="已发货" />
            <van-grid-item icon="other-pay" text="评价" dot />
        </van-grid>
        <!-- 功能区 -->
        <van-cell title="全部订单" is-link to="" />

        <div class="home-bom">
            <!-- 优惠券单元格 -->
            <van-coupon-cell :coupons="coupons" :chosen-coupon="chosenCoupon" @click="showList = true" icon="coupon-o" />
            <!-- 优惠券列表 -->
            <van-popup v-model="showList" round position="bottom" style="height: 90%; padding-top: 4px;">
                <van-coupon-list :coupons="coupons" :chosen-coupon="chosenCoupon" :disabled-coupons="disabledCoupons"
                    @change="onChange" @exchange="onExchange" />
            </van-popup>

            <div>
                <van-cell is-link title="我的收藏" @click="show = true" icon="like-o" />
                <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
            </div>
            
            <van-cell title="我的足迹" is-link to="" icon="clock-o" />
            
        </div>
    </div>
</template>
<script>
// 导入组件
import Header from "../../components/Header/Header.vue";
// 优惠券对象
const coupon = {
    available: 1,
    condition: '无使用门槛\n最多优惠12元',
    reason: '',
    value: 150,
    name: '优惠券名称',
    startAt: 1489104000,
    endAt: 1514592000,
    valueDesc: '1.5',
    unitDesc: '元',
};

export default {
    name: 'Home',
    data() {
        return {
            show: false,
            actions: [{ name: '选项一' }, { name: '选项二' }, { name: '选项三' }],

            // 优惠券
            chosenCoupon: -1,
            coupons: [coupon],
            disabledCoupons: [coupon],
        }
    },
    created() {
    },
    components: {
        Header,
    },
    methods: {
        onSelect(item) {
            // 默认情况下点击选项时不会自动收起
            // 可以通过 close-on-click-action 属性开启自动收起
            this.show = false;
            Toast(item.name);
        },
        // 跳转到登入界面
        login() {
            this.$router.push('login');
        },
        // 优惠券
        onChange(index) {
            this.showList = false;
            this.chosenCoupon = index;
        },
        onExchange(code) {
            this.coupons.push(coupon);
        },
    },
}
</script>
<style lang="less" scoped>
.content {
    padding: 16px 16px 160px;
}

.home-contain {
    background-color: rgb(237, 234, 234);
}

.home-top {
    height: 100px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: linear-gradient(to right, rgb(246, 215, 175), pink);

    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

    .home-icon {
        display: flex;
        flex-direction: column;
    }

}

.home-mini {
    margin-right: 20px;
    font-size: 8px;
}

.home-bom {
    height: 100px;
    margin-top: 20px;
}
</style>
