// Находим элементы для взаимодействия
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
// добавляем значение в переменную
const counter = document.querySelector('[data-counter]');

// отслеживаем действия на - и +
btnMinus.addEventListener('click', function () {
    if (parseInt(counter.innerText) > 1) {
        // счетчик > 1 для кнопки -
        counter.innerText = --counter.innerText;
    }
})
btnPlus.addEventListener('click', function () {
    counter.innerText = ++counter.innerText;
})


