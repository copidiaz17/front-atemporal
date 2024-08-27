import { createRouter, createWebHistory } from "vue-router";

import HomeView from '../../../resources/js/Pages/HomeView.vue';
import ProductDetailView from '../../../resources/js/Pages/ProductDetailView.vue';
import ProductListView from '../../../resources/js/Pages/ProductListView.vue';
import LoginView from '../../../resources/js/Pages/LoginView.vue';
import RegisterView from '../../../resources/js/Pages/RegisterView.vue';
import CartView from '../../../resources/js/Pages/CartView.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/products',
        name: 'productList',
        component: ProductListView
    },
    {
        path: '/products/:id',
        name: 'detail',
        component: ProductDetailView
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterView
    },
    {
        path: '/cart',
        name: 'cart',
        component: CartView
    },
    {
        path: '/category/:name',
        name: 'category',
        component: ProductListView
    }
]

const router = createRouter({
    history: createWebHistory(''),
    routes
})

export default router