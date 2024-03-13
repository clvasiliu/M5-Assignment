// ADD A FUNCTION CALLED CALCULATE
function calculate(x, y, operation) {
    switch (operation) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            return x / y;
        default:
            // this case should be unreachable based off the operation input validation occuring below
            window.alert("INVALID OPERATION");
            return NaN;
    }
};

let again;
do {
    // COLLECT FIRST NUMBER FROM USER
    let inputX;
    do {
        inputX = parseInt(prompt("Input the first number."));
    } while (isNaN(inputX));

    // COLLECT SECOND NUMBER FROM USER
    let inputY;
    do {
        inputY = parseInt(prompt("Input the second number."));
    } while (isNaN(inputY));

    // COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
    let inputOperation = prompt("Input the operation (+,-,*,/) to perform.");
    while (inputOperation !== '+' && inputOperation !== '-' && inputOperation !== '*' && inputOperation !== '/') {
        window.alert(`${inputOperation} is an invalid operation. Please enter a valid operation.`);
        inputOperation = prompt("Input the operation (+,-,*,/) to perform.");
    }

    // CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
    let calculateResult = calculate(inputX, inputY, inputOperation);
    window.alert(`The result of the operation is [${inputX} ${inputOperation} ${inputY}] is ${calculateResult}`);

    do {
        again = prompt("Enter 'y' to run again 'n' to stop.")
        if (again === 'y') {
            again = true;
        } else if (again === 'n') {
            again = false;
        } else {
            again = null;
        }
    } while (again != true && again != false);
} while (again);