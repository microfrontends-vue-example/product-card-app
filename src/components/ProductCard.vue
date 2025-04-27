<template>
  <div>
    Додані товари:
    <pre>{{ items }}</pre>
  </div>
  <div class="product-card">
    <h2>{{ product.title }}</h2>
    <p>ID: {{ product.id }}</p>
    <button @click="addToCart">Додати у корзину</button>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from 'mainApp/stores'
import { storeToRefs } from 'pinia'

const cartStore = useCartStore();
const { items } = storeToRefs(cartStore);

const product = {
  id: '1',
  title: 'Футболка Vue.js'
}

function addToCart() {
  cartStore.addItem(product)
}
</script>

<style scoped>
.product-card {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
}
</style>