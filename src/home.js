import { initHero } from "./components/home/hero/hero.js";
import { initFeatures } from "./components/home/features/features.js";
import { initHighlights } from "./components/home/highlights/highlights.js";
import { initEvents } from "./components/home/events/events.js";
import { initCta } from "./components/home/cta/cta.js";

export function initHome() {
  initHero();
  initFeatures();
  initHighlights();
  initEvents();
  initCta();
}
