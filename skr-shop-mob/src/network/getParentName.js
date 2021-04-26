/*
 * @Descripttion: "获取一级分类"
 * @version: xxx
 * @Author: zjjj
 * @Date: 2021-04-25 21:31:37
 * @LastEditors: zjjj
 * @LastEditTime: 2021-04-25 21:33:07
 */
import request from '../utils/request.js'

 const getParentNameApi =  () =>request.post('/type/getParentName')

 export default getParentNameApi;