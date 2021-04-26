import axios from "utils/request";
// 请求登录接口
// /user/login
export default async function getLogin(option) {
    return await axios({ method: 'post', url: "/user/login", data: option })
}