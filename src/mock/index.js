
import Mock from "mockjs"

// 模拟接口
//需要拦截的url，需要拦截的类型，数据模板
// 模拟购物车
Mock.mock('https://www.escook.cn/api/cart', 'get', {
    status: 200,
    msg: '获得数据成功',
    // 数组模板随机生成2-5个
    'list|2-7':
        [
            {
                goods_count: '@integer(1,10)',
                goods_img: "@img(100x100,'@color')",
                goods_name: "@cword(2,10)",
                goods_price: '@integer(100,500)',
                'goods_state|1': true,
                // id从0开始+1
                'id|+1': 0,
            },
        ]
})
// 模拟商品列表
Mock.mock('', 'get', {
    status: 200,
    msg: '获得数据成功',
    // 数组模板随机生成2-5个
    'list|2-7':
        [
            {
                goods_count: '@integer(1,10)',
                goods_img: "@img(100x100,'@color')",
                goods_name: "@cword(2,10)",
                goods_price: '@integer(100,500)',
                'goods_state|1': true,
                // id从0开始+1
                'id|+1': 0,
            },
        ]
})
