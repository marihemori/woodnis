<template>
  <!-- Hero Section-->
  <section class="hero">
    <Carousel
      :items-to-show="1"
      :autoplay="2000"
      :wrap-around="true"
      :mouseDrag="true"
      :touchDrag="true"
      :transition="500"
    >
      <Slide key="1" :class="'hero-slide'">
        <div>
          <div class="title-container">
            <h1>Wooden Table Set</h1>
          </div>
          <p>
            This wooden furniture is an elegant and versatile piece that
            combines functionality with an attractive design. Handcrafted from
            high-quality wood, it has a refined finish that enhances the natural
            beauty of the wood.
          </p>
          <nuxt-link to="/shop">
            <button class="button">Shop now</button>
          </nuxt-link>
        </div>
        <div class="image-container">
          <img src="~/assets/images/carousel/slide-image-1.png" alt="" />
        </div>
      </Slide>
      <Slide key="2" :class="'hero-slide'">
        <div>
          <div class="title-container">
            <h1>Latest Trends</h1>
          </div>
          <p>
            Our articles also offer insights into furniture maintenance,
            decorating sustainability, and how to create warm, inviting
            environments. Let us be your trusted source of knowledge and
            inspiration in the world of furniture and interior design.
          </p>
          <nuxt-link to="/blog">
            <button class="button">See blog</button>
          </nuxt-link>
        </div>
        <div class="image-container">
          <img
            src="https://images.unsplash.com/photo-1597072689227-8882273e8f6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnVybml0dXJlJTIwd29vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
      </Slide>
      <Slide key="3" :class="'hero-slide'">
        <div>
          <div class="title-container">
            <h1>Gold Assistance</h1>
          </div>
          <p>
            Our friendly and knowledgeable team is ready to help you find the
            best solutions for your furniture and interior design needs. We are
            happy to provide information about our products, prices, delivery
            options and any other queries you may have.
          </p>
          <nuxt-link to="/contact">
            <button class="button">Contact</button>
          </nuxt-link>
        </div>
        <div class="image-container">
          <img src="~/assets/images/carousel/slide-image-3.png" alt="" />
        </div>
      </Slide>

      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </section>

  <!-- Icons Section-->
  <section class="icons-section">
    <ul>
      <li>
        <img
          class="icon"
          src="~/assets/images/icons/la/la_shipping-fast.svg"
          alt="Shipping icon"
        />
        <p>Quick delivery</p>
      </li>
      <li>
        <img
          class="icon"
          src="~/assets/images/icons/la/la_shopping-cart.svg"
          alt="Shipping icon"
        />
        <p>Pick up in store</p>
      </li>
      <li>
        <img
          class="icon"
          src="~/assets/images/icons/la/la_gift.svg"
          alt="Shipping icon"
        />
        <p>Special Packaging</p>
      </li>
      <li>
        <img
          class="icon"
          src="~/assets/images/icons/la/la_redo-alt.svg"
          alt="Shipping icon"
        />
        <p>Return & refund policy</p>
      </li>
    </ul>
  </section>

  <!-- About us Section -->
  <section class="about-section">
    <div class="image">
      <img
        src="https://images.unsplash.com/photo-1578500494198-246f612d3b3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="A image of a sofa"
      />
    </div>
    <div class="description">
      <h1>Since 1990's</h1>
      <p>
        Proudly serving our customers since 1990, we are a renowned furniture
        store that has been delivering quality and design excellence for over
        three decades. With a solid tradition in the furniture market, we have
        become a reference in elegant and durable choices for decorating homes
        and offices.
      </p>
      <p>
        Our long history is a testament to the ongoing commitment to customer
        satisfaction and the relentless pursuit of quality.
      </p>
      <nuxt-link to="/about">
        <button>About us</button>
      </nuxt-link>
    </div>
  </section>

  <!-- Featured Section -->
  <section class="featured-section">
    <div class="title">
      <h1>Our featured products</h1>
      <nuxt-link to="/shop">
        <p>Shop all</p>
      </nuxt-link>
    </div>
    <div class="carousel">
      <Carousel
        :wrap-around="true"
        :bind="settingsFeat"
        :breakpoints="breakpointsFeat"
      >
        <Slide v-for="(product, i) in allProducts.featured" :key="i">
          <div class="content">
            <div>
              <img :src="product.image" :alt="product.name" />
            </div>
            <div class="description">
              <h2>{{ product.name }}</h2>
              <p class="price">${{ product.price }}</p>
              <p
                class="btn-cart"
                @click="cartStore.add(product.id, product.name)"
              >
                Add to cart
              </p>
            </div>
          </div>
        </Slide>
        <template #addons>
          <Pagination />
        </template>
      </Carousel>
    </div>
  </section>

  <!-- Testimonials Section -->
  <section class="testimonials-section">
    <Carousel>
      <Slide key="1">
        <div class="content">
          <img src="~/assets/images/icons/quote/quote-open.svg" alt="" />
          <p class="text">
            "I love the furniture store! I recently purchased a sofa and coffee
            table, and the quality and service exceeded my expectations. The
            staff was incredibly helpful, helping me choose the perfect pieces
            for my space. Delivery was quick and without problems. I will
            definitely be back for my future furniture needs!"
          </p>
          <p class="name">Hana Kimusaki</p>
        </div>
      </Slide>
      <Slide key="2">
        <div class="content">
          <img src="~/assets/images/icons/quote/quote-open.svg" alt="" />
          <p class="text">
            "This furniture store is my number one choice when it comes to
            decorating my home. They have an incredible range of modern and
            classic furniture, and the quality is exceptional. The staff is
            super friendly and knowledgeable, always willing to help. I bought
            my dining room set here and couldn't be happier with the purchase"
          </p>
          <p class="name">Kenedy Junior</p>
        </div>
      </Slide>
      <Slide key="3">
        <div class="content">
          <img src="~/assets/images/icons/quote/quote-open.svg" alt="" />
          <p class="text">
            "I have been a loyal customer of this furniture store for years,
            since I bought my first apartment. They have furniture to suit all
            styles and budgets. The durability of the products is remarkable, as
            I still have some pieces that I bought over a decade ago and are as
            good as new. I recommend this store to all my friends and family who
            are looking for quality furniture."
          </p>
          <p class="name">Gabriela Souza</p>
        </div>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </section>

  <!-- Rooms Section -->
  <section class="rooms-section">
    <div>
      <h1>Living rooms</h1>
      <img src="~/assets/images/rooms/room-1.png" alt="Living room" />
    </div>
    <div>
      <h1>Bedrooms</h1>
      <img src="~/assets/images/rooms/room-2.png" alt="Bedroom" />
    </div>
    <div>
      <h1>Kitchens</h1>
      <img src="~/assets/images/rooms/room-3.png" alt="Kitchen" />
    </div>
  </section>

  <!-- Subscribe Section -->
  <section class="subscribe-section">
    <h1>Get offers & discounts by subscribing us</h1>
    <input type="text" placeholder="Your e-mail address" />
    <button>Subscribe now</button>
  </section>

  <!-- Trendings Section -->
  <section class="featured-section">
    <div class="title">
      <h1>Trending products</h1>
      <nuxt-link to="/shop">
        <p>Shop all</p>
      </nuxt-link>
    </div>
    <div class="carousel">
      <Carousel
        :wrap-around="true"
        :bind="settingsFeat"
        :breakpoints="breakpointsFeat"
      >
        <Slide v-for="(product, i) in allProducts.trending" :key="i">
          <div class="content">
            <div>
              <img :src="product.image" :alt="product.name" />
            </div>
            <div class="description">
              <h2>{{ product.name }}</h2>
              <p class="price">${{ product.price }}</p>
              <p
                class="btn-cart"
                @click="cartStore.add(product.id, product.name)"
              >
                Add to cart
              </p>
            </div>
          </div>
        </Slide>
        <template #addons>
          <Pagination />
        </template>
      </Carousel>
    </div>
  </section>

  <!-- Articles Section -->
  <section class="articles-section">
    <div class="title">
      <h1>Read our articles</h1>
      <nuxt-link to="/blog">
        <p>See all articles</p>
      </nuxt-link>
    </div>
    <div class="articles">
      <div class="article">
        <img
          class="image"
          src="~/assets/images/articles/article-1.png"
          alt=""
        />
        <h1 class="title">Best looking interior things for bedrooms</h1>
        <p class="content">
          Enim ut nunc, ultrices mauris felis viverra amet. Ante sed dictum nisi
          suscipit ac ut faucibus pretium interdum.
        </p>
        <p class="link">Read more</p>
      </div>
      <div class="article">
        <img
          class="image"
          src="~/assets/images/articles/article-1.png"
          alt=""
        />
        <h1 class="title">Best looking interior things for bedrooms</h1>
        <p class="content">
          Enim ut nunc, ultrices mauris felis viverra amet. Ante sed dictum nisi
          suscipit ac ut faucibus pretium interdum.
        </p>
        <p class="link">Read more</p>
      </div>
      <div class="article">
        <img
          class="image"
          src="~/assets/images/articles/article-1.png"
          alt=""
        />
        <h1 class="title">Best looking interior things for bedrooms</h1>
        <p class="content">
          Enim ut nunc, ultrices mauris felis viverra amet. Ante sed dictum nisi
          suscipit ac ut faucibus pretium interdum.
        </p>
        <p class="link">Read more</p>
      </div>
    </div>
  </section>

  <!-- Brands Section -->
  <section class="brands-section">
    <div class="brands">
      <img src="~/assets/images/brands/brand-1.svg" alt="Niferzene brand" />
      <img src="~/assets/images/brands/brand-2.svg" alt="Martan brand" />
      <img src="~/assets/images/brands/brand-3.svg" alt="Furnicare brand" />
      <img src="~/assets/images/brands/brand-4.svg" alt="Makefixtures brand" />
      <img src="~/assets/images/brands/brand-5.svg" alt="Kg91 brand" />
    </div>
  </section>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import allProducts from "../data";
