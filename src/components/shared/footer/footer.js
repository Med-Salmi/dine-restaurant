import "./footer.scss";

// DOM template
function renderFooterSection() {
  const footerHTML = `
    <footer class="footer" aria-labelledby="footer-title">
      <div class="footer__container max-content-width">

        <!-- Logo -->
        <a href="/" class="footer__logo">
          <img src="/logo.svg" alt="Dine Restaurant Logo">
        </a>

        <!-- Info Containers -->
        <div class="footer__info">

          <!-- Address Section -->
          <div class="footer__address">
            <p>Marthwaite, Sedbergh</p>
            <p>Cumbria</p>
            <p>+00 44 123 4567</p>
          </div>

          <!-- Open Times Section -->
          <div class="footer__open-times">
            <h4>OPEN TIMES</h4>
            <p>MON - FRI: 09:00 AM - 10:00 PM</p>
            <p>SAT - SUN: 09:00 AM - 11:30 PM</p>
          </div>

        </div>

      </div>
    </footer>
  `;

  const main = document.querySelector("main");
  main.insertAdjacentHTML("beforeend", footerHTML);
}

// Initialization
export function initFooter() {
  renderFooterSection();
}
