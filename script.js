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
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  compute() {}

  updateDisplay() {
    this.currentOperandTextelement.innerText = this.currentOperand;
    this.previousOperandTextelement.innerText = this.previousOperand;
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationsButtons = document.querySelectorAll("[data-operation]");
const equalsButtons = document.querySelector("[data-equals]");
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
