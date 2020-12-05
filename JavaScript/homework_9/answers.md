# Домашньє завдання №9
(https://github.com/GrayHead/js_demos/blob/master/this_one_folder_that_you_need/lesson5/tasks/task.txt)

> Створити функцію конструктор для об'єкту який описує теги
Властивості
 - назва тегу
 - опис його дій
 - масив з атрибутами (2-3 атрибути максимум)
 Кожен атрибут описати як окремий який буде містити
 - назву атрибуту
 - опис дії атрибуту
 інформацію брати з htmlbook.ru

 Таким чином описати теги
 -a
 -div
 -h1
 -span
 -input
 -form
 -option
 -select
 Приклад результату
   {
        titleOfTag: 'area',
        action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
        attrs: [
        {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
        {/*some props and values*/},
        {/*...*/},
        {/*...*/},
        ]

   }
```javascript
function HtmlTag(tagName, tagAction, tagAttrs) {
    this.titileOfTag = tagName;
    this.action = tagAction;
    this.attrs = tagAttrs;
}


let a = new HtmlTag('a', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.', [
                {titleOfAttr: 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
                {titleOfAttr: 'href', actionOfAttr: 'Задает адрес документа, на который следует перейти.'},
                {titleOfAttr: 'target', actionOfAttr: 'Имя окна или фрейма, куда браузер будет загружать документ.'}
            ]);

let div = new HtmlTag('div', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.', [
                {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
                {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'}
            ]);
```


>  Створити класс  для об'єкту який описує теги
Властивості
 -назва тегу
 - опис його дій
 - масив з атрибутами (2-3 атрибути максимум)
 Кожен атрибут описати як окремий який буде містити
 -назву атрибуту
 -опис дії атрибуту
 інформацію брати з htmlbook.ru

 Таким чином описати теги
 -a
 -div
 -h1
 -span
 -input
 -form
 -option
 -select
 Приклад результату
   {
        titleOfTag: 'area',
        action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
        attrs: [
        {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
        {/*some props and values*/},
        {/*...*/},
        {/*...*/},
        ]

   }
```javascript
class HtmlTag {
    constructor(tagName, tagAction, tagAttrs) {
        this.titileOfTag = tagName;
        this.action = tagAction;
        this.attrs = tagAttrs;
    }
}

let a = new HtmlTag('a', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.', [
                {titleOfAttr: 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
                {titleOfAttr: 'href', actionOfAttr: 'Задает адрес документа, на который следует перейти.'},
                {titleOfAttr: 'target', actionOfAttr: 'Имя окна или фрейма, куда браузер будет загружать документ.'}
            ]);

let div = new HtmlTag('div', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.', [
                {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
                {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'}
            ]);
```



> Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
-- info () - яка виводить всю інформацію про автомобіль
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

```javascript
class Car {
    constructor(model, mark, year, max_speed, engine) {
        this.model = model;
        this.mark = mark;
        this.year = year;
        this.max_speed = max_speed;
        this.engine = engine;
        this.driver = null;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.max_speed} на годину`);
    }

    info() {
        console.log(`Model: ${this.model}; Mark: ${this.mark};  Year: ${this.year};  Max. Speed: ${this.max_speed};  Engine: ${this.engine}.`);
    }

    increaseMaxSpeed(newSpeed) {
        this.max_speed += newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}
```


> Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
-- info () - яка виводить всю інформацію про автомобіль
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
```javascript
function Car(model, mark, year, max_speed, engine) {
    this.model = model;
    this.mark = mark;
    this.year = year;
    this.max_speed = max_speed;
    this.engine = engine;
    this.driver = null;

    this.drive = function() {
        console.log(`їдемо зі швидкістю ${this.max_speed} на годину`);
    }

    this.info = function() {
        console.log(`Model: ${this.model}; Mark: ${this.mark};  Year: ${this.year};  Max. Speed: ${this.max_speed};  Engine: ${this.engine}.`);
    }

    this.increaseMaxSpeed = function(newSpeed) {
        this.max_speed += newSpeed;
    }

    this.changeYear = function(newValue) {
        this.year = newValue;
    }

    this.addDriver = function(driver) {
        this.driver = driver;
    }
}
```

> створити класс попелюшка з полями ім'я, вік, розмір ноги
--Створити 10 попелюшок , покласти їх в масив
--Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
-- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
```javascript
class Cinderella {
    constructor(name, age, foot_size) {
        this.name = name;
        this.age = age;
        this.foot_size = foot_size;
    }
}

class Prince {
    constructor(name, age, found_size) {
        this.name = name;
        this.age = age;
        this.found_size = found_size;
    }
}

let cinderellas = [];
for (let i =0; i < 10; i++) {
    cinderellas.push(new Cinderella(`Anna ${i}`, 20 + i, 30 + i));
}

let price = new Prince('Dave Willson', 40, 36);

for (const cinderella on cinderellas) {
    if (prince.found_size === cinderella.foot_size) {
        console.log(`Correct Cinderrella is ${cinderella.name}`);
        break;
    }
}
```



> створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
--Створити 10 попелюшок , покласти їх в масив
--Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
-- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

```javascript
function Cinderella(name, age, foot_size) {
    this.name = name;
    this.age = age;
    this.foot_size = foot_size;
}

function Prince(name, age, found_size) {
    this.name = name;
    this.age = age;
    this.found_size = found_size;

    this.findCinderella(cinderellas) {
        for (const cinderella on cinderellas) {
            if (this.found_size === cinderella.foot_size) {
                return cinderella;
            }
        }
    }
}

let cinderellas = [];
for (let i =0; i < 10; i++) {
    cinderellas.push(new Cinderella(`Anna ${i}`, 20 + i, 30 + i));
}

let price = new Prince('Dave Willson', 40, 36);

let cinderella = prince.findCinderella(cinderellas);
console.log(cinderella);
```
