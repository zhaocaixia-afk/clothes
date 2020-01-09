import axios from 'axios'

// 第一种:没有成功
// export function request(config, success, failure){
//     // 1.创建axios实例
//     const instance = axios.create({
//         baseURL: 'http://123.207.32.32:8000',
//         timeout: 5000
//     });
//     // 2.发送真正的网络请求
//     instance(config).then(res => {
//         success(res)
//     }).catch(err => {
//         failure(err)
//     })
// }
// 第二种
// export function request(config){
//     // 1.创建axios实例
//     const instance = axios.create({
//         baseURL: 'http://123.207.32.32:8000',
//         timeout: 5000
//     });
//     // 2.发送真正的网络请求
//     instance(config.baseConfig)
//     .then(res => {
//         config.success(res)
//     }).catch(err => {
//         config.failure(err)
//     })
// }
// 第三种
// export function request(config){
//     return new Promise((resolve,reject) => {
//         // 1.创建axios实例
//         const instance = axios.create({
//             baseURL: 'http://123.207.32.32:8000',
//             timeout: 5000
//         });
//         // 2.发送真正的网络请求
//         instance(config)
//             .then(res => {
//                 resolve(res)
//             }).catch(err => {
//                 reject(err)
//             })
//     })
// }
// 第四种
export function request(config){
    // 1.创建axios实例
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    });
    // 3.请求拦截
    instance.interceptors.request.use(config => {
        // console.log(config) //config为完整的url信息
        // 1.比如config中的一些信息不符合服务器的要求
        // 2.比如每次发送网络请求时,都希望在界面中显示一个请求的图标
        // 3.某些网络请求(比如登录(token)),必须携带一些特殊的信息
        return config
    },err => {
        console.log(err)
    })
    // 4.响应拦截:返回精简数据
    instance.interceptors.response.use(res => {
        return res.data
    },err => {
        console.log(err)
    })
    // 2.发送真正的网络请求
    return instance(config)
}
