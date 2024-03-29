import Vue from 'vue'
import Router from 'vue-router'
import Customers from '@/components/Customers'
import About from '@/components/About'
import Add from '@/components/Add'
import CustomerDetails from '@/components/CustomerDetails'
import Edit from '@/components/Edit'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {path: '/',component: Customers},
    {path: '/about',component: About},
    {path: '/add',component: Add},
    {path: '/coustome/:id',component: CustomerDetails},
    {path: '/edit/:id',component: Edit}
  ]
})
