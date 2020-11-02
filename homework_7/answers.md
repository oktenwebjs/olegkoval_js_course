# Відповіді на питання із домашнього завдання №7
(https://github.com/GrayHead/js_demos/blob/master/this_one_folder_that_you_need/lesson3_DOM_objects_divide/tasks/task2/task3.txt)


> создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
```javascript
let obj1 = {
    name: 'Dave Wilson',
    age: 22,
    phone: '1122334455'
};
let obj2 = {
    width: 5.25,
    heigth: 6,
    length: 12
};
let obj3 = {
    model: 'Citroen C3',
    engine: 1.4,
    engine_type: 'diesel'
};
let obj4 = {
    firstname: 'Dave',
    lastname: 'Wilson',
    email: 'dwilson@test.com'
};
let obj5 = {
    plane: 'Airbus',
    model: '380',
    capacity: 300
};
```


> создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
```javascript
let obj6 = {
    type: 'header',
    childs: ['meta', 'script'],
    script: {src: 'https://www.url-to-script.com/script.js'},
    meta: 'This is the meta text'
};
let obj7 = {
    title: 'Road to Haven',
    authors: ['Dave Wilson', 'David Clark'],
    year_of_book: '1984',
    edition: {name: '2-nd edition', year: '1990'}
};
let obj8 = {
    task: 'Create a calc function to summarize a 3 numbers',
    prams_names: ['x', 'y', 'z'],
    result_name: 'www',
    function_meta: {name: 'mySumFunction', return: 'number'}
};
let obj9 = {
    fruit_name: 'Banana',
    include_vitamins: ['A', 'B5', 'C'],
    recommendations: 'Lorem ipsum dolor sit amet.',
    meta: {description: 'Banana is a fruit with ...', keywords: 'banana, fruit, vitamins'}
};
let obj10 = {
    request_type: 'POST',
    required_params: ['login', 'password'],
    success_msg: 'Welcome %name',
    fail_msg: 'Denied',
    request_body: {name: 'Kisha Ali', login: 'kisha_ali', password: 'qwerty'}
};

```

> При помощи for in вывести все ключи всех объектов из задания 1 и 2
```javascript
let arraysList = [obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10];

for (const obj of arraysList) {
    for (const key in obj) {
        console.log(key);
    }
}
```

> При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
```javascript
let arraysList = [obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10];

for (const obj of arraysList) {
    console.log(Object.keys(obj));
}
```

> Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
```javascript
let models = ['Citroen', 'Renault', 'WV', 'Porsche', 'Dacia', 'Opel', 'Nissan', 'Volvo', 'Ford', 'Toyota'];
let years = ['1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1991', '1992'];
let powers = ['95 H/p', '85 H/p', '80 H/p', '115 H/p', '140 H/p', '150 H/p', '110 H/p', '100 H/p', '195 H/p', '200 H/p'];
let colors = ['red', 'yellow', 'black', 'grey', 'green', 'blue', 'brown', 'orange', 'violet', 'white'];
let cars = [];

for (let i = 0; i < 10; i++) {
    cars[i] = {
        model: models[i],
        year: yearss[i],
        power: powers[i],
        color: colors[i]
    };
}
```


> Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
```javascript
let names = ['New York', 'Paris', 'Eindhoven', 'Madrid', 'London', 'Stokholm', 'Rome', 'Podgorica', 'Lviv', 'Warsaw'];
let populations = ['20 bil.', '10 bil.', '2 bil.', '20 bil.', '500k', '1 bil.', '100k', '1 bil.', '1 bil.', '2 bil.'];
let countriess = ['USA', 'Frace', 'Netherlands', 'Spain', 'UK', 'Sweeden', 'Italy', 'Montenegro', 'Ukraine', 'Poland' ];
let regions = ['NY', 'Central', 'North-East', 'Central', 'South', 'SK', 'RO', 'PG', 'LV', 'WS'];
let cities = [];

for (let i = 0; i < 10; i++) {
    cities[i] = {
        name: names[i],
        population: populations[i],
        country: countriess[i],
        region: regions[i]
    };
}
```

> Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
```javascript
let models = ['Citroen', 'Renault', 'WV', 'Porsche', 'Dacia', 'Opel', 'Nissan', 'Volvo', 'Ford', 'Toyota'];
let years = ['1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1991', '1992'];
let powers = ['95 H/p', '85 H/p', '80 H/p', '115 H/p', '140 H/p', '150 H/p', '110 H/p', '100 H/p', '195 H/p', '200 H/p'];
let colors = ['red', 'yellow', 'black', 'grey', 'green', 'blue', 'brown', 'orange', 'violet', 'white'];
let drivers = [
    {name: 'Irvin', age: 22, gender: 'Male', experience: 15},
    {name: 'Abba', age: 20, gender: 'Female', experience: 2},
    {name: 'Lisa', age: 23, gender: 'Female', experience: 3},
    {name: 'Eddy', age: 32, gender: 'Male', experience: 4},
    {name: 'Bobby', age: 42, gender: 'Male', experience: 5},
    {name: 'Dave', age: 54, gender: 'Male', experience: 6},
    {name: 'Irene', age: 33, gender: 'Female', experience: 7},
    {name: 'Kim Chen In', age: 37, gender: 'Male', experience: 8},
    {name: 'Carusso', age: 55, gender: 'Male', experience: 25},
    {name: 'Pejo', age: 26, gender: 'Male', experience: 10}
];
let carsExtended = [];

for (let i = 0; i < 10; i++) {
    carsExtended[i] = {
        model: models[i],
        year: yearss[i],
        power: powers[i],
        color: colors[i],
        driver: drivers[i]
    };
}
```

> проитерировать каждый массив из задания 5,6,7 при помощи while.
```javascript
let i = 0;
while (i < 10) {
    console.log(cars[i]);
    console.log(cities[i]);
    console.log(carsExtended[i]);
    i++;
}
```

> проитерировать каждый массив из задания 5,6,7 при помощи for .
```javascript
for (let i = 0; i < 10; i++) {
    console.log(cars[i]);
    console.log(cities[i]);
    console.log(carsExtended[i]);
}
```

> проитерировать каждый массив из задания 5,6,7 при помощи  for of.
```javascript
for (const car of cars) {
    console.log(car);
}
for (const city of cities) {
    console.log(city);
}
for (const carExt of carsExtended) {
    console.log(carExt);
}
```

> взять объекты из задания 1 и превратить каждый в json.
```javascript
let json1 = JSON.stringify(obj1);
let json2 = JSON.stringify(obj2);
let json3 = JSON.stringify(obj3);
```

> взять json из задания 11 и превратить их обратно в объекты.
```javascript
let obj1Converted = JSON.parse(json1);
let obj2Converted = JSON.parse(json2);
let obj3Converted = JSON.parse(json3);
```

> взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
```javascript
for (let i in cars) {
    cars[i] = JSON.stringify(cars[i]);
}
```

> взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
```javascript
for (let i in cities) {
    cities[i] = JSON.stringify(cities[i]);
}
```

> взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
```javascript
let newCars = [];
for (let i in carsExtended) {
    newCars.push(JSON.stringify(carsExtended[i]));
}
```

> Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
```javascript
let users = [
    {username: 'davewilson', email: 'dave@test.com', skills: ['js', 'nodejs', 'css']},
    {username: 'Ju Khi Noi', email: 'ju_khi_noi@test.com', skills: ['js', 'html']},
    {username: 'alan', email: 'alan@test.com', skills: ['html', 'css']}
];
for (const user of users) {
    for (let i in user.skills) {
        console.log(user.username + ' skill #'+ i + ' is ' + user.skills[i]);
    }
}
```

> Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
```javascript
let users = [
    {username: 'davewilson', email: 'dave@test.com', skills: ['js', 'nodejs', 'css']},
    {username: 'Ju Khi Noi', email: 'ju_khi_noi@test.com', skills: ['js', 'html']},
    {username: 'alan', email: 'alan@test.com', skills: ['html', 'css']}
];
let skills = [];

for (const user of users) {
    for (let i in user.skills) {
        skils.push(user.skills[i]);
    }
}
```


> За допомогою 2х циклів проітеррувати  даний масив і масив кожного об'єкта.
 let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];
