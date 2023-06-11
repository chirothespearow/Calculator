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
        return 'Divide By Zero';
    }
    return (a/b).toFixed(6);
}

function operate(firstNumber,secondNumber,operator){
    switch(operator){
        case '+':
            return(add(firstNumber,secondNumber));
        case '-':
            return(subtract(firstNumber,secondNumber));
        case '*':
            return(multiply(firstNumber,secondNumber));
        case '/':
            return(divide(firstNumber,secondNumber));
    }
}
// End of calculation functions

let firstNumber = 0;
let secondNumber = 0;
let operator = '';
console.log(operate(1,3,'/'));