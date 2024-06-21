function ConcatenoLetras(){
  let letrasConcatenadas = ""; // Inicializo una cadena vacía para almacenar las letras
  for (let i = 1; i < 11; i ++) {
   let letras = prompt("ingrese letras");
   letrasConcatenadas += letras + ","
   /* con el igual solo me va mostrando las letras que voy agregando
   con el += se van concatenando. Me va mostrando la actual más la 
   anterior */
   console.log("repeticiones:", i, "letras:" + letrasConcatenadas); 
   console.log(i);
   //Lo de arriba me muestra los numeros de repeticiones y las letras
   //que se van concatenando.
   //console.log(letras);
  }
}
/* este código no se ejecuta desde node: con node funcion.js, sino que se 
ejecuta desde el index.html  
Luego debo ir a index.html y hacer clic derecho open with Live Server
Luego ir al navegador, clic derecho, inspeccionar.*/
ConcatenoLetras();