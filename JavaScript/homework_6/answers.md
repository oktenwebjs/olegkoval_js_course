# Відповіді на питання із домашнього завдання №6
(https://github.com/GrayHead/js_demos/blob/master/this_one_folder_that_you_need/lesson2_divide/tasks/task_2.txt)

> створити масив та вивести його в консоль:
- з 5 числових значень
- з 5 стічкових значень
- з 5 значень стрічкового, числового та булевого типу
```javascript
let numArray = [1, 2, 3, 4, 5];
let stringArray = ['apple', 'banana', 'cookie', 'doom', 'elephant'];
let mixedArray = [1, 2, 3, 4, 5, 'apple', 'banana', 'cookie', 'doom', 'elephant'];
console.log(numArray, stringArray, mixedArray);
```

> Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
```javascript
let myArr = [];
myArr[0] = 0;
myArr[1] = 1;
myArr[2] = 2;
myArr[3] = 3;
myArr[4] = 4;
myArr[5] = 5;
myArr[6] = 6;
myArr[7] = 7;
myArr[8] = 8;
myArr[9] = 9;
console.log(myArr);
```
> За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
```javascript
for (let i = 0; i < 10; i++) {
    document.write('<div>Current div have number '+ (i + 1) +'</div>');
}
```

> За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
```javascript
let i = 0;
while (i < 20) {
    i++;
    document.write('<h1>Current h1 have number '+ (i + 1) +'</h1>');
}
```

> За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
```javascript
let i = 0;
while (i < 20) {
    i++;
    document.write('<h1>Current h1 have index '+ i +'</h1>');
}
```

> Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
```javascript
let myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i in myArr){
    console.log(myArr[i]);
}
```

> Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
```javascript
let myArr = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 't', 'e'];

for (let i in myArr){
    console.log(myArr[i]);
}
```

> Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
```javascript
let myArr = [0, 1, 'c', 'dddd', 4, [1, 3, 5], 6, {a: 1}, 8, 'apple', 0.54];

for (let i in myArr){
    console.log(myArr[i]);
}
```

> Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
```javascript
let myArr = [0, 1, 'c', 'dddd', 4, true, 6, false, 8, 'apple', 0.54];

for (let i in myArr){
    if (typeof myArr[i] === 'boolean') {
        console.log(myArr[i]);
    }
}
```

> Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
```javascript
let myArr = [0, 1, 'c', 'dddd', 4, true, 6, false, 8, 'apple', 0.54];

for (let i in myArr){
    if (typeof myArr[i] === 'number') {
        console.log(myArr[i]);
    }
}
```

> Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
```javascript
let myArr = [0, 1, 'c', 'dddd', 4, true, 6, false, 8, 'apple', 0.54];

for (let i in myArr){
    if (typeof myArr[i] === 'string') {
        console.log(myArr[i]);
    }
}
```

> Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
```javascript
let myArr = [];
myArr[0] = 1;
myArr[1] = 22;
myArr[2] = 'aaaa';
myArr[3] = true;
myArr[4] = [1, 2, 3];
myArr[5] = false;
myArr[6] = {w: 12};
myArr[7] = false;
myArr[8] = 'banana';
myArr[9] = 3.14;

for (let i in myArr){
    console.log(myArr[i]);
}
```

> Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
```javascript
for (let i = 0; i < 10; i++) {
    console.log('Current step is '+ i);
    document.write('Current step is '+ i);
}
```

> Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
```javascript
for (let i = 0; i < 100; i++) {
    console.log('Current step is '+ i);
    document.write('Current step is '+ i);
}
```

> Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
```javascript
for (let i = 0; i < 100; i += 2) {
    console.log('Current step is '+ i);
    document.write('Current step is '+ i);
}
```

> Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
```javascript
for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log('Current step is '+ i);
        document.write('Current step is '+ i);
    }
}
```

> Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
```javascript
for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
        console.log('Current step is '+ i);
        document.write('Current step is '+ i);
    }
}
```

> Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
```javascript
for (let m = 0; m < 2; m++) {
    for (let s = 0; s < 60; s++) {
        console.log('Current time frame: '+ m +' min. and '+ s + 'sec.');
    }
}
```

> Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
```javascript
for (let h = 0; h < 2; h++) {
    for (let m = 0; m < 20; m++) {
        for (let s = 0; s < 60; s++) {
            console.log('Current time frame: '+ h +' hours '+ m +' min. and '+ s + 'sec.');
        }
    }
}
```

## Додатково
> Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
```javascript
let myArr = [ 'a', 'b', 'c'];
let word = '';

for (let i in myArr){
    word += myArr[i];
}
```

> Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
```javascript
let myArr = [ 'a', 'b', 'c'];
let word = '';
let i = 0;

while (typeof myArr[i] !== 'undefined'){
    word += myArr[i];
    i++;
}
```

> Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
```javascript
let myArr = [ 'a', 'b', 'c'];
let word = '';

for (const elm of myArr){
    word += elm;
}
```

> Дано масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
```javascript
let myArr = [ 'a', 'b', 'c'];

for (let i = 1; i <= 3; i++){
    myArr.push(i);
}
```

> Дано масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
```javascript
let myArr = [1, 2, 3];
myArr = myArr.reverse();
```

> Дано масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
```javascript
let myArr = [1, 2, 3];

myArr.push(4, 5, 6);
```

> Дано масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
```javascript
let myArr = [1, 2, 3];

myArr.unshift(4, 5, 6);
```

> Дано масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
```javascript
let myArr = ['js', 'css', 'jq'];

document.write(myArr.shift());
```

> Дано масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
```javascript
let myArr = ['js', 'css', 'jq'];

document.write(myArr.pop());
```

> Дано масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
```javascript
let myArr = [1, 2, 3, 4, 5];

myArr = myArr.slice(-2);
```

> Дано масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
```javascript
let myArr = [1, 2, 3, 4, 5];

myArr = myArr.slice(0, 2);
```

> Дано масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
```javascript
let myArr = [1, 2, 3, 4, 5];

myArr.splice(1, 2);
```

> Дано масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
```javascript
let myArr = [1, 2, 3, 4, 5];

myArr.splice(3, 0, 'a', 'b', 'c');
```

> Дано масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
```javascript
let myArr = [1, 2, 3, 4, 5];

myArr.splice(5, 0, 'e');
myArr.splice(3, 0, 'c');
myArr.splice(1, 0, 'a', 'b');
```

> Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
```javascript
let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let elm of myArr) {
    if (elm % 2 === 0) {
        console.log(elm);
    }
}
```
> Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
```javascript
let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let myArr2 = [];

for (let elm of myArr) {
    myArr2.push(elm);
}
```

> Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
```javascript
let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let myArr2 = [];

for (let elm of myArr) {
    myArr2.shift(elm);
}
```
