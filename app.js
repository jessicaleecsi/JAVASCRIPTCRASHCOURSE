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

function isLoggedInAndSubscribed (loggedIn, subscribed) {
    return (loggedIn === 'LOGGED_IN') || (subscribed === 'SUBSCRIBED')
        
}
console.log (isLoggedInAndSubscribed ('LOGGED_OUT', 'NOT_SUBSCRIBED'))

