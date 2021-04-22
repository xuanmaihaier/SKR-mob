import axios from 'utils/request'

export async function getImg(parent_name,start,end,sort_){
    return await axios({method:'post',url:"/type/getImg",data:{parent_name,start,end,sort_}})
}
