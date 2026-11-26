# Optimizador de notoriedad · CIRENTIS

Herramienta web gratuita para repartir un presupuesto entre medios y conseguir el máximo recuerdo publicitario. **Versión 0.1: sector banca.**

Todo se calcula en el navegador: los datos que se introducen no se envían ni se guardan.

## Archivos

| Archivo | Qué es |
|---|---|
| `index.html` | La aplicación |
| `datos_banca.js` | Las curvas de respuesta por medio del sector banca |
| `cirentis.png` | El logo |

## Cómo funciona

- **Una curva por medio:** recuerdo = e^(A − B / inversión semanal sostenida). Está estimada con un modelo de panel de siete bancos, con datos de IOPE, InfoAdex y Kantar.
- **Optimización:** programación dinámica sobre el presupuesto semanal, dentro de los límites de inversión de cada medio.

© CIRENTIS
