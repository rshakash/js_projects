let main = document.querySelector('main');
let display = document.querySelector('.display');

//store previous number, and if more than one operation then store calculated number 
let firstNumber = 0;
//current number
let secondNumber = 0;
//store operation
let operation = "";


main.addEventListener('click', (e) => {
    if (e.target.classList.contains('op')){
        handleOperations(e.target.value);
    } else if (e.target.classList.contains('number')){
        if(display.innerHTML == "0"){
            display.innerHTML = e.target.value;
        } else {
            display.innerHTML += e.target.value;
        }
    }
});

const handleOperations = (value) => {
    switch (value){
        case "C":
            display.innerHTML = "0";
            firstNumber = 0;
            secondNumber = 0;
            operation = "";
            break;
        case "=":
            handleEqualsto();
            break;
        case "+":
            handlePlus();
            break;
        case "-":
            handleMinus();
            break;
        case "*":
            handleMultiply();
            break;
        case "/":
            handleDivide();
            break;
    }
}

const handleMiddleOperations = (firstNumber, secondNumber, operation) => {
    let result;
    switch (operation){
        case "+":
            result = firstNumber + secondNumber;
            break;
        case "-":
            result = firstNumber - secondNumber;
            break;
        case "*":
            result = firstNumber * secondNumber;
            break;
        case "/":
            if (secondNumber == 0){
                result = "Cannot divide by zero";
            } else {
                result = firstNumber / secondNumber;
            }
            break;
    }
    
    display.innerHTML = 0;
    secondNumber = 0;
    return result
}

const handlePlus = () => {
    if (firstNumber == 0){
        operation = "+";
        firstNumber = parseInt(display.innerHTML);
        display.innerHTML = "0";
    } else {
        secondNumber = parseInt(display.innerHTML);
        firstNumber = handleMiddleOperations(firstNumber, secondNumber, operation);
        operation = "+";
    }
}

const handleMinus = () => {
    if (firstNumber == 0){
        operation = "-";
        firstNumber = parseInt(display.innerHTML);
        display.innerHTML = "0";
    } else {
        secondNumber = parseInt(display.innerHTML);
        firstNumber = handleMiddleOperations(firstNumber, secondNumber, operation);
        operation = "-";
    }
}

const handleMultiply = () => {
    if (firstNumber == 0){
        operation = "*";
        firstNumber = parseInt(display.innerHTML);
        display.innerHTML = "0";
    } else {
        secondNumber = parseInt(display.innerHTML);
        firstNumber = handleMiddleOperations(firstNumber, secondNumber, operation);
        operation = "*";
    }
}

const handleDivide = () => {
    if (firstNumber == 0){
        operation = "/";
        firstNumber = parseInt(display.innerHTML);
        display.innerHTML = "0";
    } else {
        secondNumber = parseInt(display.innerHTML);
        firstNumber = handleMiddleOperations(firstNumber, secondNumber, operation);
        operation = "/";
    }
}

const handleEqualsto = () => {
    secondNumber = parseInt(display.innerHTML);
    firstNumber = handleMiddleOperations(firstNumber, secondNumber, operation);
    display.innerHTML = firstNumber;
    firstNumber = 0;
    operation = "";
}