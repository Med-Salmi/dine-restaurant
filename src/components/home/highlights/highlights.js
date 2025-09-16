import "./highlights.scss";

// DOM template
function renderHighlightsSection() {
  const highlightsHTML = `
    <section class="highlights" aria-labelledby="highlights-title">
      <div class="highlights__container max-content-width">

        <!-- Header -->
        <div class="highlights__header">
          <img 
            src="src/assets/images/features/pattern-divide.svg" 
            alt="" 
            class="highlights__divider" 
          />

          <h2 id="highlights-title" class="highlights__title">
            A few highlights from <br> our menu
          </h2>

          <p class="highlights__intro">
            We cater for all dietary requirements, but here’s a 
             glimpse at some of our diner’s favourites. 
            Our menu is revamped every season.
          </p>
        </div>

        <!-- Cards wrapper -->
        <div class="highlights__cards">

          <!-- Card 1 -->
          <article class="highlights__card">
            <picture>
              <!-- Tablet & Desktop -->
              <source 
                srcset="src/assets/images/highlights/salmon-desktop-tablet.jpg 1x, 
                        src/assets/images/highlights/salmon-desktop-tablet@2x.jpg 2x" 
                media="(min-width: 768px)" 
              />
              <!-- Mobile -->
              <source 
                srcset="src/assets/images/highlights/salmon-mobile.jpg 1x, 
                        src/assets/images/highlights/salmon-mobile@2x.jpg 2x" 
                media="(max-width: 767px)" 
              />
              <img 
                src="src/assets/images/highlights/salmon-mobile.jpg" 
                alt="Seared Salmon Fillet" 
                class="highlights__image" 
              />
            </picture>

            <div class="highlights__card-content">
              <h3 class="highlights__card-title">Seared Salmon Fillet</h3>
              <p class="highlights__card-description">
                Our locally sourced salmon served with a refreshing buckwheat summer salad.
              </p>
            </div>
          </article>
          <hr class="divider">

          <!-- Card 2 -->
          <article class="highlights__card">
            <picture>
              <!-- Tablet & Desktop -->
              <source 
                srcset="src/assets/images/highlights/beef-desktop-tablet.jpg 1x, 
                        src/assets/images/highlights/beef-desktop-tablet@2x.jpg 2x" 
                media="(min-width: 768px)" 
              />
              <!-- Mobile -->
              <source 
                srcset="src/assets/images/highlights/beef-mobile.jpg 1x, 
                        src/assets/images/highlights/beef-mobile@2x.jpg 2x" 
                media="(max-width: 767px)" 
              />
              <img 
                src="src/assets/images/highlights/beef-mobile.jpg" 
                alt="Rosemary Filet Mignon" 
                class="highlights__image" 
              />
            </picture>

            <div class="highlights__card-content">
              <h3 class="highlights__card-title">Rosemary Filet Mignon</h3>
              <p class="highlights__card-description">
                Our prime beef served to your taste with a delicious choice of seasonal sides.
              </p>
            </div>
          </article>
          <hr class="divider">

          <!-- Card 3 -->
          <article class="highlights__card">
            <picture>
              <!-- Tablet & Desktop -->
              <source 
                srcset="src/assets/images/highlights/chocolate-desktop-tablet.jpg 1x, 
                        src/assets/images/highlights/chocolate-desktop-tablet@2x.jpg 2x" 
                media="(min-width: 768px)" 
              />
              <!-- Mobile -->
              <source 
                srcset="src/assets/images/highlights/chocolate-mobile.jpg 1x, 
                        src/assets/images/highlights/chocolate-mobile@2x.jpg 2x" 
                media="(max-width: 767px)" 
              />
              <img 
                src="src/assets/images/highlights/chocolate-mobile.jpg" 
                alt="Summer Fruit Chocolate Mousse" 
                class="highlights__image" 
              />
            </picture>

            <div class="highlights__card-content">
              <h3 class="highlights__card-title">Summer Fruit Chocolate Mousse</h3>
              <p class="highlights__card-description">
                Creamy mousse combined with summer fruits and dark chocolate shavings.
              </p>
            </div>
          </article>

        </div>
      </div>
    </section>
  `;

  const main = document.querySelector("main");
  main.insertAdjacentHTML("beforeend", highlightsHTML);
}

// Initialization
export function initHighlights() {
  renderHighlightsSection();
}
