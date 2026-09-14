# Taller Automotriz · Demo pública y CRM

Demo conceptual para el prospecto interno `PD-054`. La página pública continúa en `/` y el sistema interno está disponible en `/crm`.

## Ejecutar localmente

Como es una demo estática, se puede servir desde la raíz del proyecto con el fallback local incluido:

```bash
python3 dev_server.py
```

Luego abrir:

- `http://localhost:4173/` para la página pública.
- `http://localhost:4173/crm` para el panel interno. En Vercel, `vercel.json` configura ese fallback automáticamente.

## Recorrido recomendado

1. Entrar a `/crm` y mostrar el resumen operativo.
2. Abrir `Cotizaciones` y revisar `COT-022`, que ya está aprobada.
3. Entrar a `Convertir en orden`, avanzar el estado de la orden y consultar `Cuentas por cobrar`.
4. Crear una cotización nueva para mostrar cliente, vehículo, conceptos, vista previa y guardado local.
5. Usar `Reiniciar datos demo` si se quiere repetir el recorrido.

## Supuestos y límites

- Los nombres, contactos, vehículos, montos y estados tienen uso exclusivamente demostrativo.
- No hay backend, autenticación real, correo, pagos, facturación fiscal ni reglas contables implementadas.
- El estado se guarda únicamente en `localStorage` del navegador.
- Quedan pendientes de confirmar: nombre comercial, logo y marca, catálogo real, usuarios y roles, recepción de vehículos, aprobación de cotizaciones, alcance de cuentas por cobrar/pagar, inventario, reportes, facturación, WhatsApp, campos de la cotización, hosting definitivo y accesos.
