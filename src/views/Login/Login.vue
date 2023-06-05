<template>
    <div class="login-contian">
        <van-nav-bar title="欢迎登入" left-text="返回" fixed left-arrow @click-left="onClickLeft" />
        <!-- 背景图 -->
        <div class="login-img">
            <img :src="imgSrc" width="100%" height="100%" alt="">
        </div>
        <!-- 其他内容,表单内容 -->
        <div class="other">
            <div class="login-input">
                <p>xx购物系统</p>
                <input type="text">
                <input type="text">
                <button>登入</button>
            </div>

        </div>


    </div>
</template>
<script>
export default {
    data() {
        return {
            imgSrc: require("@/assets/img/background.jpg"),
            // 用户名+密码
            username: '',
            password: '',
        }
    },
    created() {
    },
    methods: {
        // 返回上一级路由
        onClickLeft() {
            this.$router.push('/home');

        },
        // 表单提交事件
        onSubmit(values) {
            console.log('submit', values);
        },
    },
}
</script>
<style lang="less" scoped>
.login-contian {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;

    .login-img {
        width: 100%;
        height: 100%;
        /**宽高100%是为了图片铺满屏幕 **/
        z-index: -1;
        position: absolute;
    }

    .other {
        z-index: 1;
        position: absolute;
        width: 300px;
        height: 300px;
        background: rgba(255, 255, 255, 0.1);
        // 毛玻璃效果
        -webkit-backdrop-filter: blur(8px);
        backdrop-filter: blur(8px);
        border-radius: 25px;
        box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.2);

        .login-input {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

    }

}
</style>
