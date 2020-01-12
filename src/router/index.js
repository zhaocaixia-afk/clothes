import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')

const Detail = () => import('views/detail/Detail')

Vue.use(VueRouter)

const routes = [
  { path:'', redirect: '/home' },
  { path:'/home', component: Home,meta:{showFooter:true} },
  { path:'/category', component: Category,meta:{showFooter:true} },
  { path:'/cart', component: Cart,meta:{showFooter:true} },
  { path:'/profile', component: Profile,meta:{showFooter:true} },

  { path:'/detail', component: Detail }
  // { path:'/detail/:iid', component: Detail }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
