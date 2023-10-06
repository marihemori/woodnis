<template>
  <section class="cart-section">
    <h1>My cart</h1>
    <div v-if="cartStore.formattedCart.length">
      <div v-for="item in cartStore.formattedCart" :key="item.id">
        <!-- <img :src="item.image" :alt="item.name" /> -->
        <h3 class="item-title">{{ item.name }}</h3>
        <div class="item-value">
          <div class="quantity">
            <button @click="cartStore.add(item.id, item.name)">Add +</button>
            <span>{{ item.quantity }}</span>
            <button @click="cartStore.remove(item.id, item.name)">
              Remove -
            </button>
          </div>
          <div class="price">
            <p>{{ item.quantity }} X {{ item.price }} = {{ item.cost }}</p>
            <button @click="cartStore.removeProduct(item.id, item.name)">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
    <p v-else class="empty">Your cart is empty!</p>
  </section>
</template>

<script setup>
import { useCartStore } from "../stores/cart.js";
const cartStore = useCartStore();
</script>

<style lang="scss">
.cart-section {
  padding: 1.2rem 6rem;
  h1 {
    color: #0d0d0d;
    font-family: Cinzel;
    font-size: 3rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.09rem;
    text-transform: capitalize;
  }
  .item-title {
    color: #0d0d0d;
    font-family: Cinzel;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.035rem;
    text-transform: capitalize;
    margin-bottom: 1rem;
  }
  .item-value {
    .quantity {
      display: flex;
      gap: 1rem;
      align-items: center;
      margin-bottom: 1.5rem;
      span {
        font-size: 1.5rem;
      }
    }
    .price {
      p {
        font-size: 1.5rem;
        margin-bottom: 1rem;
      }
    }
  }
  button {
    border: 1px solid #b1b1b1;
    background: none;
    display: flex;
    padding: 0.6rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.625rem;
    color: #0d0d0d;
    text-align: center;
    font-family: Poppins;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.08rem;
    text-transform: uppercase;
    cursor: pointer;
  }
  .empty {
    color: #0d0d0d;
    font-family: Poppins;
    font-size: 1rem;
    font-style: normal;
    font-weight: 300;
    line-height: 180%; /* 1.8rem */
    letter-spacing: 0.02rem;
    margin-top: 1rem;
  }
}
</style>
