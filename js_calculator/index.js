function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendValue(value) {
    document.getElementById('display').value += value;
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.value);
        if (result === Infinity || result === -Infinity) {
            display.value = "Error: Division by 0";
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = "error";
    }
}