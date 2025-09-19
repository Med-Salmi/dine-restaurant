import "./reservation.scss";

// DOM template
function renderReservation() {
  const reservationHTML = `
    <section class="reservation" aria-labelledby="reservation-title">
      <div class="reservation__container">
        <form class="reservation__form" action="#" method="post" novalidate>

          <!-- Name -->
          <div class="reservation__field">
            <input id="res-name" name="name" type="text" class="reservation__input" placeholder="Name" required />
            <p class="reservation__error"></p>
          </div>

          <!-- Email -->
          <div class="reservation__field">
            <input id="res-email" name="email" type="email" class="reservation__input" placeholder="Email" required />
            <p class="reservation__error"></p>
          </div>

          <!-- Date -->
          <fieldset class="reservation__group reservation__field">
            <legend class="reservation__label">Pick a date</legend> 
            <div class="reservation__date">
              <input id="res-month" name="month" type="text" placeholder="MM" maxlength="2" class="reservation__input" required />
              <input id="res-day" name="day" type="text" placeholder="DD" maxlength="2" class="reservation__input" required />
              <input id="res-year" name="year" type="text" placeholder="YYYY" maxlength="4" class="reservation__input" required />
            </div>
            <p class="reservation__error"></p>
          </fieldset>

          <!-- Time -->
          <fieldset class="reservation__group reservation__field">
            <legend class="reservation__label">Pick a time</legend>
            <div class="reservation__time">
              <input id="res-hour" name="hour" type="text" placeholder="09" maxlength="2" class="reservation__input" required />
              <input id="res-minute" name="minute" type="text" placeholder="00" maxlength="2" class="reservation__input" required />

              <!-- Custom AM/PM select -->
              <div class="reservation__custom-select" id="res-ampm-select">
                <div class="reservation__custom-select__trigger">AM</div>
                <div class="reservation__custom-select__options">
                  <div class="reservation__custom-select__option">AM</div>
                  <div class="reservation__custom-select__option">PM</div>
                </div>
              </div>
            </div>
            <p class="reservation__error"></p>
          </fieldset>

          <!-- Number of People -->
          <div class="reservation__people">
            <button type="button" class="reservation__control reservation__control--minus" aria-label="Decrease number of people"></button>
            <span class="reservation__count">2 people</span>
            <button type="button" class="reservation__control reservation__control--plus" aria-label="Increase number of people"></button>
          </div>

          <!-- Submit -->
          <button type="submit" class="reservation__submit btn">Make a reservation</button>
        </form>
      </div>
    </section>
  `;

  document
    .querySelector("main")
    .insertAdjacentHTML("beforeend", reservationHTML);

  initCustomSelect();
  attachFormValidation();
}

// Custom dropdown logic
function initCustomSelect() {
  const select = document.getElementById("res-ampm-select");
  if (!select) return; // Guard clause in case the element doesn't exist

  const trigger = select.querySelector(".reservation__custom-select__trigger");
  const options = select.querySelectorAll(
    ".reservation__custom-select__option"
  );

  // Create a hidden input to hold the value for validation purposes
  const hiddenInput = document.createElement("input");
  hiddenInput.type = "hidden";
  hiddenInput.name = "ampm-value";
  hiddenInput.value = trigger.textContent;
  select.appendChild(hiddenInput);

  trigger.addEventListener("click", () => {
    select.classList.toggle("reservation__custom-select--open");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      const selectedValue = option.textContent;
      trigger.textContent = selectedValue;
      hiddenInput.value = selectedValue; // Update the hidden input
      select.classList.remove("reservation__custom-select--open");
    });
  });

  document.addEventListener("click", (e) => {
    if (!select.contains(e.target)) {
      select.classList.remove("reservation__custom-select--open");
    }
  });
}

// Form validation
function attachFormValidation() {
  const form = document.querySelector(".reservation__form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const valid = validateReservationForm(form);
    if (valid) {
      console.log("Form is valid ✅");
      // 👉 handle real submit here
    }
  });
}

function validateReservationForm(form) {
  let valid = true;

  // Clear all previous errors and invalid states
  form
    .querySelectorAll(".reservation__error")
    .forEach((el) => (el.textContent = ""));
  form
    .querySelectorAll(
      ".reservation__input, .reservation__custom-select__trigger"
    )
    .forEach((el) => el.classList.remove("reservation__input--invalid"));
  form
    .querySelectorAll(".reservation__field, .reservation__group")
    .forEach((el) => el.classList.remove("reservation__field--invalid"));

  // --- Validate Individual Fields ---

  // Name validation
  const nameInput = form.querySelector("#res-name");
  if (!nameInput.value.trim()) {
    showError(nameInput, "This field is required");
    valid = false;
  }

  // Email validation
  const emailInput = form.querySelector("#res-email");
  if (!emailInput.value.trim()) {
    showError(emailInput, "This field is required");
    valid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(emailInput.value)) {
    showError(emailInput, "Please use a valid email address");
    valid = false;
  }

  // --- Validate Date Group ---
  const dateFields = ["#res-month", "#res-day", "#res-year"];
  const dateGroupValid = dateFields.every((selector) =>
    form.querySelector(selector).value.trim()
  );
  if (!dateGroupValid) {
    const dateGroup = form.querySelector(
      ".reservation__group .reservation__date"
    );
    showGroupError(dateGroup, "This field is incomplete");
    valid = false;
  }

  // --- Validate Time Group ---
  const hourInput = form.querySelector("#res-hour");
  const minuteInput = form.querySelector("#res-minute");
  const ampmTrigger = form.querySelector(
    ".reservation__custom-select__trigger"
  );

  if (!hourInput.value.trim() || !minuteInput.value.trim()) {
    showGroupError(
      hourInput.closest(".reservation__time"),
      "This field is incomplete"
    );
    valid = false;
  }

  return valid;
}

// Shows error message for single fields
function showError(input, message) {
  const fieldContainer = input.closest(".reservation__field");
  const errorEl = fieldContainer.querySelector(".reservation__error");
  errorEl.textContent = message;
  input.classList.add("reservation__input--invalid");
  fieldContainer.classList.add("reservation__field--invalid");
}

// Shows error message for a group of fields
function showGroupError(group, message) {
  const fieldContainer = group.closest(".reservation__group");
  const errorEl = fieldContainer.querySelector(".reservation__error");
  errorEl.textContent = message;
  fieldContainer.classList.add("reservation__field--invalid");

  // Highlight all inputs in the invalid group
  group
    .querySelectorAll(
      ".reservation__input, .reservation__custom-select__trigger"
    )
    .forEach((el) => {
      el.classList.add("reservation__input--invalid");
    });
}

// Initialization
export function initReservation() {
  renderReservation();
}
