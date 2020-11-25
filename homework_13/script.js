let logMsg = (msg, type, divElm) => {
    divElm.innerHTML += `<div class="alert alert-${type}">${msg}</div>`;
}

let wakeUp = async () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            let rnd = Math.random();
            // якщо timeOut > 0.4 тоді будильник продзвенів і ми прокинулись
            if (rnd > 0.4) {
                return resolve('Будильник продзвенів і ми прокинулись.');
            }
            // інакше проспали
            else {
                return reject(new Error('Будильник не продзвенів і ми проспали.'));
            }

        }, Math.ceil(Math.random() * 10000));
    })
}

let cleanTooth = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let rnd = Math.random();
            // якщо timeOut > 0.4 тоді я знайшов зубну пасту і щітку і почистив зуби
            if (rnd > 0.4) {
                return resolve('Я знайшов зубну щітку і пасту і почистив зуби.');
            }
            else {
                return reject(new Error('Я не знайшов зубну щітку і/або пасту.'));
            }

        }, Math.ceil(Math.random() * 10000));
    })
}

let getBreakfast = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let rnd = Math.random();
            // якщо timeOut > 0.4 тоді я приготував сніданок і поснідав
            if (rnd > 0.4) {
                return resolve('Я приготував сніданок і поснідав.');
            }
            else {
                return reject(new Error('Я не знайшов їжі на сніданок, голодний і злий.'));
            }

        }, Math.ceil(Math.random() * 10000));
    })
}

let goWork = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let rnd = Math.random();
            // якщо timeOut > 0.4 тоді я пішов на роботу і відпрацював день
            if (rnd > 0.4) {
                return resolve('Пішов на роботу і працюю.');
            }
            else {
                return reject(new Error('Не хочеться працювати сьогодні - пішов спати.'));
            }

        }, Math.ceil(Math.random() * 10000));
    })
}

let returnHomeDinner = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let rnd = Math.random();
            // якщо timeOut > 0.4 тоді я повернувся з роботи і приготував вечерю
            if (rnd > 0.4) {
                return resolve('Прийшов з роботи і приготував сьобі вечерю. Вечеряю.');
            }
            else {
                return reject(new Error('Забув купити продукти на вечерю. Сиджу злий і голодний.'));
            }

        }, Math.ceil(Math.random() * 10000));
    })
}

let goSleep = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let rnd = Math.random();
            // якщо timeOut > 0.4 тоді я подивився кіно і пішов спати
            if (rnd > 0.4) {
                return resolve('Подивився кіно і пішов спати');
            }
            else {
                return reject(new Error('Знову аварія на Воля ТВ ні телебачення ні інтернет не працює... Пішов спати злий.'));
            }

        }, Math.ceil(Math.random() * 10000));
    })
}


let dayPlan = () => {
    let divElm = document.querySelector('#dayPlan');
    if (divElm) {
        divElm.innerHTML = '<div class="alert alert-secondary">Розпочинаемо день:</div>';
        wakeUp()
            .then(msg => {
                logMsg(msg, 'success', divElm);
                return cleanTooth();
            })
            .then(msg => {
                logMsg(msg, 'success', divElm);
                return getBreakfast();
            })
            .then(msg => {
                logMsg(msg, 'success', divElm);
                return goWork();
            })
            .then(msg => {
                logMsg(msg, 'success', divElm);
                return returnHomeDinner();
            })
            .then(msg => {
                logMsg(msg, 'success', divElm);
                return goSleep();
            })
            .then(msg => {
                logMsg(msg, 'success', divElm);
            })
            .catch(error => {
                logMsg(error.toString(), 'danger', divElm);
            })
            .finally(() => {
                logMsg('Завершено.', 'secondary', divElm);
            })
    }
};
