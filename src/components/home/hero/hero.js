import "./hero.scss";

// DOM template
function renderHeroSection() {
  const heroHTML = `
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero__container max-content-width">
        <a href="/" class="hero__logo">
          <img src="/logo.svg" alt="Dine Restaurant Logo">
        </a>

        <h1 id="hero-title" class="hero__headline">Exquisite dining <br> since 1989</h1>

        <p class="hero__text">
          Experience our seasonal menu in beautiful country surroundings. 
          Eat the freshest produce from the comfort of our farmhouse.
        </p>

        <a href="#booking" role="button" class="hero__cta btn">Book a table</a>
      </div>
    </section>
  `;

  const main = document.querySelector("main");
  main.insertAdjacentHTML("afterbegin", heroHTML);
}

// Initialization
export function initHero() {
  renderHeroSection();
}
