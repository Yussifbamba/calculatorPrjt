const { Button } = require("bootstrap");

class Calculator{
    constructor(previousOperandtextElement,currentOperandtextElement){
        this.previousOperandtextElement = previousOperandtextElement;
        this.currentOperandtextElement = currentOperandtextElement;

    }
    clear(){
        this.currentOperand ='';
        this.previousOperand  ='';
        this.operation = undefined


    }

    delete(){

    }

    appendnumber(number){
        this.currentOperand = number;

    }

    chooseoperation(operation){

    }

    compute(){

    }

    updateDisplay(){
        this.currentOperandtextElement.innerText = this.currentOperand

    }
}


const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalButton = document.querySelectorAll('[data-equals]');
const deleteButton = document.querySelectorAll('[data-delete]');
const allClearButton = document.querySelectorAll('[data-all-clear]');
const previousOperandtextElement = document.querySelectorAll(
    '[data-previuos-operand]');
const currentOperandtextElement = document.querySelectorAll(
    '[data-current-operand]');

const calculator =  new Calculator(previousOperandtextElement, 
    currentOperandtextElement)

    numberButtons.forEach(button => {
        button.addEventListener('click', () =>{
            calculator.appendnumber(button.innerText)
            calculator.updateDisplay()
        })
    })