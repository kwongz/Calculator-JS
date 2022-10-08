class Calculator {
  constructor(previousOperandTextelement, currentOperandTextelement) {
    this.previousOperandTextelement = previousOperandTextelement;
    this.currentOperandTextelement = currentOperandTextelement;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  delete() {}

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') return
    if(this.previousOperand !== '') {
      this.compute()
      console.log('compute')
    }
    this.operation = operation;
    console.log(operation)
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  compute() {
    console.log(this.operation)
    let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
      case '+' :
        computation = prev + current
        break
      case '-' :
        computation = prev - current
        break
      case '*' :
        computation = prev * current
        break
      case '÷' :
        computation = prev / current
        break
      default:
        return 
    }
    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ''
  }

  updateDisplay() {
    this.currentOperandTextelement.innerText = this.currentOperand;
    this.previousOperandTextelement.innerText = this.previousOperand;
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationsButtons = document.querySelectorAll("[data-operation]");
const equalsButtons = document.querySelector("[data-equal]");
const deleteButtons = document.querySelector("[data-delete]");
const allClearButtons = document.querySelector("[data-all-clear]");
const previousOperandTextelement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextelement = document.querySelector(
  "[data-current-operand]"
);

const calculator = new Calculator(
  previousOperandTextelement,
  currentOperandTextelement
);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalsButtons.addEventListener('click', button => {
  calculator.compute();
  calculator.updateDisplay();
})

allClearButtons.addEventListener('click', button => {
  calculator.clear();
  calculator.updateDisplay();
})

// notes

