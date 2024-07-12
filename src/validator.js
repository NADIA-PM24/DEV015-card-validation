const isValid = function(creditCardNumber){
  let digits = [4, 5, 3, 2, 0, 1, 5, 1, 1, 2, 8, 3, 0, 3, 6, 6].map(Number);

  digits.reverse();

  let sum = 0;

  for (let i = 0; i < digits.length; i++) {
    let digit = digits[i];

    if (i % 2 === 1) {
      digit *= 2;

      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
  }

  return sum % 10 === 0;
}

let creditCardNumber ='4532015112830366';
console.log(`¿Es válida la tarjeta ${creditCardNumber}? ${isValid(creditCardNumber) ? 'Sí' : 'No'}`);

export default isValid;
