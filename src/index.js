import isValid from './validator.js';

var inputElement = document.getElementById('4532015112830366');

function validarNumeroTarjeta() {

    var valorTarjeta = inputElement.value;
    var esValido = isValid(valorTarjeta);
    console.log('¿Es válido?', esValido);
}

inputElement.addEventListener('input', validarNumeroTarjeta);

inputElement.value = '4532015112830366';

validarNumeroTarjeta();
const validatorCard = {


        isValid: function (numeroTarjeta) {
            return numeroTarjeta.length === 16;
        }


}
console.log(validatorCard);
