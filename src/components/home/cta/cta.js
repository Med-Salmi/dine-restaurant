import "./cta.scss";

// DOM template
function renderCtaSection() {
  const ctaHTML = `
    <section class="cta" aria-labelledby="cta-title">
      <div class="cta__container max-content-width">
        <h2 id="cta-title" class="cta__headline">
          Ready to make a reservation?
        </h2>

        <a href="booking.html" role="button" class="cta__button btn">
          Book a table
        </a>
      </div>
    </section>
  `;

  const main = document.querySelector("main");
  main.insertAdjacentHTML("beforeend", ctaHTML);
}

// Initialization
export function initCta() {
  renderCtaSection();
}
