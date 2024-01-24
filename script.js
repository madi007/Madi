let display = document.getElementById('display');
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
        let result = Function('"use strict"; return (' + currentExpression + ')')();
        display.value = result;
        addToHistory(result);
        currentExpression = '';  // Сбросить текущее выражение после вычисления
    } catch (error) {
        display.value = 'Error';
        currentExpression = '';  // Сбросить текущее выражение при ошибке
    }
}

function saveResult() {
    addToHistory(display.value);
}

function addToHistory(result) {
    let historyList = document.getElementById('history-list');
    let listItem = document.createElement('li');
    listItem.textContent = result;
    historyList.appendChild(listItem);
}
