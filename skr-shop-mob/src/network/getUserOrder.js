import axios from "utils/request";
// 请求获取订单接口
// /order/getUserOrder
export default async function getOrder(option) {
    return await axios({ method: 'post', url: "/order/getUserOrder", data: option })
}