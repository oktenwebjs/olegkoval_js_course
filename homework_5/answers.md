# Відповіді на питання із домашнього завдання №5
(Перша частина з https://github.com/GrayHead/js_demos/blob/master/this_one_folder_that_you_need/lesson1_divide/tasks/tasks_1)

> присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false Вывести каждую при помощи console.log , alert, document.write
```javascript
let hello = 'hello';
let owu = 'owu';
let com = 'com';
let ua = 'ua';
let num1= 1;
let num10= 10;
let num999 = -999;
let num123 = 123;
let numPi = 3.14;
let num2_7= 2.7;
let num16 = 16;
let boolT= true;
let boolF = false;

console.log(hello);
console.log(owu);
console.log(com);
console.log(ua);
console.log(num1);
console.log(num10);
console.log(num999);
console.log(num123);
console.log(numPi);
console.log(num2_7);
console.log(num16);
console.log(boolT);
console.log(boolF);

alert(hello);
alert(owu);
alert(com);
alert(ua);
alert(num1);
alert(num10);
alert(num999);
alert(num123);
alert(numPi);
alert(num2_7);
alert(num16);
alert(boolT);
alert(boolF);

document.write(hello);
document.write(owu);
document.write(com);
document.write(ua);
document.write(num1);
document.write(num10);
document.write(num999);
document.write(num123);
document.write(numPi);
document.write(num2_7);
document.write(num16);
document.write(boolT);
document.write(boolF);
```

> переопределить каждую переменную из задания 1 дав им произвольные значения Вывести каждую при помощи console.log , alert, document.write
```javascript
hello = 'aaa';
owu = 'bbb';
com = 'ccc';
ua = 'ddd';
num1 = 999;
num10 = 888;
num999 = 777;
num123 = 666;
numPi = 555;
num2_7= 444;
num16 = 333;
boolT= false;
boolF = true;

console.log(hello);
console.log(owu);
console.log(com);
console.log(ua);
console.log(num1);
console.log(num10);
console.log(num999);
console.log(num123);
console.log(numPi);
console.log(num2_7);
console.log(num16);
console.log(boolT);
console.log(boolF);

alert(hello);
alert(owu);
alert(com);
alert(ua);
alert(num1);
alert(num10);
alert(num999);
alert(num123);
alert(numPi);
alert(num2_7);
alert(num16);
alert(boolT);
alert(boolF);

document.write(hello);
document.write(owu);
document.write(com);
document.write(ua);
document.write(num1);
document.write(num10);
document.write(num999);
document.write(num123);
document.write(numPi);
document.write(num2_7);
document.write(num16);
document.write(boolT);
document.write(boolF);
```

> Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write
```javascript
const numPi = 3.14;
const accelerationIdx = 9.8;
const startFrom = 0;
const firstName = 'Oleg';
const lastName = 'Koval';
const country = 'Ukraine';

console.log(numPi);
console.log(accelerationIdx);
console.log(startFrom);
console.log(firstName);
console.log(lastName);
console.log(country);

alert(numPi);
alert(accelerationIdx);
alert(startFrom);
alert(firstName);
alert(lastName);
alert(country);

document.write(numPi);
document.write(accelerationIdx);
document.write(startFrom);
document.write(firstName);
document.write(lastName);
document.write(country);
```

> при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. Для фамилии имени и отчества создать разные переменные. Вывести каждую при помощи console.log , alert, document.write
```javascript
let firstName = prompt('What is your first name?');
let lastName = prompt('What is your last name?');
let middleName = prompt('What is your middle name?');

console.log(firstName); alert(firstName); document.write(firstName);
console.log(lastName); alert(lastName); document.write(lastName);
console.log(middleName); alert(middleName); document.write(middleName);
```

> Взять переменные из задания 4 и сконкатенировать их в одной переменной person.
```javascript
let person = firstName + ' ' + lastName + ' ' + middleName;
```

> Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.
Не зрозумiло, що потрiбно зробити. ???!!!

> при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.
```javascript
let num1 = +prompt('Input number 1');
let num2 = +prompt('Input number 2');
let num3 = +prompt('Input number 3');

console.log(num1);
console.log(num2);
console.log(num3);
```

> при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt. Сложить их между собой записав результат в переменную result и вывести в консоль браузера
```javascript
let num1 = parseInt(prompt('Input number 1'));
let num2 = parseInt(prompt('Input number 2'));
let num3 = parseInt(prompt('Input number 3'));
let num4 = parseInt(prompt('Input number 4'));

let result = num1 + num2 + num3 + num4;
console.log(result);
```

> при помощи prompt()  получить 3 числа с плавающей точекой. при помощи parseFloat привести их к соответсвующему типу. Сложить их между собой записав результат в переменную result и вывести в консоль браузера
```javascript
let num1 = parseFloat(prompt('Input float number 1'));
let num2 = parseFloat(prompt('Input float number 2'));
let num3 = parseFloat(prompt('Input float number 3'));

let result = num1 + num2 + num3;
console.log(result);
```

> при помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи Math.round Сложить их между собой записав результат в переменную  и вывести в консоль браузера
```javascript
let num1 = Math.round(prompt('Input float number 1'));
let num2 = Math.round(prompt('Input float number 2'));
let num3 = Math.round(prompt('Input float number 3'));

let result = num1 + num2 + num3;
console.log(result);
```

> при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу. Первое число - это число которое будут возводить в степень. Второе число - это число которое является степенью. При помощи Math.pow возвести первое число в степень второго числа.
```javascript
let num1 = parseInt(prompt('Input integer number 1'));
let num2 = parseInt(prompt('Input integer number 2'));

let result = Math.pow(num1, num2);
```

> При помощи оператора опредеоения типа typeof определить типы следующих переменных и вывести их в консоль let a = 100; let b = '100'; let c = true; let d = undefined;
```javascript
let a = 100; let b = '100'; let c = true; let d = undefined;

console.log(typeof a); console.log(typeof b); console.log(typeof c); console.log(typeof d);
```

> Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
 В одинаковых выражениях в задании не использовать два одинаковых оператора.
Каждое выражение вложить в свою переменную

* 5 ? 6 -> true
* 5 ? 6 -> false
* 5 ? 6 -> false
* 5 ? 6 -> false
* 10 ? 10 -> true
* 10 ? 10 -> true
* 10 ? 10 -> false
* 10 ? 10 -> false
* 10 ? 10 -> false
* 123 ? '123' -> false
* 123 ? '123' -> true

```javascript
let a = 5 < 6;
let b = 5 > 6;
let c = 5 === 6;
let d = 5 >= 6;
let e = 10 == 10;
let f = 10 === 10;
let g = 10 > 10;
let h = 10 < 10;
let i = 10 !== 10;
let j = 123 === '123';
let k = 123 == '123';
```

> Дополнительно:
- Посмотрев на следюующие выражения, скажите, каков будет вывод в консоль

* console.log(132 > 100 && 45 < 12 );
* console.log(34 > 33 && 23 < 90 );
* console.log(99 > 100 && 45 > 12 );
* console.log(132 > 100 || 45 < 12 );
* console.log(111 > 11 || 45 < 111 );
* console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );
* console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );
* console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );
* console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));
* console.log(!!'-1');
* console.log(!!-1);
* console.log(!!'0');
* console.log(!!'null');
* console.log(!!'undefined');
* console.log(!!(3/'owu'));
* console.log((111 > 11 || 45 < 111) ||  !!'0');
* console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));

```
false <- console.log(132 > 100 && 45 < 12 );
true <- console.log(34 > 33 && 23 < 90 );
false <- console.log(99 > 100 && 45 > 12 );
true <- console.log(132 > 100 || 45 < 12 );
true <- console.log(111 > 11 || 45 < 111 );
true <- console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );
true <- console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );
false <- console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );
true <- console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));
true <- console.log(!!'-1');
true <- console.log(!!-1);
true <- console.log(!!'0');
true <- console.log(!!'null');
true <- console.log(!!'undefined');
false <- console.log(!!(3/'owu'));
true <- console.log((111 > 11 || 45 < 111) ||  !!'0');
false <- console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));
```
