function gastosViaje(nafta,comida,peajes,texto){
  let gastosTotales = nafta + comida + peajes + texto;
  return gastosTotales;
}
let gastos = gastosViaje(100,200,300," Ud es un crack");
console.log(`Gastos totales: ${gastos}`)
