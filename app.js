function addition (num1, num2){
    return num1 + num2

}

console.log(addition (3,5))

function multiplication (num1, num2, num3) {
    return num1 * (num2 * num3)
}
console.log (multiplication (2, 60, 60))

function perimeter (num1, num2) {
    return (num1 * 2) + (num2 * 2)
}
console.log (perimeter (6,7))

function calcAreaOfTriangle(base, height) {
    return 1/2 * (base * height)
}
console.log (calcAreaOfTriangle (20,20)) 

function appendFrontend (string) {
    return string + 'Frontend'
}
console.log (appendFrontend ('Apple'))

function sumGreaterThan100 (num1, num2) {
   return num1 + num2 > 100 
}
console.log (sumGreaterThan100 (50, 51))

function lessThanOrEqualToZero (num1) {
    return num1 <= 0;
}
console.log (lessThanOrEqualToZero (3))

function oppositeBoolean (bool) {
return !bool;
}
console.log (oppositeBoolean (false))

function isNotZero (num) {
    return num !== 0
}
console.log (isNotZero (5))
console.log (isNotZero (0))

function calcRemainder (num1, num2) {
    return num1 % num2;
}
console.log (calcRemainder (9,8))

function isOdd (num) {
    return num % 2 !== 0;
}
console.log (isOdd (5))

function booleanInteger (num) {
return num % 2 === 0 ? 1 : -1;
}
console.log (booleanInteger (5))

function isLoggedInAndSubscribed (loggedIn, subscribed) {
    return (loggedIn === 'LOGGED_IN') && (subscribed === 'SUBSCRIBED')
        
}
console.log (isLoggedInAndSubscribed ('LOGGED_IN', 'SUBSCRIBED'))

function isLoggedInOrSubscribed (loggedIn, subscribed) {
    return (loggedIn === 'LOGGED_IN') || (subscribed === 'SUBSCRIBED')
        
}
console.log (isLoggedInOrSubscribed ('LOGGED_OUT', 'NOT_SUBSCRIBED'))

//* MEDIUM SECTION *//


function falsyOrTruthy (elem1, elem2) {
    return !elem1 ? elem1 : elem2;
}
console.log (falsyOrTruthy (0,500))

function arrLength (arr) {
    return arr.length;
}
console.log (arrLength ([1,2,3,4]))

function arrLength (arr) {
    return arr[arr.length-1];
}
console.log (arrLength ([0,1,2,3]));

function arrSum (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; ++i) {
        sum = sum + arr[i];
    }
    return sum;
}

console.log (arrSum ([2,2,2]))

function progressiveSum (num) {
 let sum = 0;
 for (let i = 1; i <= num; ++i) {
    sum = sum + i;
 }
 return sum;
}
console.log (progressiveSum (3));

function calcTime (seconds) {
 let timerMinutes = Math.floor(seconds/60);
 let timerSeconds = seconds % 60;

 if (timerMinutes.toString().length === 1) {
    timerMinutes = '0' + timerMinutes
 }


 return timerMinutes + ':' + timerSeconds;
}


console.log (calcTime (70));

function getMax (arr) {
    let max = arr [0];
for (let i = 1; i < arr.length; ++i) {
if (arr[i] > max) {
    max = arr [i];
}
}
return max;
}

console.log (getMax ([-100,-200,-300]));


function reverseString (str) {
    let reversedString = '';
for (let i = 0; i < str.length; ++i) {
    reversedString = str[i] + reversedString;
}
return reversedString;
}
console.log (reverseString ('abc'));


function reverseString (str) {
    let reversedString = '';
for (let i = str.length - 1; i >= 0; --i) {
  reversedString += str[i];
}
return reversedString;
}
console.log (reverseString ('abc'));



function reverseString (str) {
return str.split('').reverse().join('');
}
console.log (reverseString ('abc'));



function convertToZeros (arr) {
for (let i = 0; i < arr.length; ++i) {
    arr [i] =0
}
return arr;
}
console.log (convertToZeros ([1,2,3,4,5]))


function convertToZeros (arr) {
return new Array(5).fill(0);
}

console.log (convertToZeros ([1,2,3,4,5]))

function convertToZeros (arr) {
return arr.map(elem => 0);
}
console.log (convertToZeros ([1,2,3,4,5]))


function removeApples (arr) {
    let noApples = []
for (let i = 0; i < arr.length; ++i) {
    if (arr[i] !== 'Apple') {
        noApples.push(arr[i]);
            }
            }
            return noApples;
}
console.log (removeApples(['Banana', 'Orange', 'Apple']))


function removeApples (arr) {
    return arr.filter (elem => elem !== 'Apple')
}
console.log (removeApples(['Banana', 'Orange', 'Apple']))

function filterOutFalsy (arr) {
    return arr.filter (elem => !!elem === true )
}
console.log (filterOutFalsy(['Banana', 'Orange', 'Apple']))

function filterOutFalsy (arr) {
    let truthyArr = [];
    for (let i = 0; i < arr.length; ++i) {
        if (!!arr[i] === true) {
            truthyArr.push(arr[i]);
        }
    }
    return truthyArr;
}
console.log (filterOutFalsy(['Banana', 'Orange', 'Apple']))


function convertToBoolean (arr) {
return arr.map(elem => !!elem)
}
console.log (convertToBoolean ([500,0,"David","",[]]))