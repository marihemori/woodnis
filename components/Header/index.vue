<template>
  <header>
    <nav>
      <nuxt-link to="/">
        <h1>Woodnis<span>.</span></h1>
      </nuxt-link>
      <ul v-show="!props.mobile" class="navigation">
        <li>
          <nuxt-link to="/">Home</nuxt-link>
          <nuxt-link to="about">About</nuxt-link>
          <nuxt-link to="shop">Shop</nuxt-link>
          <nuxt-link to="blog">Blog</nuxt-link>
          <nuxt-link to="contact">Contact</nuxt-link>
          <nuxt-link>
            <div class="cart" @click="$router.push('/cart')">
              <img src="~/assets/images/icons/ion_cart.svg" alt="Menu cart" />
              <span>{{ cartStore.productsTotal }}</span>
            </div>
          </nuxt-link>
        </li>
      </ul>
      <img
        @click="toggleMobileNav"
        class="menu-icon"
        :class="{ 'icon-active': props.mobileNav }"
        v-show="props.mobile"
        src="~/assets/images/icons/menu.svg"
        alt="Menu icon"
      />
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li>
            <nuxt-link to="/">Home</nuxt-link>
            <nuxt-link to="about">About</nuxt-link>
            <nuxt-link to="shop">Shop</nuxt-link>
            <nuxt-link to="blog">Blog</nuxt-link>
            <nuxt-link to="contact">Contact</nuxt-link>
            <nuxt-link>
              <div class="cart" @click="$router.push('/cart')">
                <img src="~/assets/images/icons/ion_cart.svg" alt="Menu cart" />
                <span>{{ cartStore.productsTotal }}</span>
              </div>
            </nuxt-link>
          </li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script setup>
import { useCartStore } from "~/stores/cart";
const cartStore = useCartStore();

const props = defineProps({
  scroll: {
    type: null,
  },
  mobile: {
    type: Boolean,
    default: false,
  },
  mobileNav: {
    type: Boolean,
    default: false,
  },
  windowWidth: {
    type: Number,
  },
});

const toggleMobileNav = () => {
  props.mobileNav = !props.mobileNav;
  console.log("carai", props.mobileNav);
};
</script>

<style lang="scss">
header {
  border-bottom: 1px solid #000000;
  padding: 1.2rem 6rem;
  position: fixed;
  width: 100vw;
  z-index: 10;
  background-color: #f6f5f2;
  top: 0;
  transition: 0.5s ease all;
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    transition: 0.5s ease all;
  }
  h1 {
    color: #0d0d0d;
    font-family: Bebas Neue;
    font-size: 2.625rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.0525rem;
    text-transform: uppercase;
    span {
      color: #787d62;
      font-family: Bebas Neue;
      font-size: 2.625rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 0.0525rem;
      text-transform: uppercase;
    }
  }
  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    li {
      display: flex;
      align-items: flex-start;
      gap: 3rem;
      a {
        color: #0d0d0d;
        font-family: Poppins;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.08rem;
        text-transform: uppercase;
        &:hover {
          color: #787d62;
        }
      }
      .cart {
        display: flex;
        cursor: pointer;
      }
    }
  }
  .menu-icon {
    height: 20px;
    cursor: pointer;
    transition: 0.8s ease all;
  }

  .icon-active {
    transform: rotate(180deg);
  }
  .dropdown-nav {
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #fff;
    top: 0;
    left: 0;
    li {
      display: flex;
      flex-direction: column;
    }
  }
  @media screen and (max-width: 920px) {
    padding: 1.2rem 2rem;
  }
}
</style>
