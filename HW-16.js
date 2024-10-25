// Задание 1: Функция приветствия
function greetUser(name) {
    console.log("\u041F\u0440\u0438\u0432\u0435\u0442, ".concat(name, "!"));
}
// Пример вызова
greetUser("Эльмира");
function printPersonInfo(person) {
    console.log("\u0418\u043C\u044F: ".concat(person.name, ", \u0412\u043E\u0437\u0440\u0430\u0441\u0442: ").concat(person.age, ", \u0413\u043E\u0440\u043E\u0434: ").concat(person.city));
}
// Пример вызова
var person = { name: "Алина", age: 34, city: "Харьков" };
printPersonInfo(person);
// Задание 3: Простая типизация для числового параметра
function squareNumber(num) {
    return num * num;
}
// Пример вызова
var result = squareNumber(5);
console.log(result); // 25
// Задание 4: Типизация функции с boolean
function isEven(num) {
    return num % 2 === 0;
}
// Пример вызова
var check = isEven(4);
console.log(check); // true
function printStudentInfo(student) {
    console.log("\u0421\u0442\u0443\u0434\u0435\u043D\u0442: ".concat(student.name, ", \u041E\u0446\u0435\u043D\u043A\u0430: ").concat(student.grade));
}
// Пример вызова
var student = { name: "Ирина", grade: 4.5 };
printStudentInfo(student);
// Задание 6: Функция с типом `void`
function logMessage(message) {
    console.log(message);
}
// Пример вызова
logMessage("Это сообщение будет выведено в консоль.");
