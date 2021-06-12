//task 1 Given a number print its digits count.

let number = +prompt("input number")
let count = ("" + number).length
alert(count)


//task 2 Count numbers of digit 9 in a number.

let num = 350919999920003
let count = ""
let array = "" + num

for (let i = 0; i < array.length; i++) {
    if (array[i] === "9"){
        count = +(count + 1)
    } 
}
alert(count)


//task 4 Insert a number. Print “yes” if it contains 3 successive zeros, otherwise print “no”.

let num = 350120003
let array = "" + num
let result = "no"

for (let i = 0; i < array.length-2; i++) {
    if (+array[i] === 0 && +array[i+1] === 0 && +array[i+2]=== 0){
        result = "yes"
    } 
}
alert(result)


//task 5 Insert two positive integers n and m between 1 and 10. Compute and print n m .

let num1 = +prompt("input 1st number")
let num2 = +prompt("input 2nd number")

if ((num1 > 0 && num1 < 10) && (num2 > 0 && num2 < 10)) {
    alert(Math.pow(num1, num2))
} else {
    alert ("can't compute")
}


