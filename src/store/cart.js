import {ADD_COUNT,ADD_TO_CART} from './mutation-types'

const state = {
    cartList: []
}
const mutations = {
    // 1.添加数量的操作
    [ADD_COUNT](state,payload){
        payload.count++
    },
    // 2.加入数组的操作
    [ADD_TO_CART](state,payload){
        state.cartList.push(payload)
    }
}
const actions = {
    addCart(context,payload){
        let oldProduct = state.cartList.find( item => item.iid === payload.iid )
        if(oldProduct){
            context.commit(ADD_COUNT,oldProduct)
        }else{
            payload.count = 1
            context.commit(ADD_TO_CART,payload)
        }
    }
}
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters,
}