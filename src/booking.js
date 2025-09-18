import { initBookingHero } from "./components/booking/booking-hero/booking-hero";
import { initReservation } from "./components/booking/reservation/reservation";
import { initFooter } from "./components/shared/footer/footer.js";

export function initBooking() {
  initBookingHero();
  initReservation();
  initFooter();
}
