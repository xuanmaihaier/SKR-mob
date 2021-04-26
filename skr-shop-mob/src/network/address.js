import axios from 'utils/request'

// 新增地址
export async function addAddress(options){
  return await axios({  
    method:'post',
    url:'/user/addAddress',
    data:options
  })
}

// 删除地址
export async function delAddress(options){
  return await axios({  
    method:'post',
    url:'/user/deleteAddress',
    data:options
  })
}