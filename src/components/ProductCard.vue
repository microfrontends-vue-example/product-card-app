<template>
  <div class="product-card">
    <img :src="product.img">
    <div class="footer">
      <h2>{{ product.title }}</h2>
      <div class="price">
        <p>Price: {{ product.price }}$</p>
        <button @click="addToCart">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from 'mainApp/stores'
import { storeToRefs } from 'pinia'

const cartStore = useCartStore();
const { items } = storeToRefs(cartStore);

const props = defineProps(['product']);

function addToCart() {
  cartStore.addItem(props.product)
}
</script>

<style scoped>
.product-card {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
}

img {
  width: 100%;
}

.price {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>