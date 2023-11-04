<?php

declare(strict_types=1);

$jsonData = file_get_contents('php://input');

// Преобразуем данные JSON в массив
$data = json_decode($jsonData, true);

if (empty($data["number1"]) || empty($data["number2"]) || empty($data["operation"])) {
    echo("Ошибка");
}

$number1 = $data["number1"];
$number2 = $data["number2"];
$operation = $data["operation"];

$result = match ($operation) {
    "calculator__option-addition" => $number1 + $number2,
    "calculator__option-subtraction" => $number1 - $number2,
    "calculator__option-multiplication" => $number1 * $number2,
    "calculator__option-division" => $number2 !== 0 ? $number1 / $number2 : "Ошибка",
    default => "Ошибка",
};

$response = ["result" => $result];

echo(json_encode($response));
