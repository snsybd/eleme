import {reqAddplace,reqFoodtypes,reqShopslist} from '../../api'
import {RECEIVE_SHOPS,RECEIVE_CATEGORY,RECEIVE_ADDRESS} from '../mutation-type/mutation-type'
export default {
  async getAddplace({commit,state}){
    const {latitude,longitude}=state

    const result= await reqAddplace(latitude+','+longitude)
    commit(RECEIVE_ADDRESS,{address:result.data})
},
   async getFoodtypes({commit}){
  const result= await reqFoodtypes()
     commit(RECEIVE_CATEGORY,{category:result.data})
  },
  async getShopslist({commit,state}){
  const {latitude,longitude}=state
    const result=await reqShopslist({latitude,longitude})
    commit(RECEIVE_SHOPS,{shops:result.data})
  }
}
