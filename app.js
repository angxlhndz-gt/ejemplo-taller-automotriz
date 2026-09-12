const APP_CONFIG = {
  name: 'Taller Demo',
  whatsappNumber: '000000000000', // Reemplazar por el número real, solo dígitos y código de país.
  whatsappDisplay: 'WhatsApp por configurar',
  location: 'Nueva ubicación',
  reference: 'Referencia: Bodega 14',
  mapsUrl: '#', // Reemplazar por el enlace de Google Maps.
  socials: { instagram: '#', facebook: '#' }, // Agregar o reemplazar cuando existan redes definitivas.
  hours: [
    ['Lunes — Viernes', '08:00 — 18:00'],
    ['Sábado', '08:00 — 13:00'],
    ['Domingo', 'Cerrado']
  ],
  services: [
    ['Diagnóstico general', 'Identifica el origen antes de reparar.', 'scan'],
    ['Servicio preventivo', 'Cuida el rendimiento de cada recorrido.', 'oil'],
    ['Frenos', 'Seguridad y respuesta para seguir avanzando.', 'disc'],
    ['Suspensión', 'Estabilidad y comodidad en cada trayecto.', 'suspension'],
    ['Sistema eléctrico', 'Revisión de conexiones, carga y arranque.', 'bolt'],
    ['Mantenimiento', 'Lo esencial para prolongar la vida del vehículo.', 'wrench'],
    ['Revisión mecánica', 'Una mirada completa a lo que tu vehículo necesita.', 'car'],
    ['Otros servicios', 'Agrega aquí los servicios propios del taller.', 'plus']
  ]
};

const icons = {
  scan: '<svg viewBox="0 0 36 36" fill="none"><rect x="7" y="7" width="22" height="22" rx="3" stroke="currentColor" stroke-width="1.5"/><path d="M12 14h12M12 18h8M12 22h5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="m24 22 2 2 3-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  oil: '<svg viewBox="0 0 36 36" fill="none"><path d="M11 9h13v18H11zM14 6h7M14 13h7M14 18h5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M24 13h3l2 3v8h-5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M19 23c0 1.2-.8 2-1.8 2-1 0-1.7-.8-1.7-2 0-.9 1.7-3.1 1.7-3.1s1.8 2.2 1.8 3.1Z" fill="currentColor"/></svg>',
  disc: '<svg viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="10" stroke="currentColor" stroke-width="1.5"/><circle cx="18" cy="18" r="3" stroke="currentColor" stroke-width="1.5"/><path d="M18 8v7M25.8 13.5l-6.1 3.5M25.8 22.5l-6.1-3.5M18 28v-7M10.2 22.5l6.1-3.5M10.2 13.5l6.1 3.5" stroke="currentColor" stroke-width="1.2"/></svg>',
  suspension: '<svg viewBox="0 0 36 36" fill="none"><path d="M11 8h14M13 8v4c0 1.7 1.1 2.8 2.5 3.8S18 18.4 18 20v8M23 8v4c0 1.7-1.1 2.8-2.5 3.8S18 18.4 18 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M10 28h16M11 24h4M21 24h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
  bolt: '<svg viewBox="0 0 36 36" fill="none"><path d="M20.8 5 10 19h8l-2.8 12L26 16h-8z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>',
  wrench: '<svg viewBox="0 0 36 36" fill="none"><path d="M22.6 8.1a7 7 0 0 0-7.8 8.8L7.4 24.3a3 3 0 1 0 4.3 4.3l7.3-7.3a7 7 0 0 0 8.8-7.8l-4.2 4.2-4.3-1.1-1.2-4.3z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>',
  car: '<svg viewBox="0 0 36 36" fill="none"><path d="m8 22 2.8-7.1A3 3 0 0 1 13.6 13h8.8a3 3 0 0 1 2.8 1.9L28 22v6H8z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M10 21h16M12 17h12M11 25h.01M25 25h.01" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
  plus: '<svg viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="10" stroke="currentColor" stroke-width="1.5"/><path d="M18 12v12M12 18h12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>'
};

function whatsappUrl(message) {
  return `https://wa.me/${APP_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function renderConfig() {
  document.querySelectorAll('[data-config="name"]').forEach((el) => { el.textContent = APP_CONFIG.name; });
  document.querySelectorAll('[data-config="location"]').forEach((el) => { el.textContent = APP_CONFIG.location; });
  document.querySelectorAll('[data-config="reference"]').forEach((el) => { el.textContent = APP_CONFIG.reference; });
  document.querySelectorAll('[data-maps-link]').forEach((el) => {
    el.href = APP_CONFIG.mapsUrl === '#' ? '#ubicacion' : APP_CONFIG.mapsUrl;
    el.title = APP_CONFIG.mapsUrl === '#' ? 'Enlace de mapa por configurar' : 'Abrir ubicación en el mapa';
  });
}

function renderServices() {
  const grid = document.querySelector('#services-grid');
  grid.innerHTML = APP_CONFIG.services.map(([title, description, icon], index) => `
    <article class="service-card reveal">
      <span class="service-index">0${index + 1}</span>
      <span class="service-icon">${icons[icon] || icons.plus}</span>
      <h3>${title}</h3>
      <p>${description}</p>
      <span class="service-arrow">↗</span>
    </article>
  `).join('');
}

function renderHours() {
  const list = document.querySelector('#hours-list');
  list.innerHTML = APP_CONFIG.hours.map(([day, time]) => `<div class="hours-row"><span>${day}</span><span>${time}</span></div>`).join('');
  document.querySelector('#footer-hours').innerHTML = APP_CONFIG.hours.map(([day, time]) => `<span class="footer-hours-line">${day}: ${time}</span>`).join('');
}

function bindWhatsApp() {
  document.querySelectorAll('[data-whatsapp], .js-whatsapp').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const message = link.dataset.message || 'Hola, quisiera solicitar información.';
      window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer');
    });
  });
}

function bindForm() {
  const form = document.querySelector('#demo-form');
  const status = document.querySelector('#form-status');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const message = [
      'Hola, quisiera solicitar información sobre el servicio automotriz.',
      '',
      `Nombre: ${data.get('name')}`,
      `Teléfono: ${data.get('phone')}`,
      `Ubicación: ${data.get('location') || 'Por confirmar'}`,
      `Vehículo: ${data.get('vehicle') || 'Por confirmar'}`,
      `Servicio: ${data.get('service')}`,
      `Observaciones: ${data.get('notes') || 'Sin observaciones'}`
    ].join('\n');
    status.textContent = 'Solicitud preparada. Abriendo WhatsApp…';
    window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer');
    form.reset();
  });
}

function bindMobileMenu() {
  const button = document.querySelector('.menu-toggle');
  const links = document.querySelector('#nav-links');
  button.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
  });
  links.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    links.classList.remove('open');
    button.setAttribute('aria-expanded', 'false');
  }));
}

function bindReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) { items.forEach((item) => item.classList.add('visible')); return; }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.12 });
  items.forEach((item, index) => { item.style.transitionDelay = `${Math.min(index % 4, 3) * 55}ms`; observer.observe(item); });
}

renderConfig();
renderServices();
renderHours();
bindWhatsApp();
bindForm();
bindMobileMenu();
bindReveal();
document.querySelector('#year').textContent = new Date().getFullYear();
