/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(add1, add2){
    return add1 + add2;
}

function addNumbers(){
    let add1 = Number(document.querySelector('#add1').value);
    let add2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(add1, add2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
let subtract = function(subtract1, subtract2){
    return subtract1 - subtract2;
}

let subtractNumbers = function(){
    let sub1 = Number(document.querySelector('#subtract1').value);
    let sub2 = Number(document.querySelector('#subtract2').value);
    let difference = subtract(sub1, sub2);

    document.querySelector('#difference').value = difference;
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
let multiply = (factor1, factor2) => factor1 * factor2;

let multiplyNumbers = () => {
    let factor1 = Number(document.querySelector("#factor1").value);
    let factor2 = Number(document.querySelector('#factor2').value);
    let product = multiply(factor1, factor2);

    document.querySelector('#product').value = product;
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */
function divide(dividend, divisor){
    return dividend/divisor;
}

let divideNumbers = () => {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    let quotient = divide(dividend, divisor);

    document.querySelector('#quotient').value = quotient;
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);


/* Decision Structure */

let date = new Date();
let currentYear = date.getFullYear();

document.querySelector('#year').textContent = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.getElementById('array').textContent = numArray;


/* Output Odds Only Array */
let odd = numArray.filter(num => num % 2 === 1);
document.querySelector('#odds').textContent = odd;


/* Output Evens Only Array */
let even = numArray.filter(num => num % 2 === 0);
document.querySelector('#evens').textContent = even;

/* Output Sum of Org. Array */
let sumNum = numArray.reduce((sum, number) => sum+number);
document.querySelector('#sumOfArray').textContent = sumNum;

/* Output Multiplied by 2 Array */
let multiplyNum = numArray.map((num)  => num * 2);
document.querySelector('#multiplied').textContent = multiplyNum;

/* Output Sum of Multiplied by 2 Array */
let sumofMultiplied = multiplyNum.reduce((sum, num) => sum + num);
document.querySelector('#sumOfMultiplied').textContent = sumofMultiplied;

