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

const isCrmRoute = () => window.location.pathname === '/crm' || window.location.pathname.startsWith('/crm/');

if (!isCrmRoute()) {
  renderConfig();
  renderServices();
  renderHours();
  bindWhatsApp();
  bindForm();
  bindMobileMenu();
  bindReveal();
  document.querySelector('#year').textContent = new Date().getFullYear();
} else {
  // The CRM starts after its demo data and render functions are initialized.
}

/* -------------------------------------------------------------------------- */
/* CRM demo: local, fictional data only.                                     */
/* -------------------------------------------------------------------------- */

const CRM_STORAGE_KEY = 'pd-054-crm-demo-v1';
let crmState;
let crmDraft = null;
let crmDraftKey = '';
let crmPreviewMode = false;
let crmToastTimer;

const CRM_DEMO_STATE = {
  clients: [
    { id: 'CLI-001', name: 'María López', phone: '5550 0001', email: 'maria.lopez@demo.local', vehicle: 'Toyota Corolla', year: '2018', plate: 'DEMO-001' },
    { id: 'CLI-002', name: 'Carlos Méndez', phone: '5550 0002', email: 'carlos.mendez@demo.local', vehicle: 'Honda CR-V', year: '2020', plate: 'DEMO-002' },
    { id: 'CLI-003', name: 'Ana Castillo', phone: '5550 0003', email: 'ana.castillo@demo.local', vehicle: 'Mazda 3', year: '2017', plate: 'DEMO-003' },
    { id: 'CLI-004', name: 'Luis Herrera', phone: '5550 0004', email: 'luis.herrera@demo.local', vehicle: 'Nissan Versa', year: '2019', plate: 'DEMO-004' }
  ],
  quotes: [
    { id: 'COT-024', clientId: 'CLI-001', vehicleId: 'CLI-001', status: 'enviada', date: '12 sep 2026', validUntil: '26 sep 2026', notes: 'Revisar autorización antes de programar.', discount: 150, taxRate: 0, items: [{ type: 'Servicio', description: 'Diagnóstico general', quantity: 1, price: 850 }, { type: 'Repuesto', description: 'Kit de frenos delantero · demo', quantity: 1, price: 3150 }] },
    { id: 'COT-023', clientId: 'CLI-002', vehicleId: 'CLI-002', status: 'borrador', date: '11 sep 2026', validUntil: '25 sep 2026', notes: 'Información de demostración.', discount: 0, taxRate: 0, items: [{ type: 'Servicio', description: 'Servicio preventivo', quantity: 1, price: 1240 }] },
    { id: 'COT-022', clientId: 'CLI-003', vehicleId: 'CLI-003', status: 'aprobada', date: '09 sep 2026', validUntil: '23 sep 2026', notes: 'Aprobada para mostrar la conversión a orden.', discount: 100, taxRate: 0, items: [{ type: 'Servicio', description: 'Revisión de suspensión', quantity: 1, price: 980 }, { type: 'Repuesto', description: 'Bujes de suspensión · demo', quantity: 2, price: 460 }] },
    { id: 'COT-021', clientId: 'CLI-004', vehicleId: 'CLI-004', status: 'rechazada', date: '05 sep 2026', validUntil: '19 sep 2026', notes: 'Ejemplo de cotización no aprobada.', discount: 0, taxRate: 0, items: [{ type: 'Servicio', description: 'Revisión mecánica', quantity: 1, price: 650 }] }
  ],
  orders: [
    { id: 'OS-018', quoteId: 'COT-022', clientId: 'CLI-003', vehicleId: 'CLI-003', status: 'diagnostico', reportedIssue: 'Ruido en la suspensión delantera.', responsible: 'Por asignar', notes: 'Datos de demostración. Responsable y diagnóstico real pendientes de confirmar.', items: [{ type: 'Servicio', description: 'Revisión de suspensión', quantity: 1, price: 980 }] },
    { id: 'OS-017', quoteId: null, clientId: 'CLI-001', vehicleId: 'CLI-001', status: 'reparacion', reportedIssue: 'Mantenimiento preventivo de ejemplo.', responsible: 'Por asignar', notes: 'Flujo visual para la demo.', items: [{ type: 'Servicio', description: 'Servicio preventivo', quantity: 1, price: 1240 }] },
    { id: 'OS-016', quoteId: null, clientId: 'CLI-002', vehicleId: 'CLI-002', status: 'lista', reportedIssue: 'Revisión completada · demo.', responsible: 'Por asignar', notes: 'Estado listo para entregar como ejemplo.', items: [{ type: 'Servicio', description: 'Diagnóstico general', quantity: 1, price: 850 }] }
  ],
  receivables: [
    { id: 'CxC-009', orderId: 'OS-018', clientId: 'CLI-003', concept: 'Saldo de cotización aprobada · demo', amount: 1800, status: 'pendiente', due: 'Por confirmar' },
    { id: 'CxC-008', orderId: 'OS-017', clientId: 'CLI-001', concept: 'Servicio preventivo · demo', amount: 1240, status: 'parcial', due: 'Por confirmar' },
    { id: 'CxC-007', orderId: 'OS-016', clientId: 'CLI-002', concept: 'Orden lista para entregar · demo', amount: 850, status: 'pagada', due: 'Registrada como demo' }
  ],
  payables: [
    { id: 'CxP-004', supplier: 'Proveedor ficticio A', concept: 'Repuestos de demostración', amount: 2100, status: 'pendiente', due: 'Por confirmar' },
    { id: 'CxP-003', supplier: 'Proveedor ficticio B', concept: 'Insumos de taller · demo', amount: 720, status: 'pendiente', due: 'Por confirmar' },
    { id: 'CxP-002', supplier: 'Proveedor ficticio C', concept: 'Servicio externo · demo', amount: 300, status: 'pagada', due: 'Registrada como demo' }
  ],
  activity: [
    { icon: 'quote', title: 'Cotización COT-024 enviada', detail: 'María López · hace 25 min', route: '/crm/cotizaciones/COT-024' },
    { icon: 'order', title: 'Orden OS-018 pasó a diagnóstico', detail: 'Ana Castillo · hace 1 h', route: '/crm/ordenes/OS-018' },
    { icon: 'check', title: 'Cotización COT-022 aprobada', detail: 'Lista para convertirse en orden', route: '/crm/cotizaciones/COT-022' },
    { icon: 'user', title: 'Cliente CLI-004 agregado', detail: 'Luis Herrera · ayer', route: '/crm/clientes' }
  ]
};

const CRM_STATUS_LABELS = {
  borrador: 'Borrador', enviada: 'Enviada', aprobada: 'Aprobada', rechazada: 'Rechazada',
  nueva: 'Nueva', diagnostico: 'En diagnóstico', reparacion: 'En reparación', lista: 'Lista para entregar', cerrada: 'Cerrada',
  pendiente: 'Pendiente', parcial: 'Parcial', pagada: 'Pagada'
};

const CRM_ORDER_STEPS = ['nueva', 'diagnostico', 'reparacion', 'lista', 'cerrada'];

function cloneDemo(value) {
  return JSON.parse(JSON.stringify(value));
}

function loadCrmState() {
  try {
    const saved = JSON.parse(localStorage.getItem(CRM_STORAGE_KEY));
    if (saved) return { ...cloneDemo(CRM_DEMO_STATE), ...saved };
  } catch (error) {
    // The demo still works if browser storage is disabled.
  }
  return cloneDemo(CRM_DEMO_STATE);
}

function saveCrmState() {
  try { localStorage.setItem(CRM_STORAGE_KEY, JSON.stringify(crmState)); } catch (error) { /* local-only fallback */ }
}

