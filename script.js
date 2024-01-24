function calculate() {
    try {
        let result = eval(currentExpression);
        display.value = result;
        addToHistory(result);
        currentExpression = '';  // Сбросить текущее выражение после вычисления
    } catch (error) {
        display.value = 'Error';
        currentExpression = '';  // Сбросить текущее выражение при ошибке
    }
}