```javascript
for (const user of users) {
    for (let i in user.skills) {
        console.log(user.name + ' have skill: ' + user.skills[i]);
    }
}
```


### Дано масив

let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

> З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
```javascript
let addresses = [];

for (const user of users) {
    addresses.push(user.address);
}
```

> За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок за допомоги document.createElement. Всі данні в одному блоці.
```javascript
let addresses = [];

for (const user of users) {
    let div = document.createElement('div');
    div.innerHTML = 'Name: '+ user.name + '<br/>'
                  + 'Age: '+ user.age + '<br/>'
                  + 'Status: '+ user.status + '<br/>'
                  + 'Address: '+ user.address.street + ' '+ user.address.houseNumber + ', '+ user.address.city + ', '+ user.address.country;
    document.body.appendChild(div);
}
```

> За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
```javascript
let addresses = [];

for (const user of users) {
    let div = document.createElement('div');
    div.innerHTML = '<div>Name: '+ user.name + '</div>'
                  + '<div>Age: '+ user.age + '</div>'
                  + '<div>Status: '+ user.status + '</div>'
                  + '<div>Address: '+ user.address.street + ' '+ user.address.houseNumber + ', '+ user.address.city + ', '+ user.address.country + '</div>';
    document.body.appendChild(div);
}
```

