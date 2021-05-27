//task1 Given a number. Print “odd” if the number is odd and “even” if it’s even.

let number = +prompt("type your number")
if ((number/2) === 0) {
   alert("even")
}
else {
   alert("odd")
}    

/*task2 Given a positive integer. Bring the last digit of the number to the beginning. Print the new
number. If the last digit of the inserted number is 0, number remains the same.*/

let number = 587
let lastDigit = number % 10
if (lastDigit === 0)

{
     console.log(number)

}
else {
      console.log ((lastDigit + (""+ (number - lastDigit)))/10) 
}

/*task 3 Given five numbers as input. Calculate and print the average of the numbers(without
using arrays).*/

let num1 = +prompt("Type the first number")
let num2 = +prompt("Type the second number")
let num3 = +prompt("Type the third number")
let num4 = +prompt("Type the forth number")
let num5 = +prompt("Type the fifth number")

let average = ((num1 + num2 + num3 + num4 + num5 ) / 5)
alert(average)

//task 4  Given three numbers. Sort them by the ascending order.

let num1 = +prompt("input 1st number")
let num2 = +prompt("input 2nd number")
let num3 = +prompt("input 3th number")

if (num1 > num2 && num1 > num3 && num2 > num3) {
    alert (num3 + "," + num2 + "," + num1)
}

else if (num2 > num1 && num2 > num3 && num1 > num3) {
    alert (num1 + "," + num3 + "," + num2)
}

else if (num3 > num1 && num3 > num2 && num1 > num2) {
    alert (num2 + "," + num1 + "," + num3)
}

else if (num2 > num1 && num2 > num3 && num1 > num3) {
    alert (num3 + "," + num1 + "," + num2)
}

else if (num1 > num3 && num1 > num2 && num3 > num2) {
    alert (num2 + "," + num3 + "," + num1)
}

else if (num3 > num2 && num3 > num1 && num2 > num1) {
    alert (num1 + "," + num2 + "," + num3)
}

/*task 5 Given the following code rewrite it using only two if operators. (Hint: use logical
operators).*/

var n = +prompt();

var i = 0;
var j = 0;

if (n % 2 === 0 && !Math.floor(n / 10 )) {
       console.log(i += 1)
    }

if (n % 3 === 0 && n % 10 === 1) {
       console.log(j += 1)   
    }