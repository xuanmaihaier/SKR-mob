/*
 * @Descripttion: 
 * @version: 
 * @Author: stride
 * @Date: 2021-04-21 11:14:41
 * @LastEditors: stride
 * @LastEditTime: 2021-04-21 11:46:36
 */
import axios from "utils/request";
/**
 * 获取一级列表
 * url: /type/getproduct
 * 参数：parent_name
 */
export async function getTypeOneList(parent_name,page) {
  return await axios({ method: "post", url: "/type/getproduct", data: { parent_name,
    page } })
}
/**
 * 获取二级列表
 * url: /wares/getSpu
 * 参数：name
 */
export async function getTypeOTwoList(name,series) {
  return await axios({ method: "post", url: "/wares/getSpu", data: { name,series } })
}