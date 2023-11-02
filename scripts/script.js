function openModal() {
    document.getElementById("modal").style.display = "block"
}

function closeModal() {
    document.getElementById("modal").style.display = "none"
}

function calculate() {
    // let number1 = parseFloat(document.getElementById("number1").value);
    // let number2 = parseFloat(document.getElementById("number2").value);
    // let operation = document.getElementById("operation").value;
    // let result;
    //
    // if (operation === "calculator__option-addition") {
    //     result = number1 + number2;
    // } else if (operation === "calculator__option-subtraction") {
    //     result = number1 - number2;
    // } else if (operation === "calculator__option-multiplication") {
    //     result = number1 * number2;
    // } else if (operation === "calculator__option-division") {
    //     result = number1 / number2;
    // }
    //
    // document.getElementById("result").textContent = result;
    openModal();
}

// Кнопка-переключатель класса

const toggleButton  = document.getElementById("dark-mode");
const element = document.getElementById("my__page");

toggleButton .addEventListener("click", function() {
    element.classList.toggle("dark");
    element.classList.toggle("light");
});
