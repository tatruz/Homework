/*Write a function which receives an array and a number as arguments and returns a new array
from the elements of the given array which are larger than the given number.
*/

let findLarger = (arr, num) => { 
    let newArr = [] 
       
    for(let i = 0; i < arr.length; i++){ 
      if(arr[i] > num){ 
        newArr.push(arr[i]) 
      } 
    } 
      
    return newArr 
  } 

 /* Write a function, which receives two numbers as arguments and finds all numbers between
  them such that each digit of the number is even. The numbers obtained should be printed in a
  comma-separated sequence on a single line. */

  let findEvenNumbers = (arr) => {
    let newArr = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            newArr.push(arr[i]) 
        }
    }
    return newArr 
}

//3. Write a recursive function to determine whether all digits of the number are odd or not.
// Չեմ հասկանում ինչու չի աշխատում, կարծես թե ճիշտ եմ գրել

function recursionIsTrueOrFalse(number)
{
      let st = number.toString()
      for(let i = 0; i < st.length; i++)
    {
        if ((st.charAt(i) % 2) === 0)
          
    {
    return true;
    }
         if ((st.charAt(i) % 2) === 1)
   {
    return false;
   }
 
          return recursionIsTrueOrFalse(number);
    }
}

//4 Given an array of numbers. Write a recursive function to find its minimal positive element.
// Գիտեմ, որ չի աշխատում, փորձել եմ հնարավորինս գրել, այն ինչ հասկացել եմ

function findMinPositive(Array, n)
{
    if (n === 1 && Array[0] > 0)
    return Array[0]
}
else 
{
    for (let i = 0; i < Array.length; i++)
{
        if (Array[i] > 0)  
        return Math.min(Array[n - 1]
        findMinRec(Array, n - 1))
    }
  }


