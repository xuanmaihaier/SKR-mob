import axios from "utils/request";
// 请求获取接口
// /user/getMessage
export default async function getMessage(option) {
    return await axios({ method: 'post', url: "/user/getMessage", data: option })
}