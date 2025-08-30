import "./styles/main.scss";

const page = document.body.dataset.page;

if (page === "home") {
  import("./home.js").then((module) => {
    module.initHome();
  });
} else if (page === "booking") {
  import("./booking.js").then((module) => {
    module.initBooking();
  });
}
