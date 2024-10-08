/* Исправьте код программы так, чтобы в консоль браузера выводился следующий результат выполнения: */

let student = "Илья"
let year = 2006
let age = 18
console.log('Студент:', student);
console.log('Год рождения:', year);
console.log('Возраст:', age);

// Вторая задача
// let milk = Number(prompt('Введите стоимость молока'))
// let coffee =Number(prompt('Введите стоимость кофе'))
// let apples =Number(prompt('Введите стоимость яблок'))
// let sum = milk + coffee + apples
// console.log(sum);

// Третья задача
let index = 0;
let runner1 ="Денис";
index++
console.log(index, runner1);

let runner2 ="Виктория"
index++
console.log(index, runner2);

let runner3 ="Антон";
index++
console.log(index, runner3);

let runner4 = "Лена"
index++
console.log(index, runner4);

let runner5 = "Никита"
index++
console.log(index, runner5);

// Задача 4
const currentYear = 2024; 
totalage = 0;
// Использую цикл for для многократного повторения
for( let i = 0; i<3; i++){
    let name = prompt("Введите имя пользователя"); // Запрашиваем имя
    let birthYear = Number(prompt("Введите год рождения")); // Запрашиваем год рождения и преобразуем в число
    let age = currentYear - birthYear; // Рассчитываем возраст
    console.log("Имя: " + name + ", Возраст: " + age);
}