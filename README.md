# Optimizador de notoriedad · CIRENTIS

Herramienta web gratuita para repartir un presupuesto entre medios y conseguir el máximo recuerdo publicitario. **Versión 0.3: sectores banca y seguros, modelos con suelo (percentil 10).**

Todo se calcula en el navegador: los datos que se introducen no se envían ni se guardan.

## Archivos

| Archivo | Qué es |
|---|---|
| `index.html` | La aplicación (el sector se elige en la propia página o con `?sector=banca` / `?sector=seguros`) |
| `datos_banca.js` | Curvas de respuesta por medio del sector banca |
| `datos_seguros.js` | Curvas de respuesta por medio del sector seguros |
| `cirentis.png` | El logo |

## Cómo funciona

- **Una curva por medio:** recuerdo = e^(A − B / inversión semanal sostenida). Se estima con un modelo de panel de las marcas del sector (7 bancos y 12 aseguradoras), con datos de IOPE, InfoAdex y Kantar.
- **Suelo:** cada marca tiene un suelo de recuerdo (percentil 10 de su notoriedad en el medio); la publicidad explica lo que sube por encima.
- **Curvas débiles:** el efecto es significativo en el sector, pero explica poco de los cambios de cada marca. Son orientativas.
- **Optimización:** programación dinámica sobre el presupuesto semanal, dentro de los límites de inversión de cada medio.

© CIRENTIS