function crmIcon(name, size = 18) {
  const paths = {
    grid: '<rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="3" width="6" height="6" rx="1"/><rect x="3" y="15" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/>',
    users: '<path d="M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.5V20"/><circle cx="10" cy="8" r="3"/><path d="M17 11a3 3 0 1 0 0-6M20 20v-1.4a3.5 3.5 0 0 0-2.5-3.35"/>',
    user: '<circle cx="12" cy="8" r="3"/><path d="M5 20a7 7 0 0 1 14 0"/>',
    quote: '<path d="M5 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"/><path d="M7 8h10M7 12h7M7 16h4"/>',
    order: '<path d="M4 7h16M7 4v6M17 4v6M5 4h14a1 1 0 0 1 1 1v15H4V5a1 1 0 0 1 1-1Z"/><path d="m8 15 2 2 5-5"/>',
    arrow: '<path d="M5 12h13M13 6l6 6-6 6"/>',
    back: '<path d="M19 12H5M11 18l-6-6 6-6"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    search: '<circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 4 4"/>',
    more: '<circle cx="5" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1" fill="currentColor" stroke="none"/>',
    filter: '<path d="M4 6h16M7 12h10M10 18h4"/>',
    trend: '<path d="m4 16 5-5 3 3 7-8"/><path d="M15 6h4v4"/>',
    wallet: '<path d="M4 6.5A2.5 2.5 0 0 1 6.5 4H19a1 1 0 0 1 1 1v15H6.5A2.5 2.5 0 0 1 4 17.5z"/><path d="M4 7h14M16 13h4"/><circle cx="16" cy="13" r=".7" fill="currentColor" stroke="none"/>',
    receipt: '<path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="M9 8h6M9 12h6M9 16h3"/>',
    car: '<path d="m5 16 1.8-5.4A2.5 2.5 0 0 1 9.2 9h5.6a2.5 2.5 0 0 1 2.4 1.6L19 16v4H5z"/><path d="M6 15h12M8 19h.01M16 19h.01"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-1.7 1.7-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.04 1.56V20h-2.4v-.2a1.7 1.7 0 0 0-1.04-1.56 1.7 1.7 0 0 0-1.88.34l-.06.06-1.7-1.7.06-.06A1.7 1.7 0 0 0 8.4 15a1.7 1.7 0 0 0-1.56-1.04H6v-2.4h.84A1.7 1.7 0 0 0 8.4 10a1.7 1.7 0 0 0-.34-1.88L8 8.06l1.7-1.7.06.06A1.7 1.7 0 0 0 11.64 6.1 1.7 1.7 0 0 0 12.68 4.5V4h2.4v.5a1.7 1.7 0 0 0 1.04 1.56 1.7 1.7 0 0 0 1.88-.34l.06-.06 1.7 1.7-.06.06A1.7 1.7 0 0 0 19.4 9a1.7 1.7 0 0 0 1.56 1.04h.04v2.4h-.04A1.7 1.7 0 0 0 19.4 15Z"/>',
    help: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.6 2.6 0 1 1 4.5 1.8c-1.4 1.2-2 1.5-2 3.2M12 17h.01"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    close: '<path d="m6 6 12 12M18 6 6 18"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    eye: '<path d="M2.5 12s3.2-5 9.5-5 9.5 5 9.5 5-3.2 5-9.5 5-9.5-5-9.5-5Z"/><circle cx="12" cy="12" r="2"/>',
    download: '<path d="M12 3v12M7 10l5 5 5-5M5 20h14"/>',
    refresh: '<path d="M20 11a8 8 0 0 0-14.5-4L4 9"/><path d="M4 4v5h5M4 13a8 8 0 0 0 14.5 4L20 15"/><path d="M20 20v-5h-5"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    alert: '<path d="M12 3 2.8 19h18.4z"/><path d="M12 9v4M12 16h.01"/>',
    external: '<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5"/>'
  };
  return `<svg class="crm-icon" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.grid}</svg>`;
}

function crmEsc(value) {
  return String(value ?? '').replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;' }[char]));
}

