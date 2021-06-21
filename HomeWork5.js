//task 1

function theNewArray(arr) {
    let evenArray = []
    let oddArray = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        evenArray.push(arr[i])
      } else {
        oddArray.push(arr[i])
      }
    }
  
    let EvenAndOdd = {
      evenArray,
      oddArray
    }
  
    return EvenAndOdd
  }


//task 2 
//I know this is not a fair solution, but I knew about this method before solving this example.


let sentance = "“This is some text."
let newSent = sentance.replace(/is/g, '')
alert(newSent)


//task 4


function  printUnique(arr) {
    let NewArray = []
    for (let i = 0; i < arr.length; i++)
    {
        let j
        for (j = 0; j < i; j++)
           if (arr[i] == arr[j])
               break;
        if (i == j)
        {
            NewArray.push(arr[i])
        }
    }
    return NewArray
}


//task 5  
//This code doesn't work, but I think the logic is correct

let str1 = "The results are not recorded yet"
let str2 = "t"

for (let i = 0; i < str1.length; i++) {
    if (str1[i] === str2) {

       str1[i] === "w"
    }
}
return str1