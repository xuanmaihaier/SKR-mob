import {getTypeOne} from 'network/getNav.js'
import {getTypeOneList} from 'network/getList.js'
export default {
   
    state:{
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
            state.typeOne_list.push(value)
            console.log( state.typeOne_list);
        },
      
    },
    actions: {
        // 获取一级标题
        async typeOne(store){
            const {data:res} =await getTypeOne()
           let reslut = res.slice(0,4) 
            store.commit('commitTypeOne',reslut) 
            // console.log(store.state.typeOne,'454');
            reslut.forEach(async (item,index) => {
                const resOne = await getTypeOneList(item)
                // let obj = {}
                // obj[item] = resOne.res
                // console.log(obj);
                store.commit('commitTypeOneList',resOne.res)
            });
            
        },
       
    
    },
  
    getters: {
      
    }
  
  
  
  }
  