function crmAmount(value) {
  return Number(value || 0).toLocaleString('es-GT', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function crmDate() {
  return new Date().toLocaleDateString('es-GT', { day: '2-digit', month: 'short', year: 'numeric' }).replace('.', '');
}

function crmClient(id) { return crmState.clients.find((client) => client.id === id) || { name: 'Cliente por seleccionar', vehicle: 'Vehículo por seleccionar', year: '—', plate: '—', phone: '—', email: '—' }; }
function crmQuote(id) { return crmState.quotes.find((quote) => quote.id === id); }
function crmOrder(id) { return crmState.orders.find((order) => order.id === id); }
function crmStatus(status) { return CRM_STATUS_LABELS[status] || status; }
function crmStatusClass(status) { return `status-${String(status).replace(/_/g, '-')}`; }

function quoteTotals(quote) {
  const subtotal = (quote.items || []).reduce((sum, item) => sum + (Number(item.quantity) || 0) * (Number(item.price) || 0), 0);
  const discount = Number(quote.discount) || 0;
  const taxable = Math.max(0, subtotal - discount);
  const tax = taxable * ((Number(quote.taxRate) || 0) / 100);
  return { subtotal, discount, tax, total: taxable + tax };
}

function crmRoute() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/crm';
  if (path === '/crm') return { name: 'dashboard' };
  const parts = path.slice('/crm/'.length).split('/').filter(Boolean);
  if (parts[0] === 'cotizaciones' && parts[1] === 'nueva') return { name: 'quote-new' };
  if (parts[0] === 'cotizaciones' && parts[1]) return { name: 'quote-detail', id: parts[1] };
  if (parts[0] === 'ordenes' && parts[1]) return { name: 'order-detail', id: parts[1] };
  return { name: parts[0] || 'dashboard' };
}

function crmShell() {
  return `<div class="crm-app">
    <aside class="crm-sidebar" id="crm-sidebar">
      <div class="crm-sidebar-top">
        <a class="crm-brand" href="/" aria-label="Volver a la página pública">
          <span class="crm-brand-mark">${crmIcon('car', 19)}</span>
          <span><strong>Taller Demo</strong><small>Panel interno</small></span>
        </a>
        <span class="crm-demo-pill">Datos de demostración</span>
      </div>
      <nav class="crm-nav" aria-label="Navegación del sistema">
        <span class="crm-nav-label">Operación</span>
        ${crmNavLink('dashboard', 'Resumen', 'grid')}
        ${crmNavLink('clientes', 'Clientes y vehículos', 'users')}
        ${crmNavLink('cotizaciones', 'Cotizaciones', 'quote')}
        ${crmNavLink('ordenes', 'Órdenes de servicio', 'order')}
        <span class="crm-nav-label">Control</span>
        ${crmNavLink('cobrar', 'Cuentas por cobrar', 'wallet')}
        ${crmNavLink('pagar', 'Cuentas por pagar', 'receipt')}
      </nav>
      <div class="crm-sidebar-bottom">
        <div class="crm-sidebar-note"><span>${crmIcon('alert', 15)}</span><p>Demo conceptual<br /><b>Proceso real pendiente de validar</b></p></div>
        <a class="crm-public-link" href="/">${crmIcon('external', 15)} Ver página pública</a>
        <button class="crm-reset-link" type="button" data-action="reset-demo">${crmIcon('refresh', 15)} Reiniciar datos demo</button>
      </div>
    </aside>
    <button class="crm-sidebar-overlay" type="button" data-action="close-sidebar" aria-label="Cerrar menú"></button>
    <main class="crm-main">
      <header class="crm-topbar">
        <button class="crm-mobile-menu" type="button" data-action="toggle-sidebar" aria-label="Abrir menú">${crmIcon('menu', 22)}</button>
        <div class="crm-breadcrumbs" id="crm-breadcrumbs"></div>
        <div class="crm-topbar-actions"><span class="crm-environment">${crmIcon('check', 13)} Entorno demo</span><span class="crm-user" aria-label="Usuario demostración">PD</span></div>
      </header>
      <div class="crm-content" id="crm-content"></div>
    </main>
    <div class="crm-toast" id="crm-toast" role="status" aria-live="polite"></div>
  </div>`;
}

function crmNavLink(route, label, icon) {
  return `<a class="crm-nav-link" data-route="/crm/${route === 'dashboard' ? '' : route}" href="/crm/${route === 'dashboard' ? '' : route}" data-nav="${route}">${crmIcon(icon, 18)}<span>${label}</span></a>`;
}

function crmPageHeader(eyebrow, title, copy, action = '') {
  return `<div class="crm-page-header"><div><div class="crm-eyebrow">${eyebrow}</div><h1>${title}</h1><p>${copy}</p></div>${action}</div>`;
}

function crmButton(route, label, icon = 'arrow', kind = 'primary') {
  return `<a class="crm-button ${kind}" href="${route}" data-route="${route}">${label}${crmIcon(icon, 16)}</a>`;
}

function crmMetric(icon, label, value, detail, tone) {
  return `<article class="crm-metric crm-tone-${tone}"><div class="crm-metric-icon">${crmIcon(icon, 19)}</div><div class="crm-metric-label">${label}</div><strong>${value}</strong><span>${detail}</span></article>`;
}

function crmEmpty(icon, title, text, action = '') {
  return `<div class="crm-empty">${crmIcon(icon, 28)}<strong>${title}</strong><p>${text}</p>${action}</div>`;
}

function crmStatusBadge(status) {
  return `<span class="crm-status ${crmStatusClass(status)}"><i></i>${crmStatus(status)}</span>`;
}

function crmTotalsMarkup(totals) {
  return `<div class="crm-totals" data-quote-summary>
    <div><span>Subtotal</span><strong data-summary="subtotal">${crmAmount(totals.subtotal)}</strong></div>
    <div><span>Descuento demo</span><strong data-summary="discount">− ${crmAmount(totals.discount)}</strong></div>
    <div><span>Impuesto configurable</span><strong data-summary="tax">${crmAmount(totals.tax)}</strong></div>
    <div class="crm-total-line"><span>Total demo</span><strong data-summary="total">${crmAmount(totals.total)}</strong></div>
    <small>Montos ficticios sin moneda real confirmada.</small>
  </div>`;
}

function dashboardView() {
  const pendingQuotes = crmState.quotes.filter((quote) => ['borrador', 'enviada'].includes(quote.status)).length;
  const activeOrders = crmState.orders.filter((order) => order.status !== 'cerrada').length;
  const receivableTotal = crmState.receivables.filter((item) => item.status !== 'pagada').reduce((sum, item) => sum + item.amount, 0);
  const payableTotal = crmState.payables.filter((item) => item.status !== 'pagada').reduce((sum, item) => sum + item.amount, 0);
  const recentQuotes = crmState.quotes.slice(0, 3);
  return `${crmPageHeader('PD-054 / Panel interno', 'Resumen operativo', 'Una vista rápida para entender qué necesita atención y continuar el recorrido de demostración.', crmButton('/crm/cotizaciones/nueva', 'Nueva cotización', 'plus'))}
    <div class="crm-callout"><span class="crm-callout-icon">${crmIcon('alert', 18)}</span><div><strong>Esta es una demostración conceptual.</strong><span>Clientes, montos y estados son ficticios. El proceso real del taller queda pendiente de validar.</span></div><span class="crm-callout-tag">DEMO</span></div>
    <div class="crm-metrics">${crmMetric('quote', 'Cotizaciones pendientes', pendingQuotes, 'Borradores y enviadas', 'mint')}${crmMetric('order', 'Órdenes activas', activeOrders, 'Sin cerrar', 'blue')}${crmMetric('wallet', 'Por cobrar', crmAmount(receivableTotal), 'Montos demo pendientes', 'orange')}${crmMetric('receipt', 'Por pagar', crmAmount(payableTotal), 'Proveedores ficticios', 'purple')}</div>
    <div class="crm-grid-two crm-dashboard-grid">
      <section class="crm-panel"><div class="crm-panel-header"><div><span class="crm-panel-kicker">Seguimiento</span><h2>Cotizaciones recientes</h2></div>${crmButton('/crm/cotizaciones', 'Ver todas', 'arrow', 'text')}</div><div class="crm-quote-list">${recentQuotes.map((quote) => { const client = crmClient(quote.clientId); const total = quoteTotals(quote).total; return `<a class="crm-quote-row" href="/crm/cotizaciones/${quote.id}" data-route="/crm/cotizaciones/${quote.id}"><span class="crm-row-icon">${crmIcon('quote', 16)}</span><span class="crm-row-main"><strong>${quote.id}</strong><small>${client.name} · ${client.vehicle}</small></span><span class="crm-row-amount">${crmAmount(total)}</span><span>${crmStatusBadge(quote.status)}</span>${crmIcon('arrow', 15)}</a>`; }).join('')}</div></section>
      <section class="crm-panel"><div class="crm-panel-header"><div><span class="crm-panel-kicker">Actividad</span><h2>Últimos movimientos</h2></div><span class="crm-live-dot">Actualizado ahora</span></div><div class="crm-activity-list">${crmState.activity.slice(0, 4).map((item) => `<a class="crm-activity-row" href="${item.route || '#'}" data-route="${item.route || '/crm'}"><span class="crm-activity-icon">${crmIcon(item.icon, 15)}</span><span><strong>${item.title}</strong><small>${item.detail}</small></span></a>`).join('')}</div></section>
    </div>
    <section class="crm-panel crm-flow-panel"><div class="crm-panel-header"><div><span class="crm-panel-kicker">Recorrido recomendado</span><h2>De la cotización a la orden</h2></div><span class="crm-flow-caption">5 pasos para presentar</span></div><div class="crm-flow-steps"><a href="/crm/clientes" data-route="/crm/clientes"><b>01</b><span>Cliente y vehículo</span>${crmIcon('arrow', 14)}</a><a href="/crm/cotizaciones/nueva" data-route="/crm/cotizaciones/nueva"><b>02</b><span>Nueva cotización</span>${crmIcon('arrow', 14)}</a><a href="/crm/cotizaciones" data-route="/crm/cotizaciones"><b>03</b><span>Vista previa</span>${crmIcon('arrow', 14)}</a><a href="/crm/cotizaciones/COT-022" data-route="/crm/cotizaciones/COT-022"><b>04</b><span>Aprobar y convertir</span>${crmIcon('arrow', 14)}</a><a href="/crm/cobrar" data-route="/crm/cobrar"><b>05</b><span>Saldo por cobrar</span>${crmIcon('arrow', 14)}</a></div></section>`;
}

function clientsView() {
  return `${crmPageHeader('Operación / Registro', 'Clientes y vehículos', 'Registros ficticios para mostrar la relación entre cada cliente y su vehículo.', crmButton('/crm/cotizaciones/nueva', 'Nueva cotización', 'plus'))}
    <div class="crm-toolbar"><label class="crm-search">${crmIcon('search', 17)}<input type="search" id="client-search" data-client-search placeholder="Buscar cliente, vehículo o placa…" /></label><span class="crm-toolbar-meta">${crmState.clients.length} registros de demostración</span></div>
    <section class="crm-panel crm-table-panel"><div class="crm-table-wrap" id="clients-table">${clientRows('')}</div></section>`;
}

function clientRows(query) {
  const normalized = query.trim().toLowerCase();
  const rows = crmState.clients.filter((client) => [client.name, client.vehicle, client.plate, client.phone].join(' ').toLowerCase().includes(normalized));
  if (!rows.length) return crmEmpty('search', 'No hay coincidencias', 'Prueba con otro nombre, vehículo o placa demo.');
  return `<table class="crm-table"><thead><tr><th>Cliente</th><th>Vehículo</th><th>Contacto</th><th>Registro</th><th></th></tr></thead><tbody>${rows.map((client) => `<tr><td><div class="crm-person"><span class="crm-avatar">${client.name.split(' ').map((word) => word[0]).slice(0, 2).join('')}</span><span><strong>${client.name}</strong><small>${client.id} · Demo</small></span></div></td><td><strong>${client.vehicle}</strong><small>${client.year} · Placa ${client.plate}</small></td><td><strong>${client.phone}</strong><small>${client.email}</small></td><td><span class="crm-neutral-badge">Activo demo</span></td><td><button class="crm-icon-button" type="button" title="Ver opciones" aria-label="Ver opciones de ${client.name}">${crmIcon('more', 17)}</button></td></tr>`).join('')}</tbody></table>`;
}

function quotesView() {
  return `${crmPageHeader('Operación / Seguimiento', 'Cotizaciones', 'Crea, presenta y mueve cada propuesta por un flujo simple antes de convertirla en orden de servicio.', crmButton('/crm/cotizaciones/nueva', 'Nueva cotización', 'plus'))}
    <div class="crm-toolbar"><div class="crm-filter-tabs" role="tablist" aria-label="Filtrar cotizaciones"><button class="active" data-action="filter-quotes" data-filter="todas" type="button">Todas <b>${crmState.quotes.length}</b></button><button data-action="filter-quotes" data-filter="borrador" type="button">Borrador</button><button data-action="filter-quotes" data-filter="enviada" type="button">Enviadas</button><button data-action="filter-quotes" data-filter="aprobada" type="button">Aprobadas</button></div><span class="crm-toolbar-meta">Montos ficticios · sin facturación</span></div>
    <section class="crm-panel crm-table-panel"><div class="crm-table-wrap" id="quotes-table">${quoteRows('todas')}</div></section>`;
}

function quoteRows(filter) {
  const quotes = crmState.quotes.filter((quote) => filter === 'todas' || quote.status === filter);
  if (!quotes.length) return crmEmpty('quote', 'No hay cotizaciones aquí', 'Crea una cotización para continuar el recorrido.', crmButton('/crm/cotizaciones/nueva', 'Crear cotización', 'plus', 'secondary'));
  return `<table class="crm-table"><thead><tr><th>Cotización</th><th>Cliente / vehículo</th><th>Fecha</th><th>Estado</th><th>Total demo</th><th></th></tr></thead><tbody>${quotes.map((quote) => { const client = crmClient(quote.clientId); return `<tr class="crm-click-row" data-route="/crm/cotizaciones/${quote.id}"><td><a href="/crm/cotizaciones/${quote.id}" data-route="/crm/cotizaciones/${quote.id}"><strong>${quote.id}</strong><small>${quote.items.length} concepto${quote.items.length === 1 ? '' : 's'}</small></a></td><td><strong>${client.name}</strong><small>${client.vehicle} · ${client.year}</small></td><td><strong>${quote.date}</strong><small>Válida hasta ${quote.validUntil || 'por confirmar'}</small></td><td>${crmStatusBadge(quote.status)}</td><td><strong>${crmAmount(quoteTotals(quote).total)}</strong><small>monto demo</small></td><td><button class="crm-icon-button" type="button" data-route="/crm/cotizaciones/${quote.id}" aria-label="Abrir ${quote.id}">${crmIcon('arrow', 17)}</button></td></tr>`; }).join('')}</tbody></table>`;
}

function quoteEditorView(isNew) {
  const draft = crmDraft;
  const client = crmClient(draft.clientId);
  const totals = quoteTotals(draft);
  if (crmPreviewMode) return quotePreviewView(draft, true);
  return `${crmPageHeader(isNew ? 'Cotizaciones / Nueva' : `Cotizaciones / ${draft.id}`, isNew ? 'Nueva cotización' : `Editar ${draft.id}`, 'Agrega servicios y repuestos de ejemplo. Los campos quedan listos para reemplazar con la información real.', `<a class="crm-back-link" href="/crm/cotizaciones" data-route="/crm/cotizaciones">${crmIcon('back', 15)} Volver a cotizaciones</a>`)}
    <form class="crm-quote-editor" id="quote-form" data-quote-form novalidate>
      <div class="crm-editor-main">
        <section class="crm-panel"><div class="crm-panel-header"><div><span class="crm-panel-kicker">Paso 1</span><h2>Cliente y vehículo</h2></div><span class="crm-step-counter">01 / 03</span></div><div class="crm-form-grid"><label>Cliente<select name="clientId" data-draft-field="clientId" required><option value="">Seleccionar cliente</option>${crmState.clients.map((item) => `<option value="${item.id}" ${item.id === draft.clientId ? 'selected' : ''}>${item.name} · ${item.id}</option>`).join('')}</select></label><label>Vehículo<select name="vehicleId" data-draft-field="vehicleId" required>${crmState.clients.filter((item) => item.id === draft.clientId).map((item) => `<option value="${item.id}" ${item.id === draft.vehicleId ? 'selected' : ''}>${item.vehicle} · ${item.year} · ${item.plate}</option>`).join('') || '<option value="">Selecciona primero un cliente</option>'}</select></label></div><div class="crm-selected-client"><span class="crm-avatar">${client.name.split(' ').map((word) => word[0]).slice(0, 2).join('')}</span><div><strong>${client.name}</strong><small>${client.vehicle} · ${client.year} · Placa ${client.plate}</small></div><span class="crm-demo-mini">Demo</span></div></section>
        <section class="crm-panel"><div class="crm-panel-header"><div><span class="crm-panel-kicker">Paso 2</span><h2>Servicios y repuestos</h2></div><button class="crm-text-button" type="button" data-action="add-quote-line">${crmIcon('plus', 15)} Agregar concepto</button></div><div class="crm-lines-head"><span>Tipo</span><span>Descripción</span><span>Cantidad</span><span>Precio demo</span><span></span></div><div class="crm-lines">${draft.items.map((item, index) => `<div class="crm-line-item"><select data-line-field="type" data-index="${index}" aria-label="Tipo del concepto ${index + 1}"><option ${item.type === 'Servicio' ? 'selected' : ''}>Servicio</option><option ${item.type === 'Repuesto' ? 'selected' : ''}>Repuesto</option></select><input data-line-field="description" data-index="${index}" value="${crmEsc(item.description)}" aria-label="Descripción del concepto ${index + 1}" placeholder="Ej. Diagnóstico general" required /><input class="crm-number-input" data-line-field="quantity" data-index="${index}" type="number" min="1" step="1" value="${item.quantity}" aria-label="Cantidad del concepto ${index + 1}" required /><input class="crm-number-input" data-line-field="price" data-index="${index}" type="number" min="0" step="50" value="${item.price}" aria-label="Precio demo del concepto ${index + 1}" required /><button class="crm-icon-button danger" type="button" data-action="remove-quote-line" data-index="${index}" aria-label="Eliminar concepto ${index + 1}" ${draft.items.length === 1 ? 'disabled' : ''}>${crmIcon('close', 16)}</button></div>`).join('')}</div><p class="crm-helper">Usa nombres genéricos hasta confirmar el catálogo real del taller. Todos los importes son demostrativos.</p></section>
        <section class="crm-panel"><div class="crm-panel-header"><div><span class="crm-panel-kicker">Paso 3</span><h2>Condiciones y notas</h2></div><span class="crm-step-counter">03 / 03</span></div><div class="crm-form-grid"><label>Descuento demo<input type="number" name="discount" data-draft-field="discount" min="0" step="50" value="${draft.discount || 0}" /></label><label>Impuesto configurable (%)<input type="number" name="taxRate" data-draft-field="taxRate" min="0" step="1" value="${draft.taxRate || 0}" /></label></div><label class="crm-full-field">Notas internas<textarea name="notes" data-draft-field="notes" rows="3" placeholder="Notas pendientes de confirmar">${crmEsc(draft.notes || '')}</textarea></label></section>
      </div>
      <aside class="crm-editor-side"><div class="crm-preview-card"><div class="crm-preview-top"><span>Vista previa</span><span class="crm-demo-mini">DEMO</span></div><div class="crm-preview-brand"><span class="crm-brand-mark small">${crmIcon('car', 15)}</span><span><strong>Taller Demo</strong><small>Propuesta de servicio</small></span></div><div class="crm-preview-meta"><span>${draft.id || 'Borrador nuevo'}</span><span>${draft.date || crmDate()}</span></div><div class="crm-preview-client"><small>Preparada para</small><strong>${client.name}</strong><span>${client.vehicle} · ${client.year}</span></div><div class="crm-preview-items">${draft.items.map((item) => `<div><span>${item.quantity} × ${crmEsc(item.description || 'Concepto pendiente')}</span><strong>${crmAmount((Number(item.quantity) || 0) * (Number(item.price) || 0))}</strong></div>`).join('')}</div>${crmTotalsMarkup(totals)}<button class="crm-button secondary wide" type="button" data-action="toggle-quote-preview">${crmIcon('eye', 16)} Ver vista previa completa</button></div><div class="crm-save-card"><button class="crm-button primary wide" type="submit" name="quoteAction" value="save">Guardar borrador</button><button class="crm-button mint wide" type="submit" name="quoteAction" value="send">Guardar y marcar enviada</button><small>Después de aprobarla podrás convertirla en una orden de servicio.</small></div></aside>
    </form>`;
}

function quotePreviewView(quote, fromEditor = false) {
  const client = crmClient(quote.clientId);
  const totals = quoteTotals(quote);
  return `${crmPageHeader('Cotizaciones / Vista previa', quote.id || 'Nueva cotización', 'Presentación simplificada para revisar el alcance antes de compartirlo con el cliente.', `<button class="crm-back-link" type="button" data-action="toggle-quote-preview">${crmIcon('back', 15)} Volver al editor</button>`)}
    <div class="crm-full-preview"><div class="crm-document"><div class="crm-document-head"><div class="crm-preview-brand"><span class="crm-brand-mark">${crmIcon('car', 18)}</span><span><strong>Taller Demo</strong><small>Servicio automotriz · Demostración</small></span></div><div class="crm-document-number"><small>COTIZACIÓN</small><strong>${quote.id || 'NUEVA'}</strong><span>${quote.date || crmDate()}</span></div></div><div class="crm-document-banner"><span>Propuesta de servicio</span><span>Datos de demostración</span></div><div class="crm-document-client"><div><small>Cliente</small><strong>${client.name}</strong><span>${client.phone} · ${client.email}</span></div><div><small>Vehículo</small><strong>${client.vehicle}</strong><span>${client.year} · Placa ${client.plate}</span></div><div><small>Vigencia</small><strong>${quote.validUntil || 'Por confirmar'}</strong><span>Fecha sugerida para demo</span></div></div><table class="crm-document-table"><thead><tr><th>Tipo</th><th>Descripción</th><th>Cant.</th><th>Precio demo</th><th>Total</th></tr></thead><tbody>${(quote.items || []).map((item) => `<tr><td>${item.type}</td><td><strong>${crmEsc(item.description)}</strong></td><td>${item.quantity}</td><td>${crmAmount(item.price)}</td><td>${crmAmount((Number(item.quantity) || 0) * (Number(item.price) || 0))}</td></tr>`).join('')}</tbody></table><div class="crm-document-bottom"><div><small>Notas</small><p>${crmEsc(quote.notes || 'Sin notas. Información pendiente de confirmar.')}</p></div>${crmTotalsMarkup(totals)}</div><div class="crm-document-foot">Los conceptos, precios, impuestos y condiciones mostrados son ficticios y deben validarse con el taller.</div></div><div class="crm-preview-actions">${fromEditor ? `<button class="crm-button primary" type="button" data-action="toggle-quote-preview">${crmIcon('back', 16)} Volver al editor</button>` : crmButton(`/crm/cotizaciones/${quote.id}/edit`, 'Editar cotización', 'settings', 'secondary')}</div></div>`;
}

function quoteDetailView(quote) {
  if (!quote) return crmEmpty('quote', 'Cotización no encontrada', 'Regresa al listado para continuar.', crmButton('/crm/cotizaciones', 'Ver cotizaciones', 'arrow', 'secondary'));
  const client = crmClient(quote.clientId);
  const totals = quoteTotals(quote);
  return `${crmPageHeader(`Cotizaciones / ${quote.id}`, quote.id, 'Revisa los conceptos, cambia el estado y continúa el recorrido cuando el cliente valide la propuesta.', `<a class="crm-back-link" href="/crm/cotizaciones" data-route="/crm/cotizaciones">${crmIcon('back', 15)} Volver a cotizaciones</a>`)}
    <div class="crm-detail-actions"><span>${crmStatusBadge(quote.status)}</span><button class="crm-button ghost" type="button" data-action="toggle-detail-preview" data-id="${quote.id}">${crmIcon('eye', 16)} Vista previa</button><a class="crm-button secondary" href="/crm/cotizaciones/${quote.id}/edit" data-route="/crm/cotizaciones/${quote.id}/edit">${crmIcon('settings', 16)} Editar</a>${quote.status !== 'aprobada' ? `<button class="crm-button mint" type="button" data-action="quote-status" data-id="${quote.id}" data-status="aprobada">${crmIcon('check', 16)} Aprobar</button>` : `<button class="crm-button primary" type="button" data-action="convert-quote" data-id="${quote.id}">${crmIcon('order', 16)} Convertir en orden</button>`}</div>
    <div class="crm-detail-grid"><div class="crm-detail-main"><section class="crm-panel"><div class="crm-panel-header"><div><span class="crm-panel-kicker">Información del cliente</span><h2>${client.name}</h2></div><span class="crm-demo-mini">Registro demo</span></div><div class="crm-detail-facts"><div><small>Vehículo</small><strong>${client.vehicle}</strong><span>${client.year} · Placa ${client.plate}</span></div><div><small>Contacto</small><strong>${client.phone}</strong><span>${client.email}</span></div><div><small>Vigencia sugerida</small><strong>${quote.validUntil || 'Por confirmar'}</strong><span>Regla real pendiente</span></div></div></section><section class="crm-panel"><div class="crm-panel-header"><div><span class="crm-panel-kicker">Alcance propuesto</span><h2>Servicios y repuestos</h2></div><span class="crm-step-counter">${quote.items.length} conceptos</span></div><div class="crm-detail-lines">${quote.items.map((item) => `<div><span class="crm-type-dot ${item.type === 'Repuesto' ? 'part' : ''}"></span><span><strong>${crmEsc(item.description)}</strong><small>${item.type} · ${item.quantity} unidad${item.quantity === 1 ? '' : 'es'}</small></span><b>${crmAmount((Number(item.quantity) || 0) * (Number(item.price) || 0))}</b></div>`).join('')}</div>${crmTotalsMarkup(totals)}</section></div><aside class="crm-detail-side"><div class="crm-panel crm-timeline"><div class="crm-panel-header"><div><span class="crm-panel-kicker">Siguiente paso</span><h2>Flujo de aprobación</h2></div></div><div class="crm-status-flow"><div class="done"><span>1</span><strong>Preparar</strong><small>Conceptos listos</small></div><div class="${['enviada', 'aprobada'].includes(quote.status) ? 'done' : ''}"><span>2</span><strong>Enviar</strong><small>Compartir propuesta</small></div><div class="${quote.status === 'aprobada' ? 'done' : ''}"><span>3</span><strong>Aprobar</strong><small>Validación del cliente</small></div><div><span>4</span><strong>Convertir</strong><small>Crear orden de servicio</small></div></div><div class="crm-detail-note">${quote.status === 'aprobada' ? `${crmIcon('check', 15)} Esta cotización está lista para convertirse en orden.` : `${crmIcon('clock', 15)} La aprobación del cliente todavía es una acción de demostración.`}</div></div><div class="crm-panel"><div class="crm-panel-header"><div><span class="crm-panel-kicker">Estados manuales</span><h2>Acciones</h2></div></div><div class="crm-state-actions"><button type="button" data-action="quote-status" data-id="${quote.id}" data-status="enviada">Marcar enviada</button><button type="button" data-action="quote-status" data-id="${quote.id}" data-status="rechazada">Marcar rechazada</button></div></div></aside></div>`;
}

function ordersView() {
  const active = crmState.orders.filter((order) => order.status !== 'cerrada').length;
  return `${crmPageHeader('Operación / Taller', 'Órdenes de servicio', 'Sigue el avance del vehículo desde la recepción hasta la entrega. Todo el contenido es demostrativo.', `<span class="crm-header-stat">${active} activas</span>`)}
    <div class="crm-toolbar"><div class="crm-filter-tabs"><button class="active" data-action="filter-orders" data-filter="todas" type="button">Todas <b>${crmState.orders.length}</b></button><button data-action="filter-orders" data-filter="activas" type="button">Activas</button><button data-action="filter-orders" data-filter="cerrada" type="button">Cerradas</button></div><span class="crm-toolbar-meta">Estados sugeridos · flujo pendiente de validar</span></div><section class="crm-panel crm-table-panel"><div class="crm-table-wrap" id="orders-table">${orderRows('todas')}</div></section>`;
}

function orderRows(filter) {
  const orders = crmState.orders.filter((order) => filter === 'todas' || (filter === 'activas' ? order.status !== 'cerrada' : order.status === 'cerrada'));
  if (!orders.length) return crmEmpty('order', 'No hay órdenes en este estado', 'Avanza una cotización aprobada para crear una orden demo.');
  return `<table class="crm-table"><thead><tr><th>Orden</th><th>Cliente / vehículo</th><th>Problema reportado</th><th>Estado</th><th>Acción</th></tr></thead><tbody>${orders.map((order) => { const client = crmClient(order.clientId); const next = CRM_ORDER_STEPS[CRM_ORDER_STEPS.indexOf(order.status) + 1]; return `<tr><td><a href="/crm/ordenes/${order.id}" data-route="/crm/ordenes/${order.id}"><strong>${order.id}</strong><small>${order.quoteId ? `Desde ${order.quoteId}` : 'Orden demo'}</small></a></td><td><strong>${client.name}</strong><small>${client.vehicle} · ${client.year}</small></td><td><strong>${crmEsc(order.reportedIssue)}</strong><small>Responsable: ${order.responsible}</small></td><td>${crmStatusBadge(order.status)}</td><td>${next ? `<button class="crm-small-action" type="button" data-action="advance-order" data-id="${order.id}">Avanzar ${crmStatus(next)} ${crmIcon('arrow', 14)}</button>` : '<span class="crm-done-label">Flujo cerrado</span>'}</td></tr>`; }).join('')}</tbody></table>`;
}

function orderDetailView(order) {
  if (!order) return crmEmpty('order', 'Orden no encontrada', 'Regresa al listado para continuar.', crmButton('/crm/ordenes', 'Ver órdenes', 'arrow', 'secondary'));
  const client = crmClient(order.clientId);
  const currentIndex = CRM_ORDER_STEPS.indexOf(order.status);
  const next = CRM_ORDER_STEPS[currentIndex + 1];
  return `${crmPageHeader(`Órdenes / ${order.id}`, order.id, 'Detalle operativo para mostrar el avance y las notas de una orden de servicio.', `<a class="crm-back-link" href="/crm/ordenes" data-route="/crm/ordenes">${crmIcon('back', 15)} Volver a órdenes</a>`)}
    <div class="crm-detail-actions"><span>${crmStatusBadge(order.status)}</span>${next ? `<button class="crm-button primary" type="button" data-action="advance-order" data-id="${order.id}">Avanzar a ${crmStatus(next)} ${crmIcon('arrow', 16)}</button>` : '<span class="crm-complete-chip">Orden cerrada</span>'}</div>
    <div class="crm-order-detail-grid"><section class="crm-panel"><div class="crm-panel-header"><div><span class="crm-panel-kicker">Flujo de la orden</span><h2>Estado actual</h2></div><span class="crm-demo-mini">Demo</span></div><div class="crm-order-progress">${CRM_ORDER_STEPS.map((step, index) => `<div class="${index <= currentIndex ? 'current' : ''}"><span>${index + 1}</span><small>${crmStatus(step)}</small></div>`).join('')}</div><div class="crm-order-line"><div><small>Cliente</small><strong>${client.name}</strong><span>${client.phone}</span></div><div><small>Vehículo</small><strong>${client.vehicle}</strong><span>${client.year} · ${client.plate}</span></div><div><small>Responsable</small><strong>${order.responsible}</strong><span>Pendiente de confirmar</span></div></div></section><section class="crm-panel"><div class="crm-panel-header"><div><span class="crm-panel-kicker">Ingreso</span><h2>Problema reportado</h2></div></div><p class="crm-large-note">${crmEsc(order.reportedIssue)}</p><div class="crm-notes-box"><small>Notas internas</small><p>${crmEsc(order.notes)}</p></div></section><section class="crm-panel"><div class="crm-panel-header"><div><span class="crm-panel-kicker">Alcance asociado</span><h2>Conceptos de la orden</h2></div></div><div class="crm-detail-lines">${order.items.map((item) => `<div><span class="crm-type-dot ${item.type === 'Repuesto' ? 'part' : ''}"></span><span><strong>${crmEsc(item.description)}</strong><small>${item.type} · ${item.quantity} unidad${item.quantity === 1 ? '' : 'es'}</small></span><b>${crmAmount((Number(item.quantity) || 0) * (Number(item.price) || 0))}</b></div>`).join('')}</div></section></div>`;
}

function receivablesView() {
  const pending = crmState.receivables.filter((item) => item.status !== 'pagada').reduce((sum, item) => sum + item.amount, 0);
  return `${crmPageHeader('Control / Cobros', 'Cuentas por cobrar', 'Relaciona saldos demo con órdenes o cotizaciones aprobadas sin simular facturación ni pagos reales.', `<span class="crm-header-stat">${crmAmount(pending)} pendientes</span>`)}<div class="crm-callout warning"><span class="crm-callout-icon">${crmIcon('alert', 18)}</span><div><strong>Proceso pendiente de validar.</strong><span>Las reglas de cobro, vencimiento y comprobantes reales del taller todavía no están definidas.</span></div></div><section class="crm-panel crm-table-panel"><div class="crm-table-wrap"><table class="crm-table"><thead><tr><th>Referencia</th><th>Cliente</th><th>Concepto</th><th>Vencimiento</th><th>Estado</th><th>Monto demo</th></tr></thead><tbody>${crmState.receivables.map((item) => { const client = crmClient(item.clientId); return `<tr><td><strong>${item.id}</strong><small>${item.orderId}</small></td><td><strong>${client.name}</strong><small>${client.vehicle}</small></td><td><strong>${item.concept}</strong><small>Sin factura fiscal</small></td><td>${item.due}</td><td>${crmStatusBadge(item.status)}</td><td><strong>${crmAmount(item.amount)}</strong></td></tr>`; }).join('')}</tbody></table></div></section>`;
}

function payablesView() {
  const pending = crmState.payables.filter((item) => item.status !== 'pagada').reduce((sum, item) => sum + item.amount, 0);
  return `${crmPageHeader('Control / Gastos', 'Cuentas por pagar', 'Visualiza obligaciones ficticias con proveedores sin asumir reglas contables del taller.', `<span class="crm-header-stat">${crmAmount(pending)} pendientes</span>`)}<div class="crm-callout warning"><span class="crm-callout-icon">${crmIcon('alert', 18)}</span><div><strong>Reglas contables pendientes de confirmar.</strong><span>Este módulo solo muestra una estructura visual para conversar sobre el proceso real.</span></div></div><section class="crm-panel crm-table-panel"><div class="crm-table-wrap"><table class="crm-table"><thead><tr><th>Referencia</th><th>Proveedor</th><th>Concepto</th><th>Vencimiento</th><th>Estado</th><th>Monto demo</th></tr></thead><tbody>${crmState.payables.map((item) => `<tr><td><strong>${item.id}</strong><small>Registro demo</small></td><td><strong>${item.supplier}</strong><small>Proveedor ficticio</small></td><td><strong>${item.concept}</strong><small>Sin contabilización real</small></td><td>${item.due}</td><td>${crmStatusBadge(item.status)}</td><td><strong>${crmAmount(item.amount)}</strong></td></tr>`).join('')}</tbody></table></div></section>`;
}

function crmBreadcrumbs(route) {
  const labels = { dashboard: ['Resumen'], clientes: ['Clientes y vehículos'], cotizaciones: ['Cotizaciones'], 'quote-new': ['Cotizaciones', 'Nueva'], 'quote-detail': ['Cotizaciones', route.id], ordenes: ['Órdenes de servicio'], 'order-detail': ['Órdenes de servicio', route.id], cobrar: ['Cuentas por cobrar'], pagar: ['Cuentas por pagar'] };
  return `<span>Panel interno</span>${(labels[route.name] || ['Resumen']).map((label, index) => `${crmIcon('arrow', 12)}<strong>${label}</strong>`).join('')}`;
}

function renderCrm() {
  const route = crmRoute();
  document.querySelector('#crm-breadcrumbs').innerHTML = crmBreadcrumbs(route);
  document.querySelectorAll('.crm-nav-link').forEach((link) => link.classList.toggle('active', link.dataset.nav === (route.name.startsWith('quote') ? 'cotizaciones' : route.name.startsWith('order') ? 'ordenes' : route.name)));
  const content = document.querySelector('#crm-content');
  if (route.name === 'quote-new' || route.name === 'quote-detail' && window.location.pathname.endsWith('/edit')) {
    const id = route.name === 'quote-detail' ? route.id : 'new';
    const key = `${id}`;
    if (crmDraftKey !== key) {
      const existing = id === 'new' ? null : crmQuote(id);
      crmDraft = existing ? cloneDemo(existing) : { id: null, clientId: '', vehicleId: '', status: 'borrador', date: crmDate(), validUntil: 'Por confirmar', notes: '', discount: 0, taxRate: 0, items: [{ type: 'Servicio', description: '', quantity: 1, price: 0 }] };
      crmDraftKey = key;
      crmPreviewMode = false;
    }
    content.innerHTML = quoteEditorView(id === 'new');
  } else if (route.name === 'quote-detail') {
    content.innerHTML = quoteDetailView(crmQuote(route.id));
  } else if (route.name === 'order-detail') {
    content.innerHTML = orderDetailView(crmOrder(route.id));
  } else if (route.name === 'clientes') content.innerHTML = clientsView();
  else if (route.name === 'cotizaciones') content.innerHTML = quotesView();
  else if (route.name === 'ordenes') content.innerHTML = ordersView();
  else if (route.name === 'cobrar') content.innerHTML = receivablesView();
  else if (route.name === 'pagar') content.innerHTML = payablesView();
  else { content.innerHTML = dashboardView(); }
}

function navigateCrm(path) {
  window.history.pushState({}, '', path);
  document.querySelector('#crm-sidebar')?.classList.remove('open');
  document.body.classList.remove('crm-menu-open');
  renderCrm();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showCrmToast(message, tone = 'success') {
  const toast = document.querySelector('#crm-toast');
  if (!toast) return;
  toast.className = `crm-toast visible ${tone}`;
  toast.innerHTML = `${crmIcon(tone === 'error' ? 'alert' : 'check', 16)}<span>${message}</span>`;
  clearTimeout(crmToastTimer);
  crmToastTimer = setTimeout(() => toast.classList.remove('visible'), 3600);
}

function updateDraftField(target) {
  if (!crmDraft) return;
  const field = target.dataset.draftField;
  if (field === 'discount' || field === 'taxRate') crmDraft[field] = Number(target.value) || 0;
  else crmDraft[field] = target.value;
  if (field === 'clientId') {
    crmDraft.vehicleId = target.value;
    renderCrm();
  } else if (field === 'notes') {
    // Textareas are intentionally not rerendered while typing.
  } else {
    refreshDraftSummary();
  }
}

function updateDraftLine(target) {
  if (!crmDraft) return;
  const index = Number(target.dataset.index);
  const field = target.dataset.lineField;
  if (!crmDraft.items[index]) return;
  crmDraft.items[index][field] = ['quantity', 'price'].includes(field) ? Number(target.value) || 0 : target.value;
  refreshDraftSummary();
}

function refreshDraftSummary() {
  const summary = quoteTotals(crmDraft || { items: [] });
  const values = { subtotal: crmAmount(summary.subtotal), discount: `− ${crmAmount(summary.discount)}`, tax: crmAmount(summary.tax), total: crmAmount(summary.total) };
  Object.entries(values).forEach(([key, value]) => { document.querySelectorAll(`[data-summary="${key}"]`).forEach((node) => { node.textContent = value; }); });
}

function saveQuoteFromForm(form, action) {
  const formData = new FormData(form);
  crmDraft.clientId = formData.get('clientId');
  crmDraft.vehicleId = formData.get('vehicleId');
  crmDraft.discount = Number(formData.get('discount')) || 0;
  crmDraft.taxRate = Number(formData.get('taxRate')) || 0;
  crmDraft.notes = formData.get('notes') || '';
  if (!crmDraft.clientId || !crmDraft.vehicleId) { showCrmToast('Selecciona un cliente y un vehículo para continuar.', 'error'); return; }
  if (!crmDraft.items.length || crmDraft.items.some((item) => !String(item.description).trim() || Number(item.quantity) < 1)) { showCrmToast('Completa la descripción y cantidad de cada concepto.', 'error'); return; }
  if (!crmDraft.id) crmDraft.id = `COT-${String(crmState.quotes.length + 25).padStart(3, '0')}`;
  crmDraft.status = action === 'send' ? 'enviada' : 'borrador';
  crmDraft.total = quoteTotals(crmDraft).total;
  const index = crmState.quotes.findIndex((quote) => quote.id === crmDraft.id);
  if (index >= 0) crmState.quotes[index] = cloneDemo(crmDraft);
  else crmState.quotes.unshift(cloneDemo(crmDraft));
  crmState.activity.unshift({ icon: action === 'send' ? 'quote' : 'check', title: `${crmDraft.id} ${action === 'send' ? 'marcada como enviada' : 'guardada como borrador'}`, detail: `${crmClient(crmDraft.clientId).name} · ahora`, route: `/crm/cotizaciones/${crmDraft.id}` });
  saveCrmState();
  crmDraftKey = '';
  navigateCrm(`/crm/cotizaciones/${crmDraft.id}`);
  showCrmToast(action === 'send' ? 'Cotización guardada y marcada como enviada.' : 'Cotización guardada como borrador.');
}

function updateQuoteStatus(id, status) {
  const quote = crmQuote(id);
  if (!quote) return;
  quote.status = status;
  quote.updatedAt = crmDate();
  crmState.activity.unshift({ icon: status === 'aprobada' ? 'check' : 'quote', title: `${quote.id} marcada como ${crmStatus(status).toLowerCase()}`, detail: `${crmClient(quote.clientId).name} · ahora`, route: `/crm/cotizaciones/${quote.id}` });
  saveCrmState();
  renderCrm();
  showCrmToast(`La cotización quedó como ${crmStatus(status).toLowerCase()}.`);
}

function convertQuoteToOrder(id) {
  const quote = crmQuote(id);
  if (!quote || quote.status !== 'aprobada') { showCrmToast('Aprueba la cotización antes de convertirla.', 'error'); return; }
  if (quote.orderId) { navigateCrm(`/crm/ordenes/${quote.orderId}`); return; }
  const orderId = `OS-${String(crmState.orders.length + 19).padStart(3, '0')}`;
  const order = { id: orderId, quoteId: quote.id, clientId: quote.clientId, vehicleId: quote.vehicleId, status: 'nueva', reportedIssue: 'Pendiente de confirmar con el cliente.', responsible: 'Por asignar', notes: 'Orden creada desde una cotización aprobada. Responsable, diagnóstico y notas reales pendientes de confirmar.', items: cloneDemo(quote.items) };
  crmState.orders.unshift(order);
  quote.orderId = orderId;
  crmState.receivables.unshift({ id: `CxC-${String(crmState.receivables.length + 10).padStart(3, '0')}`, orderId, clientId: quote.clientId, concept: `Saldo de ${quote.id} · demo`, amount: quoteTotals(quote).total, status: 'pendiente', due: 'Por confirmar' });
  crmState.activity.unshift({ icon: 'order', title: `${orderId} creada desde ${quote.id}`, detail: `${crmClient(quote.clientId).name} · ahora`, route: `/crm/ordenes/${orderId}` });
  saveCrmState();
  navigateCrm(`/crm/ordenes/${orderId}`);
  showCrmToast('Orden creada y saldo demo agregado a cuentas por cobrar.');
}

function advanceOrder(id) {
  const order = crmOrder(id);
  if (!order) return;
  const index = CRM_ORDER_STEPS.indexOf(order.status);
  if (index < CRM_ORDER_STEPS.length - 1) {
    order.status = CRM_ORDER_STEPS[index + 1];
    crmState.activity.unshift({ icon: 'order', title: `${order.id} pasó a ${crmStatus(order.status).toLowerCase()}`, detail: `${crmClient(order.clientId).name} · ahora`, route: `/crm/ordenes/${order.id}` });
    saveCrmState();
    renderCrm();
    showCrmToast(`${order.id} ahora está ${crmStatus(order.status).toLowerCase()}.`);
  }
}

function initCrmDemo() {
  document.body.innerHTML = crmShell();
  document.body.classList.add('crm-body');
  document.title = 'PD-054 · CRM demo';
  crmState = loadCrmState();
  document.body.addEventListener('click', handleCrmClick);
  document.body.addEventListener('change', handleCrmChange);
  document.body.addEventListener('input', handleCrmInput);
  document.body.addEventListener('submit', handleCrmSubmit);
  window.addEventListener('popstate', renderCrm);
  renderCrm();
}

function handleCrmClick(event) {
  const routeTarget = event.target.closest('[data-route]');
  if (routeTarget) { event.preventDefault(); navigateCrm(routeTarget.dataset.route || routeTarget.getAttribute('href')); return; }
  const target = event.target.closest('[data-action]');
  if (!target) return;
  const action = target.dataset.action;
  if (action === 'toggle-sidebar') { document.querySelector('#crm-sidebar').classList.toggle('open'); document.body.classList.toggle('crm-menu-open'); }
  if (action === 'close-sidebar') { document.querySelector('#crm-sidebar').classList.remove('open'); document.body.classList.remove('crm-menu-open'); }
  if (action === 'reset-demo' && window.confirm('¿Reiniciar todos los datos de demostración?')) { crmState = cloneDemo(CRM_DEMO_STATE); saveCrmState(); crmDraft = null; crmDraftKey = ''; navigateCrm('/crm'); showCrmToast('Datos de demostración reiniciados.'); }
  if (action === 'add-quote-line') { crmDraft.items.push({ type: 'Servicio', description: '', quantity: 1, price: 0 }); renderCrm(); }
  if (action === 'remove-quote-line') { crmDraft.items.splice(Number(target.dataset.index), 1); renderCrm(); }
  if (action === 'toggle-quote-preview') { crmPreviewMode = !crmPreviewMode; renderCrm(); }
  if (action === 'save-preview-quote') { const form = document.querySelector('#quote-form'); if (form) saveQuoteFromForm(form, 'save'); }
  if (action === 'toggle-detail-preview') { const quote = crmQuote(target.dataset.id); if (quote) { crmDraft = cloneDemo(quote); crmDraftKey = quote.id; crmPreviewMode = true; navigateCrm(`/crm/cotizaciones/${quote.id}/edit`); } }
  if (action === 'quote-status') updateQuoteStatus(target.dataset.id, target.dataset.status);
  if (action === 'convert-quote') convertQuoteToOrder(target.dataset.id);
  if (action === 'advance-order') advanceOrder(target.dataset.id);
  if (action === 'filter-quotes') { document.querySelectorAll('[data-action="filter-quotes"]').forEach((button) => button.classList.toggle('active', button === target)); document.querySelector('#quotes-table').innerHTML = quoteRows(target.dataset.filter); }
  if (action === 'filter-orders') { document.querySelectorAll('[data-action="filter-orders"]').forEach((button) => button.classList.toggle('active', button === target)); document.querySelector('#orders-table').innerHTML = orderRows(target.dataset.filter); }
}

function handleCrmChange(event) {
  const target = event.target;
  if (target.matches('[data-draft-field]')) updateDraftField(target);
  if (target.matches('[data-line-field]')) updateDraftLine(target);
}

function handleCrmInput(event) {
  const target = event.target;
  if (target.matches('[data-line-field]')) updateDraftLine(target);
  if (target.matches('[data-draft-field="discount"], [data-draft-field="taxRate"]')) updateDraftField(target);
  if (target.matches('[data-client-search]')) document.querySelector('#clients-table').innerHTML = clientRows(target.value);
}

function handleCrmSubmit(event) {
  const form = event.target.closest('[data-quote-form]');
  if (!form) return;
  event.preventDefault();
  const action = event.submitter?.value || 'save';
  saveQuoteFromForm(form, action);
}

if (isCrmRoute()) initCrmDemo();