import { useCartStore } from "../stores/cart";

const cartStore = useCartStore();

components: {
  Carousel, Slide, Pagination, Navigation;
}

const settingsFeat = {
  itemsToShow: 1.5,
  snapAlign: "center",
};

const breakpointsFeat = {
  // 920px and up
  920: {
    itemsToShow: 2.5,
    snapAlign: "start",
  },
  // 920px and up
  1530: {
    itemsToShow: 2.5,
    snapAlign: "start",
  },
  1700: {
    itemsToShow: 3.2,
    snapAlign: "start",
  },
};
</script>

<style lang="scss">
// Hero section
.hero {
  margin-top: 8rem;
  .carousel {
    margin: 1.2rem 6rem;
    cursor: grab;
    @media screen and (max-width: 920px) {
      margin: 1.2rem 2rem;
    }
    .hero-slide {
      @media screen and (max-width: 920px) {
        display: flex;
        flex-direction: column;
      }
    }
    .title-container {
      position: relative;
      height: 8rem;
      width: 2rem;
      h1 {
        color: #0d0d0d;
        font-family: Cinzel;
        font-size: 5.75rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.135rem;
        text-transform: capitalize;
        text-align: left;
        position: absolute;
        width: max-content;
        @media screen and (max-width: 920px) {
          position: relative;
          font-size: 3rem;
          width: 20rem;
        }
      }
    }
    p {
      color: #0d0d0d;
      font-family: Poppins;
      font-size: 1rem;
      font-style: normal;
      font-weight: 300;
      line-height: 180%; /* 1.8rem */
      letter-spacing: 0.02rem;
      text-align: left;
    }
    .button {
      display: flex;
      padding: 1rem 3.125rem;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.625rem;
      background: #787d62;
      border: none;
      color: #f6f5f2;
      text-align: center;
      font-family: Poppins;
      font-size: 1rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 0.08rem;
      text-transform: uppercase;
      cursor: pointer;
      margin-top: 2rem;
      cursor: pointer;
    }
    .image-container {
      img {
        width: 37rem;
        height: 35rem;
        object-fit: cover;
        @media screen and (max-width: 920px) {
          margin-top: 2rem;
          width: 18rem;
          height: 18rem;
        }
      }
    }
    &__pagination {
      justify-content: left;
      @media screen and (max-width: 920px) {
        justify-content: center;
      }
    }
    &__pagination-button {
      &::after {
        background-color: #b1b1b1;
      }
    }
    &__pagination-button--active {
      &::after {
        background-color: #787d62;
      }
    }
    .carousel__slide {
      padding: 1rem;
    }
  }
}

