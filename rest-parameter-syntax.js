/**
 * To run this file in Gitpod, use the 
 * command node rest-parameter-syntax.js in the terminal
 */

// Regular function call 

const sumAll = (a, b, c) => a + b + c;
let sum = sumAll(1, 2, 3);
console.log('Sum 1: ', sum);

// Extra arguments are ignored

let sum2 = sumAll(1, 2, 3, 4, 5, 6);
console.log('Sum 2: ', sum2);

// Function using ...rest

const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c;
    for (let i of rest) {
        sum += i;
    }
    return sum;
}

let sum3 = sumRest(1, 2, 3, 4, 5, 6);
console.log('Sum 3: ', sum3)

//challenge:
//You will assign an array to a variable which will contain a copy of the array mixedLetters and 6 other letters.

//original data:
let mixedLetters = ['b', 'd', 'a', 'c', 'f', 'e'];

//moreMixedLetters is created using the spread operator ... to copy all elements from mixedLetters. 
//Then, we add the additional letters.
let moreMixedLetters = [...mixedLetters, 'h', 'k', 'g', 'j', 'i', 'l'];

//const updateSortReverse = (arr, ...letters) => {...} creates an arrow function named updateSortReverse 
//this takes two parameters: arr and the rest parameter letters. 
//This allows you to pass any number of arguments, and they will be collected into an array called letters
const updateSortReverse = (arr, ...letters) => {
//let combinedArray = [...arr, ...letters]; combines the elements from arr and letters into a new array called combinedArray
    let combinedArray = [...arr, ...letters];
//return combinedArray.sort().reverse(); sorts the array in ascending order using .sort(), then reverses it using .reverse().
    return combinedArray.sort().reverse();
};

//reverseSort is created by calling the updateSortReverse function. 
//pass in moreMixedLetters as the first argument and the string values 'n', 'm', 'o' as additional arguments.
let reverseSort = updateSortReverse(moreMixedLetters, 'n', 'm', 'o');

console.log(reverseSort);
console.log(mixedLetters);



