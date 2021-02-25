let displayValue = 0;

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2){
    return operator(num1, num2);
}

function test(){
    alert("working")
}

function updateDisplay (num){
    let displayValue = num;
    console.log(displayValue);
}


const numberButtons = document.getElementsByClassName("num");
Array.from(numberButtons).forEach(num => {
    num.addEventListener('click', test);
});

