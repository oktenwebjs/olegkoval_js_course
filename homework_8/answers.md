# Домашньє завдання №8
(https://github.com/GrayHead/js_demos/blob/master/this_one_folder_that_you_need/lesson4_divide/tasks/task4.txt)

> створити функцію яка виводить масив
```javascript
function logArray(arr)
{
    console.log(arr);
}
```

> створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
```javascript
function fillArray(arr)
{
    let rndIndex = parseInt(Math.random() * 10);
    for (let i = 0; i < rndIndex; i++) {
        arr.push(Math.random() * i);
    }
    logArray(arr);
}
```

> створити функцію яка приймає три числа та виводить та повертає найменьше.
```javascript
function getMin(a, b, c)
{
    let minNumber = (a > b) ? (b > c ? c : b) : (a > c ? c : a);

    console.log(minNumber);
    return minNumber;
}
```

> створити функцію яка приймає три числа та виводить та повертає найбільше.
```javascript
function getMax(a, b, c)
{
    let maxNumber = (a < b) ? (b < c ? c : b) : (a < c ? c : a);

    console.log(maxNumber);
    return maxNumber;
}
```

> створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
```javascript
function getMinShowMax(...nums)
{
    let minNumber = maxNumber = nums.shift();

    for (const num of nums) {
        if (num < minNumber) {
            minNumber = num;
        } else if (num > maxNumber) {
            maxNumber = num;
        }
    }

    console.log(maxNumber);

    return minNumber;
}
```

> створити функцію яка виводить масив
```javascript
function showArray(arr)
{
    console.log(arr);
}
```


> створити функцію яка повертає найбільше число з масиву
```javascript
function getMaxNumber(nums)
{
    let maxNumber = nums.shift();

    for (const num of nums) {
        if (num > maxNumber) {
            maxNumber = num;
        }
    }

    return maxNumber;
}
```

> створити функцію яка повертає найменьше число з масиву
```javascript
function getMinNumber(nums)
{
    let minNumber = nums.shift();

    for (const num of nums) {
        if (num < minNumber) {
            minNumber = num;
        }
    }

    return minNumber;
}
```

> створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
```javascript
function getSumArray(arr)
{
    let result = arr.reduce((sum, currValue) => sum + currValue);

    return result;
}
```

> створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
```javascript
function getArithmeticMean(arr)
{
    let result = arr.reduce((sum, currValue) => sum + currValue) / arr.length;

    return result;
}
```

> Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
```javascript
function getObjectsNumber(arr)
{
    let result = 0;

    for (const elm of arr) {
        result += typeof elm === 'object' ? 1 : 0;
    }

    return result;
}
```


> Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
```javascript
function getObjectsPropertiesNumber(arr)
{
    let result = 0;

    for (const elm of arr) {
        result += typeof elm === 'object' ? Object.keys(elm).length : 0;
    }

    return result;
}
```

> створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
  Приклад
  [1,2,3,4]
  [2,3,4,5]
  результат
  [3,5,7,9]

```javascript
function sumArraysElements(arr1, arr2)
{
    let result = [];

    if (arr1.lenth === arr2.length) {
        for (let i in arr1) {
            result[i] = arr1[i] + arr2[i];
        }
    } else {
        console.log('Arrays are not equal');
    }

    return result;
}
```

> *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
```javascript
function replaceElement(arr, i)
{
    if (i < (arr.length -1)) {
        arr[i + 1] = arr[i] + (arr[i] = arr[i + 1]) - arr[i + 1];
    } else {
        console.log('Element/Next element index is out of array');
    }

    return arr;
}
```

> *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
Двожина масиву від 2 до 100
Приклад
[1,0,6,0,3] => [1,6,3,0,0]
[0,1,2,3,4] => [1,2,3,4,0]
[0,0,1,0]   => [1,0,0,0]

```javascript
function moveZeroElements(arr)
{
    let zeroElm = [];
    let result = [];
    for (let i in arr) {
        if (arr[i] === 0) {
            zeroElm.push(0);
        } else {
            result.push(arr[i]);
        }
    }

    return result.concat(zeroElm);
}
```


## Створити функцію яка :
> Додає в боді блок з текстом "Hello owu"
```javascript
function addToBody(textMsg)
{
    let div = document.createElement('div');
    div.innerText = textMsg;
    document.body.appendChild(div)
}
```

> Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
```javascript
function addToBody(textMsg, elementType)
{
    let elm = document.createElement(elementType);
    elm.innerText = textMsg;
    document.body.appendChild(elm)
}
```

> приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
```javascript
function addToBody(cars, elementId)
{
    let elm = document.getElementById(elementId);
    if (elm) {
        let ul = document.createElement('ul');
        for (const car of cars) {
            let carElm = document.createElement('li');
            carElm.innerText = car.model +', '+ car.year +', '+ car.power +', '+ car.color;
            ul.appendChild(carElm);
        }

        elm.appendChild(ul);
    }
}
```

> приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
Для кожної властивості створити всередені блока автомоблія свій блок
```javascript
function addToBody(cars, elementId)
{
    let elm = document.getElementById(elementId);
    if (elm) {
        let ul = document.createElement('ul');
        for (const car of cars) {
            let modelElm = document.createElement('div');
            modelElm.innerText = 'Model: '+ car.model;

            let yearElm = document.createElement('div');
            yearElm.innerText = 'Year: '+ car.year;

            let powerElm = document.createElement('div');
            powerElm.innerText = 'Power: '+ car.power;

            let colorElm = document.createElement('div');
            colorElm.innerText = 'Color: '+ car.color;

            let carElm = document.createElement('li');
            carElm.appendChild(modelElm);
            carElm.appendChild(yearElm);
            carElm.appendChild(powerElm);
            carElm.appendChild(colorElm);

            ul.appendChild(carElm);
        }

        elm.appendChild(ul);
    }
}
```
