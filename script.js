let display = document.getElementById('display');
let historyList = document.getElementById('history-list');
let currentExpression = '';

function appendToDisplay(value) {
    display.value += value;
    currentExpression += value;
}

function clearDisplay() {
    display.value = '';
    currentExpression = '';
}

function calculate() {
    try {
        let result = math.evaluate(currentExpression);
        if (result === undefined || isNaN(result)) {
            throw new Error("Invalid expression");
        }
        display.value = result;
        addToHistory(result);
        currentExpression = '';  // Сбросить текущее выражение после вычисления
    } catch (error) {
        display.value = 'Error';
        currentExpression = '';  // Сбросить текущее выражение при ошибке
    }
}

function addToHistory(result) {
    let listItem = document.createElement('li');
    listItem.textContent = result;
    historyList.appendChild(listItem);
}
