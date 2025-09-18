import "./reservation.scss";

// DOM template
function renderReservation() {
  const reservationHTML = `
    <section class="reservation" aria-labelledby="reservation-title">
      <div class="reservation__container max-content-width">

        <!-- Reservation Form -->
        <form class="reservation__form" action="#" method="post" novalidate>

          <!-- Name -->
          <input 
            id="res-name" 
            name="name" 
            type="text" 
            class="reservation__input" 
            Placeholder="Name"
            required 
          />

          <!-- Email -->
          <input 
            id="res-email" 
            name="email" 
            type="email" 
            class="reservation__input" 
            Placeholder="Email"
            required 
          />

          <!-- Date -->
          <fieldset class="reservation__group">
            <legend class="reservation__label">Pick a date</legend> 
            <div class="reservation__date">
              <input 
                id="res-month" 
                name="month" 
                type="text" 
                placeholder="MM" 
                maxlength="2" 
                class="reservation__input" 
                required 
              />
              <input 
                id="res-day" 
                name="day" 
                type="text" 
                placeholder="DD" 
                maxlength="2" 
                class="reservation__input" 
                required 
              />
              <input 
                id="res-year" 
                name="year" 
                type="text" 
                placeholder="YYYY" 
                maxlength="4" 
                class="reservation__input" 
                required 
              />
            </div>
          </fieldset>

          <!-- Time -->
          <fieldset class="reservation__group">
            <legend class="reservation__label">Pick a time</legend>
            <div class="reservation__time">
              <input 
                id="res-hour" 
                name="hour" 
                type="text" 
                placeholder="09" 
                maxlength="2" 
                class="reservation__input" 
                required 
              />
              <input 
                id="res-minute" 
                name="minute" 
                type="text" 
                placeholder="00" 
                maxlength="2" 
                class="reservation__input" 
                required 
              />
              <select 
                id="res-ampm" 
                name="ampm" 
                class="reservation__input" 
                required
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>
          </fieldset>

          <!-- Number of People -->
        <div class="reservation__people">
            <button type="button" class="reservation__control reservation__control--minus" aria-label="Decrease number of people"></button>
            <span class="reservation__count">2 people</span>
            <button type="button" class="reservation__control reservation__control--plus" aria-label="Increase number of people"></button>
        </div>


          <!-- Submit -->
          <button type="submit" class="reservation__submit btn">
            Make a reservation
          </button>

        </form>
      </div>
    </section>
  `;

  const main = document.querySelector("main");
  main.insertAdjacentHTML("beforeend", reservationHTML);
}

// Initialization
export function initReservation() {
  renderReservation();
}
