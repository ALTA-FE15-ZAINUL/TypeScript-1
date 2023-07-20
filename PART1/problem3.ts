function isArmstrongNumber(number: number): boolean {
  const number1 = number.toString();
  const number2 = number1.length;
  let sum = 0;

  for (let angka of number1) {
    let angka1 = parseInt(angka, 10);
    sum += Math.pow(angka1, number2);
  }
  return number === sum;
}

// output dari masing2 angka
console.log(isArmstrongNumber(153)); //true
console.log(isArmstrongNumber(9)); //true
console.log(isArmstrongNumber(10)); //false
