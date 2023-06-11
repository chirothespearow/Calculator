function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    if(b===0){
        return 'Error';
    }
    if(a%b === 0){
        return a/b;
    }
    let len = (a/b + '').length;
    if (len>9){
        return (a/b).toFixed(6);
    }
    else{
        return (a/b).toFixed(len-2);
    }    
}



function operate(firstNumber,secondNumber,operator){
    switch(operator){
        case '+':
            return(add(firstNumber,secondNumber));
        case '-':
            return(subtract(firstNumber,secondNumber));
        case '×':
            return(multiply(firstNumber,secondNumber));
        case '÷':
            return(divide(firstNumber,secondNumber));
    }
}
// End of calculation functions

let firstNumber = '';
let secondNumber = '';
let operator = '';

let firstInput = true;
let currentButton = null;
let activeOperator = false;
// Adding buttons functionality

//Number functionality
const numbers = document.querySelectorAll('.number');
numbers.forEach(i =>
    i.addEventListener('click',function(e){
        if(firstInput){
            firstNumber+=i.textContent;
            document.querySelector('.display').textContent = (firstNumber);
        }
        else{
            secondNumber+=i.textContent;
            document.querySelector('.display').textContent = (secondNumber);
        }
        
        if(i.textContent === '.'){
            i.disabled = true;
        }
    }))

//Operator functionality

const operators = document.querySelectorAll('.operator');
operators.forEach(j => j.addEventListener('click',function(e){
    if(j.textContent === '='){
        if(firstNumber && secondNumber && operator){
            let display = document.querySelector('.display');
            display.textContent = parseFloat(operate(+firstNumber,+secondNumber,operator));
            // if error, do something
            activeOperator= !activeOperator;
            //
            firstNumber = display.textContent;
            operator = '';
            secondNumber = '';
            firstInput = true;
        }
    }

    else{
        operator = j.textContent;
        firstInput = !firstInput;
        currentButton = j;  //for highlighting purposes

    }
}))