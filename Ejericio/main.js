// Variables para almacenar los valores y la operación actual
let currentOperand = '';
let previousOperand = '';
let operation = undefined;

// Obtener el campo de entrada (pantalla) de la calculadora
const display = document.getElementById('display');

// Función para agregar un número a la pantalla
function appendNumber(number) {
    if (number === '.' && currentOperand.includes('.')) return;
    currentOperand = currentOperand.toString() + number.toString();
    updateDisplay();
}

// Función para seleccionar una operación (suma, resta, multiplicación, división)
function chooseOperation(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        compute();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
}

// Función para calcular el resultado
function compute() {
    let result;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    currentOperand = result;
    operation = undefined;
    previousOperand = '';
    updateDisplay();
}

// Función para limpiar la pantalla
function clearDisplay() {
    currentOperand = '';
    previousOperand = '';
    operation = undefined;
    updateDisplay();
}

// Función para actualizar la pantalla de la calculadora
function updateDisplay() {
    display.value = currentOperand;
}
