import validator from './validator.js';
const inputElement = document.getElementById("cardNumber");
console.log(inputElement)

const inputRegion = document.getElementById("countryorregion")
console.log(inputRegion)

const Buttonpay = document.getElementById("pay-button")
console.log(Buttonpay)

function validarNumeroTarjeta() {

  const valorTarjeta = inputElement.value;
  console.log(valorTarjeta)

  //Tomar el valor del número de tarjeta que ingresa el usuario en el input
  const isValid = validator.isValid(valorTarjeta);
  console.log('¿Es válido?', isValid);
}


//inputElement.addEventListener('input', validarNumeroTarjeta);
Buttonpay.addEventListener("click", validarNumeroTarjeta); 



