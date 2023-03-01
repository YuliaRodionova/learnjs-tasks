"use strict";

/*
Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

Функция должна изменять принимаемый массив и ничего не возвращать.
*/


let arr = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (item < a || item > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}

filterRangeInPlace(arr, 3, 5);

console.log(arr); 