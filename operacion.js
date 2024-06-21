/* function elegirOperacion(Operacion,x,y){
  if (Operacion == 1){
    let suma = x + y;
    console.log("El resultado de la suma es:  " + suma);
    return suma
     }else{ 
      if (Operacion == 2){
        let resta = x - y;
        console.log("El resultado de la resta es:  " + resta);
    return resta
     }
     }
}

const result = elegirOperacion(2,5,5);
console.log("el resultado de la operación es: " + result);
 */
function elegirOperacion(operacion, x, y) {
  if (operacion === 1) {
      let suma = x + y;
      console.log("El resultado de la suma es: " + suma);
      return suma; // Devolvemos el resultado para que puedas usarlo si lo necesitas
  } else if (operacion === 2) {
      let resta = x - y;
      console.log("El resultado de la resta es: " + resta);
      return resta; // Devolvemos el resultado para que puedas usarlo si lo necesitas
  } else {
    if (operacion !== 1 || operacion !== 2) {
      console.log("Operación no válida. Debes elegir 1 para suma o 2 para resta.");
      return "Operación no válida"; // Devolvemos Operación no válida para que quede más explicito el error
  }
}
}
const result = elegirOperacion(0, 10, 20);
console.log("El resultado de la operación es: " + result);