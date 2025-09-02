import "./highlights.scss";

export function initHighlights() {
  const highlightsHTML = `
    <section class="highlights">
    </section>
  `;

  const main = document.querySelector("main");
  main.insertAdjacentHTML("beforeend", highlightsHTML);
}
