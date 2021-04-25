// 删除购物车商品列表

import axios from 'utils/request.js';

export async function deleteShopCar (options={}){
    return await axios({
        method:'post',
        url:'/shopcar/deleteShopCar',
        data:options
    })
}