// Icons Section
.icons-section {
  margin-top: 6rem;
  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    list-style: none;
    padding: 1.2rem 6rem;
    @media screen and (max-width: 920px) {
      grid-template-columns: repeat(1, 1fr);
      gap: 2rem;
      place-items: center;
      padding: 1.2rem 2rem;
    }
    li {
      color: #0d0d0d;
      font-family: Cinzel;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 0.03rem;
      text-transform: capitalize;
      align-self: stretch;
      text-align: left;
      display: flex;
      align-items: center;
      gap: 0.8rem;
      img {
        width: 4.5rem;
        border: 1px solid #b1b1b1;
        border-radius: 50%;
        padding: 0.8rem;
      }
    }
  }
}

// About Section
.about-section {
  margin-top: 6rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  list-style: none;
  padding: 1.2rem 6rem;
  align-items: center;
  @media screen and (max-width: 1700px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 1.2rem 2rem;
    justify-items: center;
  }
  .description {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    h1 {
      color: #0d0d0d;
      font-family: Cinzel;
      font-size: 4.5rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 0.09rem;
      text-transform: capitalize;
      @media screen and (max-width: 920px) {
        font-size: 3rem;
      }
    }
    p {
      color: #0d0d0d;
      font-family: Poppins;
      font-size: 1rem;
      font-style: normal;
      font-weight: 300;
      line-height: 180%; /* 1.8rem */
      letter-spacing: 0.02rem;
      cursor: pointer;
    }
    button {
      border: 1px solid #b1b1b1;
      background: none;
      display: flex;
      padding: 1.25rem 3.125rem;
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
  }
  .image {
    img {
      width: 37rem;
      height: 35rem;
      object-fit: cover;
      @media screen and (max-width: 920px) {
        width: 21rem;
        height: 20rem;
        margin-bottom: 2rem;
      }
    }
  }
}

// Featured Section
.featured-section {
  margin-top: 6rem;
  padding: 1.2rem 6rem;
  @media screen and (max-width: 920px) {
    padding: 1.2rem 2rem;
  }
  .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 920px) {
      flex-direction: column;
      align-items: flex-start;
    }
    h1 {
      color: #0d0d0d;
      font-family: Cinzel;
      font-size: 4.5rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 0.09rem;
      text-transform: capitalize;
      margin-bottom: 3rem;
      @media screen and (max-width: 920px) {
        font-size: 3rem;
      }
    }
    p {
      color: #0d0d0d;
      text-align: center;
      font-family: Poppins;
      font-size: 1rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 0.08rem;
      text-transform: uppercase;
      @media screen and (max-width: 920px) {
        margin-bottom: 3rem;
      }
    }
  }
  .carousel {
    cursor: grab;
    &:target {
      cursor: grabbing;
    }
    .content {
      display: flex;
      flex-direction: column;
      img {
        height: 24rem;
        object-fit: contain;
      }
      .description {
        text-align: left;
        h2 {
          color: #0d0d0d;
          font-family: Cinzel;
          font-size: 1.5rem;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          letter-spacing: 0.035rem;
          text-transform: capitalize;
        }
        .price {
          color: #787d62;
          font-family: Poppins;
          font-size: 1.25rem;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          letter-spacing: 0.1125rem;
          text-transform: capitalize;
        }
        .btn-cart {
          color: #0d0d0d;
          text-align: left;
          font-family: Poppins;
          font-size: 1rem;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          letter-spacing: 0.08rem;
          text-transform: uppercase;
          cursor: pointer;
        }
      }
    }
    .carousel__pagination {
      margin-top: 2rem;
    }
    .carousel__slide {
      justify-content: flex-start;
      @media screen and (max-width: 920px) {
        /* justify-content: center; */
      }
    }
  }
}

