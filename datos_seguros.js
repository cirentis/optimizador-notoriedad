// Generado por opt_datos.py. No editar a mano.
window.SECTORES = window.SECTORES || {};
window.SECTORES.seguros = {
 "sector": "Seguros",
 "marcas": [
  "Línea Directa",
  "Mutua Madrileña",
  "Mapfre",
  "Occident",
  "Santa Lucía",
  "Adeslas",
  "AXA",
  "Ocaso",
  "Verti",
  "Allianz",
  "DKV",
  "Direct Seguros"
 ],
 "marca_media": "aseguradora media",
 "marcas_txt": "doce aseguradoras",
 "separado": "Aseguradoras por separado",
 "una_marca": "una aseguradora",
 "activos": [
  "TV",
  "Radio",
  "Digital"
 ],
 "aviso": "En seguros solo la curva de TV es fiable. Radio, digital y exterior son curvas débiles: el efecto es significativo en el sector, pero explica poco de los cambios de cada aseguradora. Exterior no está activado por defecto: su curva es casi plana.",
 "limites": [
  "Solo TV tiene curva fiable (R² dentro 0,39). Radio, digital y exterior son débiles (R² dentro entre 0,01 y 0,05): úsalas como orientación.",
  "Exterior: la curva es casi plana (techo 0,6 pts), así que el optimizador le da poca inversión si se activa.",
  "Diarios, revistas y cine no tienen curva: la relación no es significativa o la inversión es mínima.",
  "Línea Directa no tiene modelo propio fiable (TV siempre encendida, sin variación); entra en el panel con su propia base."
 ],
 "periodo": "ene-2025 a mar-2026 (curvas semanales); modelos mensuales ene-2024 a mar-2026",
 "generado": "2026-11-26",
 "medios": [
  {
   "medio": "TV",
   "curva": "Sí",
   "lam": 0.4,
   "lw": 0.8094083685794372,
   "beta": 0.8155421484118337,
   "p": 3.471567780053888e-35,
   "r2w": 0.3894226737797123,
   "inv_sector_M": 69.973093651187,
   "activo": true,
   "panel": {
    "B": 34.52193373810573,
    "A": 2.523690510584157,
    "techo": 12.474549273251183,
    "x80": 154.70728835670093,
    "xm": 107.77944482191204,
    "r2": 0.5117924339867601,
    "n": 610
   },
   "bancos": {
    "B": 58.628197361422195,
    "A": 2.799104800161344,
    "techo": 16.42993211322316,
    "x80": 262.73758312140285,
    "xm": 90.15516563629062,
    "r2": 0.6101448711379044,
    "n": 572
   },
   "xm": 107.77944482191204
  },
  {
   "medio": "Exterior",
   "curva": "Débil",
   "lam": 0.8,
   "lw": 0.9498087165248207,
   "beta": 0.5765571816618821,
   "p": 8.052553000120004e-05,
   "r2w": 0.0488342602725773,
   "inv_sector_M": 2.87890885,
   "activo": false,
   "panel": {
    "B": 0.11075108109809641,
    "A": -0.5141599637615915,
    "techo": 0.5980027276456292,
    "x80": 0.49632212289275246,
    "xm": 5.681614427729805,
    "r2": 0.05742768665541853,
    "n": 495
   },
   "bancos": {
    "B": 11.998856992138679,
    "A": -0.10715078561139352,
    "techo": 0.8983901984614124,
    "x80": 53.77191911427017,
    "xm": 14.933321035966008,
    "r2": 0.125199479162856,
    "n": 65
   },
   "xm": 5.681614427729805
  },
  {
   "medio": "Radio",
   "curva": "Débil",
   "lam": 0.9,
   "lw": 0.9759792381800543,
   "beta": 0.07467148146796188,
   "p": 0.008815248789454722,
   "r2w": 0.02185065479066655,
   "inv_sector_M": 28.03867487,
   "activo": true,
   "panel": {
    "B": 10.107354806179412,
    "A": 1.1658123580716495,
    "techo": 3.208528298655925,
    "x80": 45.29530316539235,
    "xm": 42.360555758329276,
    "r2": 0.12928628844678258,
    "n": 552
   },
   "bancos": {
    "B": 2.2442563250000003,
    "A": 1.3903270024288548,
    "techo": 4.016163133391558,
    "x80": 10.05745544418557,
    "xm": 34.439104631696715,
    "r2": 0.17850199098673314,
    "n": 260
   },
   "xm": 42.360555758329276
  },
  {
   "medio": "Revistas",
   "curva": "No",
   "lam": 0.9,
   "lw": 0.9759792381800543,
   "beta": 0.7322226257242416,
   "p": 4.072058014799834e-05,
   "r2w": 0.05278255571552206,
   "inv_sector_M": 0.6429184000000001,
   "activo": false
  },
  {
   "medio": "Diarios",
   "curva": "No",
   "lam": 0.7,
   "lw": 0.9209867747923107,
   "beta": 0.3863314622031845,
   "p": 0.2844401604520585,
   "r2w": 0.003683216390994937,
   "inv_sector_M": 0.9706677200000002,
   "activo": false
  },
  {
   "medio": "Cine",
   "curva": "No",
   "lam": 0.9,
   "lw": 0.9759792381800543,
   "beta": 0.2915690407155701,
   "p": 5.529498916278482e-08,
   "r2w": 0.09069663625622576,
   "inv_sector_M": 0.9474576899999989,
   "activo": false
  },
  {
   "medio": "Digital",
   "curva": "Débil",
   "lam": 0.3,
   "lw": 0.7574180911642515,
   "beta": 0.141925251475129,
   "p": 0.04424816773692423,
   "r2w": 0.01294941691484432,
   "inv_sector_M": 28.590071000000002,
   "activo": true,
   "panel": {
    "B": 15.379055910385329,
    "A": -0.13692989749025836,
    "techo": 0.87203135557602,
    "x80": 68.92001054841147,
    "xm": 41.49871028622614,
    "r2": 0.18434709097865665,
    "n": 673
   },
   "bancos": {
    "B": 2.5216332626992046,
    "A": 0.9413065409485896,
    "techo": 2.563328324839039,
    "x80": 11.300498032983613,
    "xm": 72.64315705623581,
    "r2": -0.1758365796186674,
    "n": 178
   },
   "xm": 41.49871028622614
  }
 ]
};
