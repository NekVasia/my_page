const button = document.getElementById('calculate');
function calculate() {
    var number1 = parseFloat(document.getElementById('number1').value);
    var number2 = parseFloat(document.getElementById('number2').value);
    var operation = document.getElementById('operation').value;
    var result;

    if (operation === 'calculator__option-addition') {
        result = number1 + number2;
    } else if (operation === 'calculator__option-subtraction') {
        result = number1 - number2;
    } else if (operation === 'calculator__option-multiplication') {
        result = number1 * number2;
    } else if (operation === 'calculator__option-division') {
        result = number1 / number2;
    }

    alert("Результат: " + result);
}