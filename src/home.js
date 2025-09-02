import { initHero } from "./components/home/hero/hero.js";
import { initFeatures } from "./components/home/features/features.js";
import { initHighlights } from "./components/home/highlights/highlights.js";

export function initHome() {
  initHero();
  initFeatures();
  initHighlights();
}
