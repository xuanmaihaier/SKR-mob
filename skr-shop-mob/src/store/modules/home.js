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
            console.log(value);
            value.forEach((item)=>{
                 state.typeOne_list.push(item.res)
            })
           
           
        },
      
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
       
    
    },
  
    getters: {
      
    }
  
  
  
  }
  