function openModal() {
    document.getElementById("modal").style.display = "block"
}

function closeModal() {
    document.getElementById("modal").style.display = "none"
}

// document.getElementsByClassName("js-calculate")[0].addEventListener("click", function(event) {
//     calculate(event);
// });

const calculate = () => {

    const data = {
        "number1":document.getElementById("number1").value,
        "number2":document.getElementById("number2").value,
        "operation":document.getElementById("operation").value
    }

    fetch("scripts/calc.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })

        .then(response => response.json())
        .then(data => {
            document.getElementById("result").innerText = data.result;
        })
        .catch(error => {
            document.getElementById("result").innerText = "Ошибка";
        });

    openModal();
}

// Кнопка-переключатель класса

const toggleButton  = document.getElementById("dark-mode");
const element = document.getElementById("my__page");

toggleButton .addEventListener("click", function() {
    element.classList.toggle("dark");
    element.classList.toggle("light");
});
