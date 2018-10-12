//  vue mutations模块

import {
RECEIVE_ADDRESS,
RECEIVE_CATEGORY,
RECEIVE_SHOPS
} from '../mutation-type/mutation-type'


export default {
  [RECEIVE_ADDRESS](state,{address}){
    state.address=address
  },
  [RECEIVE_CATEGORY](state,{category}){
    state.category=category
  },
  [RECEIVE_SHOPS](state,{shops}){
    state.shops=shops
  }
}

