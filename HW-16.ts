// Задание 1: Функция приветствия
function greetUser(name: string): void {
    console.log(`Привет, ${name}!`);
}

// Пример вызова
greetUser("Эльмира");

// Задание 2: Типизация функции с объектом в качестве параметра
interface Person {
    name: string;
    age: number;
    city: string;
}

function printPersonInfo(person: Person): void {
    console.log(`Имя: ${person.name}, Возраст: ${person.age}, Город: ${person.city}`);
}

// Пример вызова
const person: Person = { name: "Алина", age: 25, city: "Харьков" };
printPersonInfo(person);

// Задание 3: Простая типизация для числового параметра
function squareNumber(num: number): number {
    return num * num;
}

// Пример вызова
const result = squareNumber(5);
console.log(result); // 25

// Задание 4: Типизация функции с boolean
function isEven(num: number): boolean {
    return num % 2 === 0;
}

// Пример вызова
const check = isEven(4);
console.log(check); // true

// Задание 5: Создание интерфейса для объекта
interface Student {
    name: string;
    grade: number;
}

function printStudentInfo(student: Student): void {
    console.log(`Студент: ${student.name}, Оценка: ${student.grade}`);
}

// Пример вызова
const student: Student = { name: "Ирина", grade: 4.5 };
printStudentInfo(student);

// Задание 6: Функция с типом `void`
function logMessage(message: string): void {
    console.log(message);
}

// Пример вызова
logMessage("Это сообщение будет выведено в консоль.");
