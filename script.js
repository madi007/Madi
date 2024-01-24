let display = document.getElementById('display');
let historyList = document.getElementById('history-list');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        let result = eval(display.value);
        display.value = result;
        addToHistory(result);
    } catch (error) {
        display.value = 'Error';
    }
}

function saveResult() {
    addToHistory(display.value);
}

function addToHistory(result) {
    let listItem = document.createElement('li');
    listItem.textContent = result;
    historyList.appendChild(listItem);
}
