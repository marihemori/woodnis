import { defineStore } from "pinia";

import products from "~/data";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cartContent: {},
  }),
  getters: {
    formattedCart() {
      console.log("oi");
      return Object.keys(this.cartContent).map((productId) => {
        const product = this.cartContent[productId];

        const featuredProduct = products.featured.find(
          (p) => p.id === product.productId && p.name === product.productName
        );

        const trendingProduct = products.trending.find(
          (p) => p.id === product.productId && p.name === product.productName
        );

        const name = trendingProduct
          ? trendingProduct.name
          : featuredProduct
          ? featuredProduct.name
          : null;

        const price = trendingProduct
          ? trendingProduct.price
          : featuredProduct
          ? featuredProduct.price
          : null;

        return {
          id: product.productId,
          image: product.image,
          name: name,
          price: price,
          quantity: product.quantity,
          cost: product.quantity * price,
        };
      });
    },
    total() {
      return Object.keys(this.cartContent).reduce((acc, id) => {
        const product = products.find((p) => p.id === id);
        if (product) {
          return acc + product.price * cartContent[id].quantity;
        }
        return acc + 0;
      }, 0);
    },
    productsTotal() {
      return Object.keys(this.cartContent).reduce((acc, id) => {
        return acc + this.cartContent[id].quantity;
      }, 0);
    },
  },
  actions: {
    add(productId, productName) {
      const key = productId + "-" + productName;
      if (this.cartContent.hasOwnProperty(key)) {
        this.cartContent[key].quantity += 1;
      } else {
        this.cartContent[key] = {
          productId,
          productName,
          quantity: 1,
        };
      }
    },
    remove(productId, productName) {
      const key = productId + "-" + productName;
      if (!this.cartContent[key]) {
        return;
      }
      this.cartContent[key].quantity -= 1;
      if (this.cartContent[key].quantity === 0) {
        delete this.cartContent[key];
      }
    },
    removeProduct(productId, productName) {
      const key = productId + "-" + productName;
      delete this.cartContent[key];
    },
  },
});
