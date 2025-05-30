let vantaEffect = null;

export function initVantaBackground(selector) {
  if (!vantaEffect && window.VANTA && window.VANTA.WAVES) {
    const container = document.querySelector(selector);
    if (container) {
      vantaEffect = window.VANTA.WAVES({
        el: container,
        mouseControls: false,
        touchControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x0a0b0c,
        shininess: 50.0,
        waveHeight: 20.0,
        waveSpeed: 0.35,
        zoom: 1.0,
      });
    }
  }
}

export function destroyVantaBackground() {
  if (vantaEffect) {
    vantaEffect.destroy();
    vantaEffect = null;
  }
}
