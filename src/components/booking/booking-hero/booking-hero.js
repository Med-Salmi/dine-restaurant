import "./booking-hero.scss";

// DOM template
function renderBookingHero() {
  const bookingHeroHTML = `
    <section class="booking-hero" aria-labelledby="booking-hero-title">
      <div class="booking-hero__container max-content-width">
        
        <!-- Logo -->
        <img 
          src="/logo.svg" 
          alt="Dine restaurant logo" 
          class="booking-hero__logo"
        />

        <!-- Content + Button Wrapper -->
        <div class="booking-hero__content-wrapper">

          <!-- Headline + Paragraph -->
          <div class="booking-hero__content">
            <h1 id="booking-hero-title" class="booking-hero__headline">
              Reservations
            </h1>

            <p class="booking-hero__text">
              We can’t wait to host you. If you have any special requirements please 
              feel free to call on the phone number below. We’ll be happy to accommodate you.
            </p>
          </div>

          <!-- Button -->
          <button class="booking-hero__button btn">
            Reserve place
          </button>

        </div>
      </div>
    </section>
  `;

  const main = document.querySelector("main");
  main.insertAdjacentHTML("afterbegin", bookingHeroHTML);
}

// Initialization
export function initBookingHero() {
  renderBookingHero();
}
