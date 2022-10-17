import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/home.vue'
import Index from '@/pages/index.vue'
import Product from '@/pages/product.vue'
import Detail from '@/pages/detail.vue'
import Cart from '@/pages/cart.vue'
import Order from '@/pages/order.vue'
// import OrderConfirm from '@/pages/orderConfirm.vue'
// import OrderList from '@/pages/orderList.vue'
// import OrderPay from '@/pages/orderPay.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        { path: '/index', name: 'index', component: Index },
        { path: '/product/:id', name: 'product', component: Product },
        { path: '/detail/:id', name: 'detail', component: Detail }
      ]
    },
    { path: '/cart', name: 'cart', component: Cart },
    { path: '/order', name: 'order', component: Order }
  ]
})

export default router
