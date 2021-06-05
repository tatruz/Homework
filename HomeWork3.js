/*task 2 Find the sign of product of three numbers without multiplication
operator. Display the s pecified sign.*/


let num1 = +prompt("input 1st number")
let num2 = +prompt("input 2nd number")
let num3 = +prompt("input 3th number")

if ((num1 < 0 && num2 < 0 && num3 > 0) || (num1 < 0 && num3 < 0 && num2 >0) || (num2 < 0 && num3 < 0 && num1 >0)){
alert ("the sign is positive")
}
else if (num1 === 0 || num2 === 0 || num3 === 0) {
alert ("unsign")
}
else if (num1 < 0 || num2 < 0 || num3 < 0) {
alert ("the sign is negative")
} 
else {
alert ("the sign is positive")
}

/*task 1 Given a number round it to the nearest 50 without using “if” operator
(conditions).*/

let number = +prompt("input 1st number")
var round = Math.round(number / 50) * 50
alert (round)

//task 5 Insert a number. Print ‘yes’ if the number is prime, ‘no’ otherwise.

let number = +prompt("input number")
let result = "yes";
for (let i = 2; i < number; i++){

if (number % i === 0){
result = "no";
    } 
}
alert(result)

/*task 3 Insert a digit and a number. Check whether the digits contains in the
number or not.*/

let number = +prompt("input number")
let digit = 4
while (number > 0) {
  let currentDigit = number % 10;

  if (currentDigit === digit) {
    alert("true")
  } else {
    alert("false")
  }
  number = Math.floor(number / 10);
}

/*task 4 Enter a number. Find the difference between its biggest and smallest
digits.*/

const number = 237649;

let max = 9;
let min = 0;

while (number > 0) {
  let currentDigit = number % 10;

  if (currentDigit > max) {
    max = currentDigit;
  } else {
    min = currentDigit;
  }
  number = Math.floor(number / 10);
}
alert(max - min);
