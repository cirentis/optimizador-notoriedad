// Generado por opt_datos.py. No editar a mano.
window.SECTORES = window.SECTORES || {};
window.SECTORES.banca = {
 "sector": "Banca",
 "marcas": [
  "BBVA",
  "Sabadell",
  "CaixaBank",
  "Santander",
  "ING",
  "Bankinter",
  "Abanca"
 ],
 "marca_media": "banco medio",
 "marcas_txt": "siete bancos",
 "separado": "Bancos por separado",
 "una_marca": "un banco",
 "activos": [
  "TV",
  "Radio",
  "Diarios"
 ],
 "aviso": "Exterior y digital son curvas débiles: su curva semanal no ajusta y no están activadas por defecto.",
 "limites": [
  "TV, radio y diarios tienen curva fiable. Exterior y digital son débiles: el efecto es significativo, pero su curva semanal no ajusta (R² < 0).",
  "Digital: IOPE lo mide agregado e InfoAdex no recoge search.",
  "Revistas y cine no tienen curva: la relación no se sostiene dentro de cada banco o la inversión es mínima."
 ],
 "metodo": "suelo p10: notoriedad − percentil 10 = b · inversión con arrastre",
 "periodo": "ene-2025 a mar-2026 (curvas semanales); modelos mensuales ene-2024 a mar-2026",
 "generado": "2026-11-28",
 "medios": [
  {
   "medio": "TV",
   "curva": "Sí",
   "lam": 0.5,
   "lw": 0.8521803964285746,
   "beta": 0.835799202612948,
   "p": 1.083677258021757e-36,
   "r2w": 0.3373093470243457,
   "inv_sector_M": 51.70505244163185,
   "activo": true,
   "panel": {
    "B": 102.90840163024133,
    "A": 3.0457234929129147,
    "techo": 21.02523731164758,
    "x80": 461.17578134864146,
    "xm": 117.53196660909326,
    "r2": 0.6195584667048706,
    "n": 455
   },
   "bancos": {
    "B": 174.58368443145733,
    "A": 3.4096652020989304,
    "techo": 30.25511321516748,
    "x80": 782.3828356376073,
    "xm": 119.05030313745229,
    "r2": 0.7977617977813382,
    "n": 455
   },
   "xm": 117.53196660909326
  },
  {
   "medio": "Exterior",
   "curva": "Débil",
   "lam": 0.8,
   "lw": 0.9498087165248207,
   "beta": 0.7386135392730675,
   "p": 1.620595726472789e-21,
   "r2w": 0.1384906596076911,
   "inv_sector_M": 3.6171986000000005,
   "activo": false,
   "panel": {
    "B": 0.28560209300069694,
    "A": 0.4625738112691399,
    "techo": 1.58815634382516,
    "x80": 1.2799029652375613,
    "xm": 9.841964230709811,
    "r2": -0.09671903517427727,
    "n": 447
   },
   "bancos": {
    "B": 0.28560209300069694,
    "A": 0.48135697282748335,
    "techo": 1.618268859816809,
    "x80": 1.2799029652375613,
    "xm": 15.567593742568631,
    "r2": -0.007824364179543242,
    "n": 260
   },
   "xm": 9.841964230709811
  },
  {
   "medio": "Radio",
   "curva": "Sí",
   "lam": 0.3,
   "lw": 0.7574180911642515,
   "beta": 1.344127574652972,
   "p": 2.651826478846328e-41,
   "r2w": 0.4053964555120406,
   "inv_sector_M": 21.605914820000002,
   "activo": true,
   "panel": {
    "B": 50.8706256096451,
    "A": 2.375928869291936,
    "techo": 10.761004111495662,
    "x80": 227.9726450082973,
    "xm": 50.84131959508024,
    "r2": 0.8334445853649395,
    "n": 447
   },
   "bancos": {
    "B": 72.91456337382465,
    "A": 2.5515139678877667,
    "techo": 12.826508011508592,
    "x80": 326.7607911785595,
    "xm": 60.27327867348906,
    "r2": 0.715093580351875,
    "n": 390
   },
   "xm": 50.84131959508024
  },
  {
   "medio": "Revistas",
   "curva": "No",
   "lam": 0.0,
   "lw": 0.0,
   "beta": 1.595353384453925,
   "p": 4.822619781291201e-07,
   "r2w": 0.0006353326151641393,
   "inv_sector_M": 2.07170772,
   "activo": false
  },
  {
   "medio": "Diarios",
   "curva": "Sí",
   "lam": 0.8,
   "lw": 0.9498087165248207,
   "beta": 0.735417571346138,
   "p": 3.989958826468941e-30,
   "r2w": 0.1971761697592544,
   "inv_sector_M": 12.51205823,
   "activo": true,
   "panel": {
    "B": 15.061819003038574,
    "A": 1.2539314314137529,
    "techo": 3.5040920104300013,
    "x80": 67.498338689743,
    "xm": 28.117282599610448,
    "r2": 0.7236031668519531,
    "n": 450
   },
   "bancos": {
    "B": 24.108836122802078,
    "A": 1.5537981323068406,
    "techo": 4.729398996153833,
    "x80": 108.04182321564959,
    "xm": 36.644614457032525,
    "r2": 0.5098472999856574,
    "n": 320
   },
   "xm": 28.117282599610448
  },
  {
   "medio": "Cine",
   "curva": "No",
   "lam": 0.9,
   "lw": 0.9759792381800543,
   "beta": 0.4853249245504768,
   "p": 3.605159508099041e-19,
   "r2w": 0.04814182861715383,
   "inv_sector_M": 0.25526156999999744,
   "activo": false
  },
  {
   "medio": "Digital",
   "curva": "Débil",
   "lam": 0.8,
   "lw": 0.9498087165248207,
   "beta": 0.1826179089873559,
   "p": 2.432024369652515e-32,
   "r2w": 0.1122603270847015,
   "inv_sector_M": 71.556829,
   "activo": false,
   "panel": {
    "B": 1.7864114963609423,
    "A": 0.9409479517949638,
    "techo": 2.562409307889173,
    "x80": 8.005660418326345,
    "xm": 182.151233680808,
    "r2": -0.008855060762057887,
    "n": 455
   },
   "bancos": {
    "B": 3.0318975,
    "A": 1.024716716051406,
    "techo": 2.786306032980034,
    "x80": 13.587206451378771,
    "xm": 179.47673738373922,
    "r2": -0.009645042279679217,
    "n": 451
   },
   "xm": 182.151233680808
  }
 ]
};
