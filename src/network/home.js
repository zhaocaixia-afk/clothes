import { request } from './request.js'

export function getMultidata(){
    return request({
        url:'/home/multidata'
    })
}

export function getHomeGoods(type,page){
    return request({
        // /home/data?type=new&page=1
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}
