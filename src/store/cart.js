const ADD_COUNT = 'add_count'
const ADD_TO_CART = 'add_to_cart'

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
        return new Promise((resolve,reject) => {
            let oldProduct = state.cartList.find( item => item.iid === payload.iid )
            if(oldProduct){
                context.commit(ADD_COUNT,oldProduct)
                resolve('当前的商品数量+1')
            }else{
                payload.count = 1
                payload.isCheck = true
                context.commit(ADD_TO_CART,payload)
                resolve('添加了新的商品')
            }
        })
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