> За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
```javascript
let addresses = [];

for (const user of users) {
    let div = document.createElement('div');
    div.innerHTML = '<div>Name: '+ user.name + '</div>'
                  + '<div>Age: '+ user.age + '</div>'
                  + '<div>Status: '+ user.status + '</div>';

    let addressDiv = document.createElement('div');
    addressDiv.innerHTML = '<div>Address: '+ user.address.street + ' '+ user.address.houseNumber + ', '+ user.address.city + ', '+ user.address.country + '</div>';
    
    div.appendChild(addressDiv);
    document.body.appendChild(div);
}
```


> Дано 2 масиви з рівною кількістю об'єктів.
Масиви:
let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
Записати цей об'єкт в новий масив
Частковий приклад реультату:
let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]

```javascript
let usersWithCities = [];

for (const user of usersWithId) {
    for (let i in citiesWithId) {
        let city = citiesWithId[i];

        if (user.id === city.user_id) {
            user.address = city;

            usersWithCities.push(user);

            // remove city to decrease the array lenth and do not iterate cities which we already found
            citiesWithId.splice(i, 1);            
        }
    }
}

console.log(usersWithCities);
```


> створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
```html
<div id="mydiv" class="myclass">Lorem ipsum dolor sit amet.</div>
```
```javascript
let div = document.getElementById('mydiv');
console.log(div.innerText);

let divsByClass = document.getElementsByClassName('myclass');
for (let i in divsByClass) {
    console.log(divsByClass[i].innerText);
}

let divsByTag = document.getElementsByTagName('div');
for (let i in divsByTag) {
    console.log(divsByTag[i].innerText);
}
```

> змінити цей текст використовуючи селектори id, class,  tag
```html
<div id="mydiv" class="myclass">Lorem ipsum dolor sit amet.</div>
```
```javascript
let div = document.getElementById('mydiv');
div.innerText = 'New text';

let divsByClass = document.getElementsByClassName('myclass');
for (let i in divsByClass) {
    divsByClass[i].innerText = 'New text 2';
}

let divsByTag = document.getElementsByTagName('div');
for (let i in divsByTag) {
    divsByTag[i].innerText = 'New text 3';
}
```

