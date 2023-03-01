"use strict";

/*Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.

Функция должна возвращать числовое значение.

Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.*/


function readNumber() {

    let a;

    do {
        a = prompt("Введите число", "");
    } while (!isFinite(a));

    if (a === null || a === '') return null;

    return +a;
}

alert(readNumber);