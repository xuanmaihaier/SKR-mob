/*
 * @Descripttion: "获取二级分类"
 * @version: xxx
 * @Author: zjjj
 * @Date: 2021-04-25 21:32:06
 * @LastEditors: zjjj
 * @LastEditTime: 2021-04-25 21:33:21
 */
import request from 'utils/request'
 const getSecondApi = () => request.post('/wares/getSecond')

 export default getSecondApi