import "./events.scss";

function renderEventsSection() {
  const eventsHTML = `
    <section class="events">
      <div class="events__container max-content-width">

        <!-- Event Image -->
        <picture class="events__image">
          <source srcset="src/assets/images/events/family-gathering-mobile.jpg 1x, src/assets/images/events/family-gathering-mobile@2x.jpg 2x" media="(max-width: 480px)">
          <source srcset="src/assets/images/events/family-gathering-tablet.jpg 1x, src/assets/images/events/family-gathering-tablet@2x.jpg 2x" media="(max-width: 1024px)">
          <img src="src/assets/images/events/family-gathering-desktop.jpg" 
               srcset="src/assets/images/events/family-gathering-desktop@2x.jpg 2x" 
               alt="Family gathering at our restaurant">
        </picture>

        <!-- Event Content -->
        <div class="events__content">

          <!-- Event Tabs -->
          <nav class="events__tabs" aria-label="Event categories">
            <button class="events__tab events__tab--active" data-tab="family" aria-current="true">Family Gathering</button>
            <button class="events__tab" data-tab="special">Special Events</button>
            <button class="events__tab" data-tab="social">Social Events</button>
          </nav>

          <!-- Event Details: Family Gathering -->
          <div class="events__details active" data-tab-content="family" aria-hidden="false">
            <h2 class="events__title">Family Gathering</h2>
            <p class="events__description">
              We love catering for entire families. So please bring everyone along for a special meal with your loved ones. 
              We’ll provide a memorable experience for all.
            </p>
            <a href="booking.html" role="button" class="events__button button">Book a Table</a>
          </div>

          <!-- Event Details: Special Events -->
          <div class="events__details hidden" data-tab-content="special" aria-hidden="true">
            <h2 class="events__title">Special Events</h2>
            <p class="events__description">
              Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. 
              We’ll be sure to mark your special date with an unforgettable meal.
            </p>
            <a href="booking.html" class="events__button button">Book a Table</a>
          </div>

          <!-- Event Details: Social Events -->
          <div class="events__details hidden" data-tab-content="social" aria-hidden="true">
            <h2 class="events__title">Social Events</h2>
            <p class="events__description">
              Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. 
              We’ll work with you to make your event a hit with everyone.
            </p>
            <a href="booking.html" class="events__button button">Book a Table</a>
          </div>

        </div>
      </div>
    </section>
  `;

  const main = document.querySelector("main");
  main.insertAdjacentHTML("beforeend", eventsHTML);
}

// State management
function setActiveTab(tab, allTabs) {
  allTabs.forEach((t) => {
    t.classList.remove("events__tab--active");
    t.removeAttribute("aria-current");
  });

  tab.classList.add("events__tab--active");
  tab.setAttribute("aria-current", "true");
}

function setActiveContent(target, allDetails) {
  allDetails.forEach((detail) => {
    const isTarget = detail.dataset.tabContent === target;
    detail.classList.toggle("hidden", !isTarget);
    detail.classList.toggle("active", isTarget);
    detail.setAttribute("aria-hidden", String(!isTarget));
  });
}

// Event handlers
function handleTabClick(event, tabs, details) {
  const tab = event.currentTarget;
  const target = tab.dataset.tab;

  setActiveTab(tab, tabs);
  setActiveContent(target, details);
}

// Initialization
function bindEvents() {
  const tabs = document.querySelectorAll(".events__tab");
  const details = document.querySelectorAll(".events__details");

  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => handleTabClick(e, tabs, details));
  });
}

export function initEvents() {
  renderEventsSection();
  bindEvents();
}
