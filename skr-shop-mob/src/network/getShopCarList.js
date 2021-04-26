// 获取购物车商品列表

import axios from 'utils/request.js';

export async function getShopCar (options={}){
    return await axios({
        method:'post',
        url:'/shopcar/getShopCar',
        data:options
    })
}

// 删除购物车商品列表

export async function deleteShopCar (options={}){
    return await axios({
        method:'post',
        url:'/shopcar/deleteShopCar',
        data:options
    })
}

// 增加购物车商品

export async function addShopCar(options={}){
    return await axios({
        method:'post',
        url:'/shopCar/addShopCar',
        data:options
    })
}