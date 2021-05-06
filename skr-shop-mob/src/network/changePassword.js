import axios from "utils/request";
// 请求修改密码接口
// /user/changePassword
export default async function getRegister(option) {
    return await axios({ method: 'post', url: "/user/changePassword", data: option })
}