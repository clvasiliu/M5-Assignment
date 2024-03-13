//STEP 1
function halfNumber(number) {
    return number / 2;
}

const num0 = 5;
console.log(`Half of ${num0} is ${halfNumber(num0)}.`);

//STEP 2
function squareNumber(number) {
    return number ** 2;
}

const num1 = 3;
console.log(`The result of squaring the number ${num1} is ${squareNumber(num1)}.`)

//STEP 3
function percentOf(number1, number2) {
    return (number1 / number2) * 100;
}

const num2 = 2;
const num3 = 4;
console.log(`${num2} is ${percentOf(num2, num3)}% of ${num3}.`)

//STEP 4
function findModulus(number1, number2) {
    return number1 % number2;
}

let num4 = 4;
let num5 = 10
console.log(`${findModulus(num5, num4)} is the modulus of ${num4} and ${num5}.`)
