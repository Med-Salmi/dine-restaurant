import "./features.scss";

// DOM template
function renderFeaturesSection() {
  const featuresHTML = `
    <section class="features">
      <div class="features__container max-content-width">

        <!-- Feature Item 1 -->
        <div class="features__item">
          <picture class="features__image">
            <!-- Mobile -->
            <source srcset="/images/features/enjoyable-place-mobile.jpg 1x, src/assets/images/features/enjoyable-place-mobile@2x.jpg 2x" media="(max-width: 480px)">
            <!-- Tablet -->
            <source srcset="/images/features/enjoyable-place-tablet.jpg 1x, src/assets/images/features/enjoyable-place-tablet@2x.jpg 2x" media="(max-width: 1024px)">
            <!-- Desktop -->
            <img src="/images/features/enjoyable-place-desktop.jpg" 
                 srcset="/images/features/enjoyable-place-desktop@2x.jpg 2x" 
                 alt="Enjoyable place for all the family">
          </picture>

          <div class="features__content">
            <img src="/images/features/pattern-divide.svg" alt="" class="features__divider">

            <h2 class="features__title">Enjoyable place <br> for all the family</h2>
            <p class="features__description">
              Our relaxed surroundings make dining with us a great experience for everyone. 
              We can even arrange a tour of the farm before your meal.
            </p>
          </div>
        </div>

        <!-- Feature Item 2 -->
        <div class="features__item">
          <picture class="features__image">
            <!-- Mobile -->
            <source srcset="/images/features/locally-sourced-mobile.jpg 1x, src/assets/images/features/locally-sourced-mobile@2x.jpg 2x" media="(max-width: 480px)">
            <!-- Tablet -->
            <source srcset="/images/features/locally-sourced-tablet.jpg 1x, src/assets/images/features/locally-sourced-tablet@2x.jpg 2x" media="(max-width: 1024px)">
            <!-- Desktop -->
            <img src="/images/features/locally-sourced-desktop.jpg" 
                 srcset="/images/features/locally-sourced-desktop@2x.jpg 2x" 
                 alt="Fresh ingredients from our farm and local fishery">
          </picture>

          <div class="features__content">
            <img src="/images/features/pattern-divide.svg" alt="" class="features__divider">

            <h2 class="features__title">The most locally <br> sourced food</h2>
            <p class="features__description">
              All our ingredients come directly from our farm or local fishery. 
              So you can be sure that you’re eating the freshest, most sustainable food.
            </p>
          </div>
        </div>

      </div>
    </section>
  `;

  const main = document.querySelector("main");
  main.insertAdjacentHTML("beforeend", featuresHTML);
}

// Initialization
export function initFeatures() {
  renderFeaturesSection();
}
