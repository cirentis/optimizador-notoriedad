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
  "Solo TV tiene curva fiable (R² dentro 0,39). Radio, digital y exterior son débiles (R² dentro entre 0,01 y 0,02): úsalas como orientación.",
  "Exterior: la curva es casi plana (techo 1,5 pts, el 80 % con 1,4 k€ a la semana), así que es casi un aporte fijo si se activa.",
  "Diarios, revistas y cine no tienen curva: la inversión del sector es mínima."
 ],
 "metodo": "suelo p10: notoriedad − percentil 10 = b · inversión con arrastre",
 "periodo": "ene-2025 a mar-2026 (curvas semanales); modelos mensuales ene-2024 a mar-2026",
 "generado": "2026-11-28",
 "medios": [
  {
   "medio": "TV",
   "curva": "Sí",
   "lam": 0.3,
   "lw": 0.7574180911642515,
   "beta": 0.7182986877064513,
   "p": 2.207876358196944e-60,
   "r2w": 0.3859476970485229,
   "inv_sector_M": 69.973093651187,
   "activo": true,
   "panel": {
    "B": 26.109383099640056,
    "A": 2.3756221186965463,
    "techo": 10.757703673309042,
    "x80": 117.00711468410434,
    "xm": 105.92618310569097,
    "r2": 0.2589278015441412,
    "n": 637
   },
   "bancos": {
    "B": 21.714147170897107,
    "A": 2.4552389718333663,
    "techo": 11.649217051032881,
    "x80": 97.31021597088993,
    "xm": 105.05841974016201,
    "r2": 0.1260969865484286,
    "n": 637
   },
   "xm": 105.92618310569097
  },
  {
   "medio": "Exterior",
   "curva": "Débil",
   "lam": 0.0,
   "lw": 0.0,
   "beta": 1.916359517639546,
   "p": 1.564182777744313e-12,
   "r2w": 0.01944335630801425,
   "inv_sector_M": 2.87890885,
   "activo": false,
   "panel": {
    "B": 0.3136022,
    "A": 0.4004541143931335,
    "techo": 1.4925023105537447,
    "x80": 1.405383208042678,
    "xm": 7.628979279999983,
    "r2": -0.12240632322496148,
    "n": 375
   },
   "bancos": {
    "B": 9.1375910940133,
    "A": 0.30936562520069605,
    "techo": 1.3625604658835606,
    "x80": 40.94938455625189,
    "xm": 14.933321035966008,
    "r2": 0.07655665009947987,
    "n": 65
   },
   "xm": 7.628979279999983
  },
  {
   "medio": "Radio",
   "curva": "Débil",
   "lam": 0.8,
   "lw": 0.9498087165248207,
   "beta": 0.3556402693789031,
   "p": 1.618728463291423e-52,
   "r2w": 0.01464319304423197,
   "inv_sector_M": 28.03867487,
   "activo": true,
   "panel": {
    "B": 4.874571416596645,
    "A": 1.7616699894088648,
    "techo": 5.822152212855117,
    "x80": 21.845002411621266,
    "xm": 49.20039710077381,
    "r2": 0.1610904651768298,
    "n": 552
   },
   "bancos": {
    "B": 3.3663844875,
    "A": 1.7376781193913775,
    "techo": 5.684130217137255,
    "x80": 15.086183166278351,
    "xm": 54.11207558630535,
    "r2": 0.15864497269727496,
    "n": 504
   },
   "xm": 49.20039710077381
  },
  {
   "medio": "Revistas",
   "curva": "No",
   "lam": 0.8,
   "lw": 0.9498087165248207,
   "beta": 2.1389126194925,
   "p": 7.286414207722809e-23,
   "r2w": 0.04756599909131203,
   "inv_sector_M": 0.6429184000000001,
   "activo": false
  },
  {
   "medio": "Diarios",
   "curva": "No",
   "lam": 0.0,
   "lw": 0.0,
   "beta": 3.848074145118298,
   "p": 3.458206942014818e-08,
   "r2w": 0.0002434748023024172,
   "inv_sector_M": 0.9706677200000002,
   "activo": false
  },
  {
   "medio": "Cine",
   "curva": "No",
   "lam": 0.9,
   "lw": 0.9759792381800543,
   "beta": 0.5372102244968315,
   "p": 4.15100482593424e-23,
   "r2w": 0.09069663625622562,
   "inv_sector_M": 0.9474576899999989,
   "activo": false
  },
  {
   "medio": "Digital",
   "curva": "Débil",
   "lam": 0.6,
   "lw": 0.8888001816734287,
   "beta": 0.365880174127422,
   "p": 7.142729328600823e-32,
   "r2w": 0.008739642875789367,
   "inv_sector_M": 28.590071000000002,
   "activo": true,
   "panel": {
    "B": 6.741490298448021,
    "A": 1.1225243980525252,
    "techo": 3.072600889020383,
    "x80": 30.211450246909845,
    "xm": 41.865242768726205,
    "r2": 0.14870150054718012,
    "n": 673
   },
   "bancos": {
    "B": 7.564899788097614,
    "A": 1.3051112892464314,
    "techo": 3.6880995166827364,
    "x80": 33.90149409895084,
    "xm": 43.471639735620535,
    "r2": 0.06244511437236655,
    "n": 591
   },
   "xm": 41.865242768726205
  }
 ]
};
