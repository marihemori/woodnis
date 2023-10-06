<template>
  <footer>
    <div class="details">
      <h1>Woodnis<span>.</span></h1>
      <p>
        Each piece in our collection is carefully selected and constructed with
        exceptional craftsmanship, enhancing the richness and natural texture of
        the wood.
      </p>
      <p>© 2023 Woodnis. Designed by TemplatesJungle</p>
    </div>
    <div class="links">
      <h1>Links</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Shop</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </div>
    <div class="social">
      <h1>Social</h1>
      <ul>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Pinterest</li>
        <li>Twitter</li>
        <li>YouTube</li>
      </ul>
    </div>
    <div class="contact">
      <h1>Contact</h1>
      <ul>
        <li>+12(0) 34 56 78 910</li>
        <li>hello@templatesjungle.com</li>
        <li>tea berry, marinette, USA</li>
      </ul>
    </div>
  </footer>
</template>

<style lang="scss">
footer {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 6rem;
  gap: 4rem;
  @media screen and (max-width: 920px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 1.2rem 2rem;
    gap: 1.5rem;
  }
  .details {
    h1 {
      color: #0d0d0d;
      font-family: Bebas Neue;
      font-size: 2.625rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 0.0525rem;
      text-transform: uppercase;
      margin-bottom: 1rem;
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
    p {
      color: #0d0d0d;
      font-family: Poppins;
      font-size: 1rem;
      font-style: normal;
      font-weight: 300;
      line-height: 180%; /* 1.8rem */
      letter-spacing: 0.02rem;
      margin-bottom: 1rem;
    }
  }
  .links,
  .social,
  .contact {
    h1 {
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
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  }

  .links,
  .social {
    li {
      color: #0d0d0d;
      font-family: Poppins;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 0.08rem;
      text-transform: uppercase;
    }
  }

  .contact {
    li {
      color: #0d0d0d;
      font-family: Poppins;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 0.08rem;
    }
  }
}
</style>
