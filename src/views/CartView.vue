<template>
    <div class="container py-24 flex gap-4">
        <div class="w-8/12">
            <h2 class="flex gap-2 mb-5">
                <ShoppingCartIcon color="#3d3d3d" width=24 />Mi carrito
            </h2>
            <div v-if="products.length > 0">
                <Product v-for="product in products" :key="product.id" :product="product" />
            </div>
            <router-link to="/" v-else>No hay productos aún, ¡vamos a comprar!</router-link>

        </div>
        <div class="max-w-lg w-4/12 border-gray-400/60 border m-1 p-4 rounded-md mt-[calc(3.8rem)] bg-stone-100 mb-54">
            <h2 class="text-xl pb-2 font-semibold">Resumen de mi orden</h2>
            <div class="border border-gray-200"></div>
            <label class="block text-gray-700 text-m font-normal mb-2 pt-2 pb-1" for="username">
                Cupón de descuento:
            </label>
            <input
                class="border-0 py-2 pl-2 outline-zinc-400 bg-transparent block text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 rounded-md w-full"
                type="text" placeholder="Ingrese su cupón">
            <div class="flex justify-between">
                <h2 class="text-lg py-3 inline font-semibold">Total:</h2>
                <h2 class="text-xl py-3 inline">${{ store.subtotal }}</h2>
            </div>
            <button class="bg-primary py-2 text-white rounded-md w-full mb-3">Finalizar compra</button>
            <button class="bg-transparent py-2 text-primary rounded-md w-full border-primary border-2">Seguir
                comprando</button>
        </div>
    </div>
</template>

<script setup>
import ShoppingCartIcon from '@/assets/icons/ShoppingCartIcon.vue'
import { useCartStore } from '@/stores/cartStore';
import Product from '@/components/cart/Product.vue';
import { computed, ref, watch } from 'vue';

const store = useCartStore()
const products = computed(() => store.cart);


</script>

<style scoped></style>