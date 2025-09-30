const FIGMA_URL = "https://www.figma.com/";
// Detect if running as installed PWA
const isStandalone = window.matchMedia("(display-mode: standalone)").matches ||
  window.navigator.standalone === true;

if (isStandalone) {
  // In installed PWA → replace window with Figma
  location.replace(FIGMA_URL);
} else {
  // In browser → show message or auto-redirect if you want
  document.write("<p>Install this app to open Figma in fullscreen.</p>");
  // or just location.href = FIGMA_URL;
}