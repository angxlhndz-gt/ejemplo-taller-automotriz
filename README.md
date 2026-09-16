# Taller Automotriz · Demo pública y CRM

Demo conceptual para el prospecto interno `PD-054`. La página pública continúa en `/` y el sistema interno está disponible en `/crm`.

## Ejecutar localmente

```bash
python3 dev_server.py
```

Luego abrir:

- `http://localhost:4173/` para la página pública.
- `http://localhost:4173/crm` para el acceso al panel interno.

El servidor local resuelve `/crm` y sus rutas internas hacia `index.html`. En Vercel, `vercel.json` mantiene el mismo fallback.

## Accesos demo

| Rol | Usuario | Clave | Ruta inicial |
|---|---|---|---|
| Administrador | `admin` | `admin` | `/crm/admin` |
| Recolector | `recolector` | `recolector` | `/crm/recolector` |
| Ventas | `ventas` | `ventas` | `/crm/ventas` |

También se muestran botones de acceso rápido en la pantalla de login.

## Recorrido recomendado

1. En `/`, abrir `Asistente demo` y completar una solicitud con datos ficticios.
2. Desde la confirmación, abrir el panel de Ventas y entrar a `Leads del chatbot`.
3. Abrir el lead, preparar contacto, marcarlo como contactado y crear una cotización.
4. Guardar la cotización como enviada, aprobarla en modo simulación y convertirla en una orden.
5. Entrar como Administrador para revisar la orden, avanzar su estado y consultar cuentas por cobrar.
6. Entrar como Recolector y completar la recepción de 10 pasos con inventario, daños, fotografías, firma y PDF simulado.

## Qué está simulado

- Autenticación y permisos por rol con usuarios fijos.
- Clientes, vehículos, leads, cotizaciones, órdenes, seguimientos y cuentas demo.
- Chatbot público que genera leads locales.
- Recepción móvil/tablet con evidencias, firma y documento PDF simulado.
- Avance de estados, contacto de leads, aprobación de cotizaciones y conversión a órdenes.
- Persistencia en `localStorage` del navegador; no se envía información a un backend.

Claves principales de almacenamiento: `pd-054-crm-session-v1`, `pd-054-crm-state-v2`, `pd-054-leads-v1` y `pd-054-reception-draft-v1`.

## Supuestos y límites

- Los nombres, contactos, vehículos, montos, firmas, fotografías y estados son exclusivamente demostrativos.
- No hay backend, autenticación real, correo, pagos, facturación fiscal, reglas contables ni generación real de PDF.
- Antes de producción deben confirmarse nombre comercial, logo y marca, catálogo, usuarios y permisos, campos de recepción/cotización, inventario, reportes, WhatsApp, facturación, hosting y accesos.

## Verificación local

Se validan la sintaxis de `app.js`, la compilación de `dev_server.py`, el formato del diff y la entrega HTTP de las rutas públicas y `/crm/*`.