// Testimonials Section
.testimonials-section {
  margin-top: 6rem;
  padding: 0 6rem;
  @media screen and (max-width: 920px) {
    padding: 0;
  }
  .content {
    padding: 0 2rem;
    cursor: grab;
    .text {
      color: #0d0d0d;
      text-align: center;
      font-family: Poppins;
      font-size: 1.3rem;
      font-style: italic;
      font-weight: 300;
      line-height: 180%; /* 3.2625rem */
      letter-spacing: 0.03625rem;
      margin-top: 1rem;
    }
    .name {
      color: #787d62;
      font-family: Poppins;
      font-size: 1rem;
      font-style: normal;
      font-weight: 500;
      line-height: 180%; /* 1.8rem */
      letter-spacing: 0.02rem;
      margin-top: 2rem;
    }
  }
}

// Rooms Section
.rooms-section {
  margin-top: 6rem;
  padding: 0 6rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 1700px) {
    gap: 2rem;
    padding: 0 2rem;
    flex-direction: column;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    h1 {
      color: #0d0d0d;
      font-family: Cinzel;
      font-size: 1.75rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 0.035rem;
      text-transform: capitalize;
    }
    img {
      height: 30rem;
      object-fit: contain;
    }
  }
}

// Subscribe Section
.subscribe-section {
  margin-top: 6rem;
  padding: 0 22rem;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 920px) {
    padding: 0 2rem;
  }
  h1 {
    color: #0d0d0d;
    font-family: Cinzel;
    font-size: 3rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.09rem;
    text-transform: capitalize;
    margin-bottom: 1.5rem;
  }
  input {
    background: #fff;
    border: none;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.04);
    display: flex;
    padding: 1.25rem 3.125rem;
    align-items: center;
    align-self: stretch;
    color: #b1b1b1;
    font-family: Poppins;
    font-size: 1rem;
    font-style: italic;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.02rem;
  }
  button {
    border: none;
    display: flex;
    padding: 1.25rem 0rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    align-self: stretch;
    background: #0d0d0d;
    color: #f6f5f2;
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
}

