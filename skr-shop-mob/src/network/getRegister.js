import axios from "utils/request";
// 请求注册接口
// /user/register
export default async function getRegister(option) {
    return await axios({ method: 'post', url: "/user/register", data: option })
}