import axios from "@/utils/request";
// 获取一级分类
export async function getTypeOne(options) {
  return await axios({
    method: 'post',
    url: '/type/getParentName',
    data: options
  })
}
// 获取二级分类
export async function getTypeTwo(options) {
  return await axios({
    method: 'post',
    url: '/wares/getSecond',
    data: options
  })
}
// 获取一级分类商品
export async function getTypeOneGoods(options) {
  return await axios({
    method: 'post',
    url: '/type/getproduct',
    data: options
  })
}
// 获取二级分类商品
export async function getTypeTwoGoods(options) {
  return await axios({
    method: 'post',
    url: '/wares/getSpu',
    data: options
  })
}