> змінити висоту та ширину блоку використовуючи селектори id, class,  tag
```html
<div id="mydiv" class="myclass">Lorem ipsum dolor sit amet.</div>
```
```javascript
let div = document.getElementById('mydiv');
div.style.heigth = '50px';
div.style.width = '50px';

let divsByClass = document.getElementsByClassName('myclass');
for (let i in divsByClass) {
    divsByClass[i].style.heigth = '55px';
    divsByClass[i].style.width = '55px';
}

let divsByTag = document.getElementsByTagName('div');
for (let i in divsByTag) {
    divsByTag[i].style.heigth = '60px';
    divsByTag[i].style.width = '60px';
}
```

> за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
```javascript
let table = document.createElement('table');
let row = document.createElement('tr');
let td1 = document.createElement('td');
let td2 = document.createElement('td');
let td3 = document.createElement('td');

row.appendChild(td1);
row.appendChild(td2);
row.appendChild(td3);
table.appendChild(row);

document.body.appendChild(table);
```

> за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
```javascript
let table = document.createElement('table');

for (let i = 0; i < 10; i++) {
    let row = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    table.appendChild(row);
}

document.body.appendChild(table);
```

> за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
```javascript
let table = document.createElement('table');

for (let i = 0; i < 10; i++) {
    let row = document.createElement('tr');

    for (let y = 0; y < 5; y++) {
        let td = document.createElement('td');
        row.appendChild(td);
    }

    table.appendChild(row);
}

document.body.appendChild(table);
```

> за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
```javascript
let rowsNum = prompt('Enter number of rows in the table');
let colsNum = prompt('Enter number of columns in the table');

let table = document.createElement('table');

for (let i = 0; i < rowsNum; i++) {
    let row = document.createElement('tr');

    for (let y = 0; y < colsNum; y++) {
        let td = document.createElement('td');
        row.appendChild(td);
    }

    table.appendChild(row);
}

document.body.appendChild(table);
```


### Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
 
> знайти всі елементі, які мають class
```javascript
let allClassElements = document.querySelectorAll("[class]");
```

> знайти всі параграфи ,та змінити текст на hello oktenweb!
```javascript
let allParagraphElements = document.querySelectorAll("p");
for (const p of allParagraphElements) {
    p.innerText = 'hello oktenweb!';
}
```
 
> знайти всі div та змінити ім колір на червоний
```javascript
let allDivElements = document.querySelectorAll("div");
for (const div of allDivElements) {
    div.style.backgroundColor = 'red';
}
```

> є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
```javascript
let allH2Elements = document.querySelectorAll("h2");
let ul = document.createElement('ul');

for (const h2 of allH2Elements) {
    let li = document.createElement('li');
    li.innerText = h2.innerText;

    ul.appendChild(li);
}

document.body.appendChild(ul);
```

> Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

            let rules = [
                {
                    title: 'Первое правило Бойцовского клуба.',
                    body: 'Никому не рассказывать о Бойцовском клубе.'
                },
                {
                    title: 'Второе правило Бойцовского клуба.',
                    body: 'Никогда никому не рассказывать о Бойцовском клубе.'
                },
                {
                    title: 'Третье правило Бойцовского клуба.',
                    body: 'В схватке участвуют только двое.'
                },
                {
                    title: 'Четвертое правило Бойцовского клуба.',
                    body: 'Не более одного поединка за один раз.'
                },
                {
                    title: 'Пятое правило Бойцовского клуба.',
                    body: 'Бойцы сражаются без обуви и голые по пояс.'
                },
                {
                    title: 'Шестое правило Бойцовского клуба.',
                    body: 'Поединок продолжается столько, сколько потребуется.'
                },
                {
                    title: 'Седьмое правило Бойцовского клуба.',
                    body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
                },
                {
                    title: 'Восьмое и последнее правило Бойцовского клуба.',
                    body: 'Новичок обязан принять бой.'
                },

            ];

```javascript
let ol = document.createElement('ol');

for (const rule of rules) {
    let divTitle = document.createElement('div');
    let divBody = document.createElement('div');

    divTitle.innerText = rule.title;
    divBody.innerText = rule.body;

    let li = document.createElement('li');
    li.appendChild(divTitle);
    li.appendChild(divBody);
    ol.appendChild(li);
}

document.body.appendChild(ol);
```
