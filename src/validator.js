const validator= {
  isValid: function(creditCardNumber){

    //Creditcardnumber, es el número de tarjeta que esta creando el usuario 
    //Transformar array credicardnumber y guardarla en una nueva variable
    //No sucede nada si, se llama digito
    //comentar la línea 6
    // Dígitos de ejemplo de una tarjeta de crédito
    //let digits = [4, 5, 3, 2, 0, 1, 5, 1, 1, 2, 8, 3, 0, 3, 6, 6].map(Number);
    
    // Convertir la cadena a un array de números HABÍA QUE HACER
    const numeros = creditCardNumber.split('').map(Number);
    console.log(numeros);
  
    let sum = 0;
    
  
    // Invertir el array de dígitos
    
    const reverse = numeros.reverse();
    console.log(reverse)
  

    // Iterar sobre cada dígito
    for (let i = 0; i < reverse.length; i++) {
      let numero = reverse[i];

  
      // Aplicar la regla de Luhn: duplicar los dígitos en posiciones impares
      if (i % 2 === 0) {
        numero *= 2;
  
        // Si el resultado es mayor que 9, restar 9
        if (numero > 9) {
          numero -= 9;
        }
      }
  
      // Sumar el dígito al total
      sum += numero;
      console.log(sum);
    }
  
    // Verificar si la suma total es divisible por 10
    return sum % 10 === 0;
  }
  //comentar etiqueta línea 30
  //trabajar con el resultado de la suma 
  //línea número 32 no, me va a funcionar
  //alert lo hago después
  //primero termino con esta función
  //la función en donde el usuario va a colocar el número, no esta creada HACERLA
  
  // Número de tarjeta de crédito de ejemplo
  //const cardNumber ='4532015112830366';
  
  // Transformar la cadena de dígitos en un array de números y guardar en una nueva variable
  //const cardDigits = cardNumber.split('').map(Number);
  
  // Llamar a la función isValid con el número de tarjeta y mostrar el resultado
  //console.log(`¿Es válida la tarjeta ${cardNumber}? ${isValid(cardNumber) ? 'Sí' : 'No'}`);
}
  
// Exportar la función para uso externo (si se desea)
  
  




export default validator;
