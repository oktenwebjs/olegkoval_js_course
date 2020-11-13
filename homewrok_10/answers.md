# Домашньє завдання №10
(https://github.com/GrayHead/js_demos/blob/master/this_one_folder_that_you_need/lesson6/tasks/task)


> создать массив с 20 числами.
- при помощи метода sort и колбека  отсортировать массив.
- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
- при помощи filter получить числа кратные 3
- при помощи filter получить числа кратные 10
- перебрать (проитерировать) массив при помощи foreach()
- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

```javascript
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11];

// при помощи метода sort и колбека  отсортировать массив.
arr.sort((a, b) => a - b);

// при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
arr.sort((a, b) => b - a);

// при помощи filter получить числа кратные 3
let filteredArr3 = arr.filter(x => x % 3 === 0);

// при помощи filter получить числа кратные 10
let filteredArr10 = arr.filter(x => x % 10 === 0);

// перебрать (проитерировать) массив при помощи foreach()
arr.forEach(el => console.log(el));

// перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
let mappedArr = arr.map(el => el * 3);
```


> создать массив со словами на 15-20 элементов.
- отсортировать его по алфавиту в восходящем порядке.
- отсортировать его по алфавиту  в нисходящем порядке.
- отфильтровать слова длиной менее 4х символов
- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

```javascript
let wordsArr = ['track', 'limit', 'nose', 'cinema', 'user', 'definite', 'biology', 'outfit', 'proper', 'crime', 'cut', 'responsibility', 'jaw', 'glance', 'appendix', 'econobox', 'sermon', 'bracket', 'inquiry', 'banner'];

// отсортировать его по алфавиту в восходящем порядке.
wordsArr.sort((a, b) => a > b ? 1 : a < b ? -1 : 0);

// отсортировать его по алфавиту в восходящем порядке.
wordsArr.sort((a, b) => a < b ? 1 : a > b ? -1 : 0);

// отфильтровать слова длиной менее 4х символов
let filteredWords = wordsArr.filter(el => el.length > 3);

// перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
let mapperWords = wordsArr.map(el => el + '!');
```


> Все робити через функції масивів (foreach, map ...тд)
Дан масив :
let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
- відсортувати його за  віком (зростання , а потім окремо спадання)
- відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
- пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
- відсортувати його за індентифікатором

```javascript
// відсортувати його за  віком (зростання , а потім окремо спадання)
users.sort((a, b) => a.age > b.age ? 1 : a.age < b.age ? -1 : 0);
users.sort((a, b) => a.age < b.age ? 1 : a.age > b.age ? -1 : 0);

// відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
users.sort((a, b) => a.name.length > b.name.length ? 1 : a.name.length < b.name.length ? -1 : 0);
users.sort((a, b) => a.name.length < b.name.length ? 1 : a.name.length > b.name.length ? -1 : 0);

// пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор 
// (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
let newUsers = users.map(el => {el.id = Math.floor(Math.random() * 100) +'_'+ el.age; return el;});

// відсортувати його за індентифікатором
newUsers.sort((a, b) => a.id > b.id ? 1 : a.id < b.id ? -1 : 0);
```

> написать функцию калькулятора с 2мя числами и колбеком

```javascript
let add = (a, b) => a + b;
let remove = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

function myCalc(a, b, actionCalback) {
	return actionCalback(a, b);
}

let sum = myCalc(2, 3, add);
```

> написать функцию калькулятора с 3мя числами и колбеком
```javascript
let add = (a, b) => a + b;
let remove = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

function myCalc(a, b, c, actionCalback) {
	return actionCallback(actionCalback(a, b), c);
}

let sum = myCalc(2, 3, 4, add);
```




## КЛАССНАЯ РАБОТА

```javascript
let cars = [ {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400}, {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250}, {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300}, {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140}, {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200}, {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165}, {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120}, {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120}, {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350}, {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180}, {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180}, {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400}, {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];
```

> Відфільтрувати масив за наступними крітеріями :

- двигун більше 3х літрів
```javascript
let filteredCars = cars.filter(car => car.volume > 3);
```

- двигун = 2л
```javascript
let filteredCars = cars.filter(car => car.volume === 2);
```

- виробник мерс
```javascript
let filteredCars = cars.filter(car => car.producer === 'mercedes');
```

- двигун більше 3х літрів + виробник мерседес
```javascript
let filteredCars = cars.filter(car => car.volume > 3 && car.producer === 'mercedes');
```

- двигун більше 3х літрів + виробник субару
```javascript
let filteredCars = cars.filter(car => car.volume > 3 && car.producer === 'subaru');
```

- сили більше ніж 300
```javascript
let filteredCars = cars.filter(car => car.power > 300);
```

- сили більше ніж 300 + виробник субару
```javascript
let filteredCars = cars.filter(car => car.power > 300 && car.producer === 'subaru');
```

- мотор серіі ej
```javascript
let filteredCars = cars.filter(car => car.engine.startsWith('ej'));
```

- сили більше ніж 300 + виробник субару + мотор серіі ej
```javascript
let filteredCars = cars.filter(car => car.power > 300 && car.producer === 'subaru' && car.engine.startsWith('ej'));
```

- двигун меньше 3х літрів + виробник мерседес
```javascript
let filteredCars = cars.filter(car => car.volume < 3 && car.producer === 'mercedes');
```

- двигун більше 2л + сили більше 250
```javascript
let filteredCars = cars.filter(car => car.volume > 3 && car.power > 250);
```

- сили більше 250  + виробник бмв
```javascript
let filteredCars = cars.filter(car => car.power > 250 && car.producer === 'bmw');
```


> взять следующий массив
```javascript
let usersWithAddress = [{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}, {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}}, {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}}, {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}}, {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}}, {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}}, {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];
```

- отсортировать его по id пользователей
```javascript
usersWithAddress.sort((a, b) => a.id > b.id ? 1 : a.id < b.id ? -1 : 0);
```

- отсортировать его по id пользователей в обратном опрядке
```javascript
usersWithAddress.sort((a, b) => a.id < b.id ? 1 : a.id > b.id ? -1 : 0);
```

- отсортировать его по возрасту пользователей
```javascript
usersWithAddress.sort((a, b) => a.age > b.age ? 1 : a.age < b.age ? -1 : 0);
```

- отсортировать его по возрасту пользователей в обратном порядке
```javascript
usersWithAddress.sort((a, b) => a.age < b.age ? 1 : a.age > b.age ? -1 : 0);
```

- отсортировать его по имени пользователей
```javascript
usersWithAddress.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0);
```

- отсортировать его по имени пользователей в обратном порядке
```javascript
usersWithAddress.sort((a, b) => a.name < b.name ? 1 : a.name > b.name ? -1 : 0);
```

- отсортировать его по названию улицы  в алфавитном порядке
```javascript
usersWithAddress.sort((a, b) => a.address.street > b.address.street ? 1 : a.address.street < b.address.street ? -1 : 0);
```

- отсортировать его по номеру дома по возрастанию
```javascript
usersWithAddress.sort((a, b) => a.address.number > b.address.number ? 1 : a.address.number < b.address.number ? -1 : 0);
```

- отфильтровать (оставить) тех кто младше 30
```javascript
let filteredUsers = usersWithAddress.filter(user => user.age < 30);
```

- отфильтровать (оставить) тех у кого отрицательный статус
```javascript
let filteredUsers = usersWithAddress.filter(user => !user.status);
```

- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
```javascript
let filteredUsers = usersWithAddress.filter(user => !user.status && user.age < 30);
```

- отфильтровать (оставить) тех у кого номер дома четный
```javascript
let filteredUsers = usersWithAddress.filter(user => user.address.number % 2 === 0);
```
