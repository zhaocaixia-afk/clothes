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
    },
    // 3.根据iid找到{}更改isCheck
    updateIidCheck(state,iid){
        state.cartList.some(item => {
            if(item.iid === iid){
                item.isCheck = !item.isCheck
                return true;
            }
        })
    }
}
const actions = {
    addCart(context,payload){
        let oldProduct = state.cartList.find( item => item.iid === payload.iid )
        if(oldProduct){
            context.commit(ADD_COUNT,oldProduct)
        }else{
            payload.count = 1
            payload.isCheck = true
            context.commit(ADD_TO_CART,payload)
        }
    }
}
const getters = {
    cartListLength(state){
        return state.cartList.length
    }
}
export default {
    state,
    mutations,
    actions,
    getters,
}