// Articles Section
.articles-section {
  margin-top: 6rem;
  padding: 0 6rem;
  @media screen and (max-width: 920px) {
    padding: 0 2rem;
  }
  .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 920px) {
      flex-direction: column;
      align-items: flex-start;
    }
    h1 {
      color: #0d0d0d;
      font-family: Cinzel;
      font-size: 4.5rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 0.09rem;
      text-transform: capitalize;
      margin-bottom: 3rem;
      @media screen and (max-width: 920px) {
        font-size: 3rem;
      }
    }
    p {
      color: #0d0d0d;
      text-align: center;
      font-family: Poppins;
      font-size: 1rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 0.08rem;
      text-transform: uppercase;
      @media screen and (max-width: 920px) {
        margin-bottom: 3rem;
      }
    }
  }
  .articles {
    display: flex;
    flex-direction: row;
    gap: 4rem;
    @media screen and (max-width: 1700px) {
      flex-direction: column;
    }
    .article {
      @media screen and (max-width: 920px) {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      .image {
        height: 13rem;
        width: -webkit-fill-available;
        background-size: cover;
      }
      .title {
        color: #787d62;
        font-family: Cinzel;
        font-size: 1.75rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.035rem;
        text-transform: capitalize;
      }
      .content {
        color: #0d0d0d;
        font-family: Poppins;
        font-size: 1rem;
        font-style: normal;
        font-weight: 300;
        line-height: 180%; /* 1.8rem */
        letter-spacing: 0.02rem;
      }
      .link {
        color: #0d0d0d;
        font-family: Poppins;
        font-size: 1rem;
        font-style: italic;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.02rem;
        text-decoration-line: underline;
        text-transform: capitalize;
      }
    }
  }
}

// Brands Section
.brands-section {
  border-top: 1px solid #000000;
  border-bottom: 1px solid #000000;
  margin-top: 6rem;
  margin-top: 6rem;
  padding: 4rem;
  .brands {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    @media screen and (max-width: 920px) {
      grid-template-columns: repeat(1, 1fr);
      gap: 2rem;
      place-items: center;
    }
  }
}
</style>
