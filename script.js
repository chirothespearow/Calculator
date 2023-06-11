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

function removePress(e){
    this.classList.remove('press');
}
function removeHold(e){
    this.classList.remove('hold');
}
const numbers = document.querySelectorAll('.number');
numbers.forEach(i =>
    i.addEventListener('click',function(e){
        if(document.querySelector('.display').textContent.length >9 && !operator){return;}
        if(document.querySelector('.display').textContent === 'NaN'){
            document.querySelector('.display').textContent = '0';
        }
        i.classList.add('press');
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

numbers.forEach(key => key.addEventListener('transitionend',removePress));
//Operator functionality

const operators = document.querySelectorAll('.operator');
operators.forEach(j => j.addEventListener('click',function(e){
    if(document.querySelector('.display').textContent === 'NaN'){
        return;
    }
    if(j.textContent === '='){
        if(firstNumber && secondNumber && operator){
            j.classList.add('hold');
            let display = document.querySelector('.display');
            display.textContent = parseFloat(operate(+firstNumber,+secondNumber,operator));
            if(display.textContent === 'NaN'){
                firstNumber = '';
            }
            else{
                firstNumber = display.textContent;
            }
            activeOperator= !activeOperator;
            operator = '';
            secondNumber = '';
            firstInput = true;
            currentButton.classList.remove('hold');
            document.querySelector('.dot').disabled = false;
        }
    }

    else{
        if(currentButton){currentButton.classList.remove('hold');}
        document.querySelector('.dot').disabled = false;
        j.classList.add('hold');
        operator = j.textContent;
        firstInput = !firstInput;
        currentButton = j;  //for highlighting purposes

    }
}))

document.querySelector('.assignment').addEventListener('transitionend',removeHold);

//Other button functionalities

//reset
function reset(e){
    if(currentButton){currentButton.classList.remove('hold'); }
    firstNumber = '';
    secondNumber = '';
    operator = '';
    document.querySelector('.display').textContent = 0;
}

const clear = document.querySelector('.clear');
clear.addEventListener('click',reset);

//sign

function changeSign(e){
    document.querySelector('.display').textContent *= -1;
    if(firstInput){
        firstNumber *= -1; 
    }
    else{
        secondNumber*=-1;
    }
}

const sign = document.querySelector('.sign');
sign.addEventListener('click',changeSign);


//percent
function percentage(e){
    document.querySelector('.display').textContent *= 0.01;
    if(firstInput){
        firstNumber *= .01; 
    }
    else{
        secondNumber*=.01;
    }
}

const percent = document.querySelector('.percent');
percent.addEventListener('click',percentage);


//highlight
const misc = document.querySelectorAll('.top-button');
misc.forEach(key => key.addEventListener('click',function(){
    key.classList.add('press');
}))

misc.forEach(key => key.addEventListener('transitionend',function(){
    key.classList.remove('press');
}))