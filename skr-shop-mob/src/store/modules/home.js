/*
 * @Descripttion: 
 * @version: 
 * @Author: stride
 * @Date: 2021-04-21 12:53:27
 * @LastEditors: stride
 * @LastEditTime: 2021-04-25 20:05:46
 */
import {getTypeOne} from 'network/getNav.js'
import {getTypeOneList,getTypeOTwoList} from 'network/getList.js'
import {getSpu} from 'network/getHomeList'

export default {
    state:{
        // 轮播图图片
        getSpuList:[],
        getSpuId:[],
        // 一级导航
        typeOne:[],
        // 一级数据列表 
        typeOne_list:[],
        page:1,
        lodingflag:false,
        // 二级数据的参数
        typeTwoList:[]
    },
    mutations: {
        commitTypeOne(state,value){
            state.typeOne = value
        },
        commitTypeOneList(state,value){ 
            value.forEach((item)=>{
                 state.typeOne_list = [...state.typeOne_list,item.res]
            })
        },
        commitGetSpu(state,value){
            value.forEach((item)=>{ 
                state.getSpuList =[...new Set([... state.getSpuList,item.swiperImg])]
                state.getSpuId.push(item) 
           })
            state.getSpuId =state.getSpuId.slice(0,4)
        },
        commitTypeList(state,value){
            state.typeTwoList = value
        }
       
    },
    actions: {
        // 获取一级标题
        async typeOne(store){
            const {data:res} =await getTypeOne()
           let reslut = res.slice(0,4) 
            store.commit('commitTypeOne',reslut) 
            // console.log(store.state.typeOne,'454');
            let resOne =[]
            // console.log(,'----');
            reslut.forEach(async (item,index) => {
                resOne.push( getTypeOneList(item))
              
            }); 
            const resOnes= await Promise.all(resOne)
            store.commit('commitTypeOneList',resOnes)
        },
        //获取轮播图图片
        async getSpu_(store,value){
            const reslut =await getSpu(value)
            store.commit('commitGetSpu',reslut.res)
        },
        // 二级数据的参数
        async typeTwo(store,value){
            let index=value.indexOf('_');
            let {data:res} = await getTypeOTwoList(value.substr(0,index),value.substr(index+1))
            store.commit('commitTypeList',res)
        }
    },
  
    getters: {
      
    }
  
  
  
  }
  