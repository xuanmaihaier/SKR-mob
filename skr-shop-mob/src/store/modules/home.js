import {getTypeOne} from 'network/getNav.js'
import {getTypeOneList} from 'network/getList.js'
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
    },
    mutations: {
        commitTypeOne(state,value){
            state.typeOne = value
        },
        commitTypeOneList(state,value){
            value.forEach((item)=>{
                 state.typeOne_list.push(item.res)
            })
        },
        commitGetSpu(state,value){
            value.forEach((item)=>{ 
                state.getSpuList.push(item.swiperImg)
                state.getSpuId.push(item.id)
           })
           console.log( state.getSpuList);
           
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
            reslut.forEach(async (item,index) => {
                
                resOne.push( getTypeOneList(item))
              
            }); 
            const resOnes= await Promise.all(resOne)
            store.commit('commitTypeOneList',resOnes)
        },
        //获取轮播图图片
        async getSpu_(store,value){
            const reslut =await getSpu(value)
            console.log(reslut);
            store.commit('commitGetSpu',reslut.res)
        }  
    
    },
  
    getters: {
      
    }
  
  
  
  }
  