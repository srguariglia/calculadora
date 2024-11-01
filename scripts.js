const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
let currentInput = "";
let operation = "";
let firstValue = "";

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const value = this.innerText;

        if(!isNaN(value) || value === ".") {
            currentInput += value;
            display.innerText = currentInput;
        } else if (value === "+" || value === "-" || value === "*" || value === "/") {
            operation = value;
            firstValue = currentInput;
            currentInput = "";
        } else if (value === "=") {
            switch(operation) {
                case "+":
                    currentInput = parseFloat(firstValue) + parseFloat(currentInput);
                    break;
                case "-":
                    currentInput = parseFloat(firstValue) - parseFloat(currentInput);
                    break;
                case "*":
                    currentInput = parseFloat(firstValue) * parseFloat(currentInput);
                    break;
                case "/":
                    currentInput = parseFloat(firstValue) / parseFloat(currentInput);
                    break;
                default:
                    break;
            }
            display.innerText = currentInput;
            operation = "";
            firstValue = "";
        }
    });
});
