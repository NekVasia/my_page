<?php

declare(strict_types = 1);

if (!empty($_REQUEST["number1"]) && empty($_REQUEST["number2"]) && empty($_REQUEST["operation"])) {
    $number1 = $_POST["number1"];
    $number2 = $_POST["number2"];
    $operation = $_POST["operation"];

    switch ($operation) {
        case "calculator__option-addition":
            $result = $number1 + $number2;
            break;
        case "calculator__option-subtraction":
            $result = $number1 - $number2;
            break;
        case "calculator__option-multiplication":
            $result = $number1 * $number2;
            break;
        case "calculator__option-division":
            $result = $number1 / $number2;
            break;
        default:
            $result = "Ошибка";
    }
}

echo("number1");
echo("number2");
echo("operation");






//function calculate() {
//let number1 = parseFloat(document.getElementById("number1").value);
//let number2 = parseFloat(document.getElementById("number2").value);
//let operation = document.getElementById("operation").value;
//let result;
//
//if (operation === "calculator__option-addition") {
//result = number1 + number2;
//} else if (operation === "calculator__option-subtraction") {
//result = number1 - number2;
//} else if (operation === "calculator__option-multiplication") {
//result = number1 * number2;
//} else if (operation === "calculator__option-division") {
//result = number1 / number2;
//}
//
//document.getElementById("result").textContent = result;
//openModal();