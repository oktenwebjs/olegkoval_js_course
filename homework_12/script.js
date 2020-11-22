let text1SaveText = () => {
    let textEl1 = document.querySelector('#textarea_1');
    if (textEl1) {
        window.localStorage.setItem('textarea_1', textEl1.value);
    }
}

(() => {
    let textEl1 = document.querySelector('#textarea_1');
    if (textEl1) {
        textEl1.value = window.localStorage.getItem('textarea_1');
    }
})();

// ----------------------------------------------------------------------

let form1SaveData = () => {
    let form1 = document.forms['form_1'];
    if (form1) {
        let values = {};
        for (const elm of document.forms['form_1'].elements) {
            if (elm.id) {
                values[elm.id] = {
                    value: document.forms['form_1'].elements[elm.id].value,
                    checked: document.forms['form_1'].elements[elm.id].checked
                };
            }
        }
        window.localStorage.setItem('form_1', JSON.stringify(values));
    }
}

(() => {
    let form1 = document.forms['form_1'];
    if (form1) {
        let values = JSON.parse(window.localStorage.getItem('form_1'));
        for (let id in values) {
            document.forms['form_1'].elements[id].value = values[id].value;
            if (values[id].checked) {
                document.forms['form_1'].elements[id].checked = values[id].checked;
            }
        }
    }
})();

// ----------------------------------------------------------------------

let saveChangesTextarea3 = () => {
    let textEl3 = document.querySelector('#textarea_3');
    if (textEl3) {
        let valuesHistory = JSON.parse(window.localStorage.getItem('textarea_3'));

        // check if history exists, otherwise initialize empty
        if (!valuesHistory) valuesHistory = {};

        let key = Date.now();
        valuesHistory[key] = textEl3.value;
        valuesHistory['currentPosition'] = key;

        window.localStorage.setItem('textarea_3', JSON.stringify(valuesHistory));
    }
}

let textarea3Goto = (direction) => {
    let textEl3 = document.querySelector('#textarea_3');
    if (textEl3) {
        let valuesHistory = JSON.parse(window.localStorage.getItem('textarea_3'));

        if (valuesHistory) {
            let currentPosition = valuesHistory['currentPosition'];
            delete valuesHistory['currentPosition'];

            let keys = Object.keys(valuesHistory);
            let currIndex = keys.indexOf(currentPosition.toString());

            switch (direction) {
                case 'back':
                    // if exists previous then get it
                    if (keys[currIndex - 1]) {
                        currentPosition = keys[currIndex - 1];
                    }
                    // otherwise get latest (use a "loop" logic)
                    else {
                        currentPosition = keys[keys.length - 1];
                    }
                    break;
                case 'forward':
                    // if exists next then get it
                    if (keys[currIndex + 1]) {
                        currentPosition = keys[currIndex + 1];
                    }
                    // otherwise get first (use a "loop" logic)
                    else {
                        currentPosition = keys[0];
                    }
            }

            valuesHistory['currentPosition'] = currentPosition;
            window.localStorage.setItem('textarea_3', JSON.stringify(valuesHistory));
            textEl3.value = valuesHistory[valuesHistory['currentPosition']];
        }
    }
}

(() => {
    let textEl3 = document.querySelector('#textarea_3');
    if (textEl3) {
        let valuesHistory = JSON.parse(window.localStorage.getItem('textarea_3'));

        if (valuesHistory) {
            textEl3.value = valuesHistory[valuesHistory['currentPosition']];
        }
    }
})();

// ----------------------------------------------------------------------

let ShowContactForm = () => {
    let formDiv = document.querySelector('#contact_form');

    if (formDiv) {
        formDiv.style.display = 'block';
    }
}
let HideContactForm = () => {
    let formDiv = document.querySelector('#contact_form');

    if (formDiv) {
        formDiv.style.display = 'none';
    }

    let contactForm = document.forms['contact_form'];
    if (contactForm) {
        contactForm.reset();
    }
}

let SaveContact = () => {
    let contactForm = document.forms['contact_form'];
    if (contactForm) {
        let newContact = {
            name: contactForm['name'].value,
            email: contactForm['email'].value,
            phone: contactForm['phone'].value,
            company: contactForm['company'].value,
            department: contactForm['department'].value,
            birthdate: contactForm['birthdate'].value
        };

        let recordKey = Date.now();
        if (contactForm['contactKey'].value.length > 0) {
            recordKey = contactForm['contactKey'].value;
        }
        let contacts = JSON.parse(window.localStorage.getItem('contacts'));

        if (!contacts) {
            contacts = {};
        }
        contacts[recordKey] = newContact;

        window.localStorage.setItem('contacts', JSON.stringify(contacts));
        drawContacts(contacts);
    }
    HideContactForm();
    return false;
}

let EditContact = (contactKey) => {
    let contacts = JSON.parse(window.localStorage.getItem('contacts'));

    if (contacts && contacts[contactKey]) {
        let contactForm = document.forms['contact_form'];
        if (contactForm) {
            contactForm.reset();

            contactForm['contactKey'].value = contactKey;
            contactForm['name'].value = contacts[contactKey].name;
            contactForm['phone'].value = contacts[contactKey].phone;
            contactForm['email'].value = contacts[contactKey].email;
            contactForm['company'].value = contacts[contactKey].company;
            contactForm['department'].value = contacts[contactKey].department;
            contactForm['birthdate'].value = contacts[contactKey].birthdate;
        }
    }

    ShowContactForm();
}

let DeleteContact = (contactKey) => {
    let contacts = JSON.parse(window.localStorage.getItem('contacts'));

    if (contacts) {
        delete contacts[contactKey];
        window.localStorage.setItem('contacts', JSON.stringify(contacts));
        drawContacts(contacts);
    }
}

let drawContacts = (contacts) => {
    let contactsDiv = document.querySelector('#contacts');
    if (contactsDiv) {
        contactsDiv.innerHTML = '';
        for (let i in contacts) {
            contactsDiv.innerHTML += `<div class="d-flex"><div class="p-2 flex-grow-1">${contacts[i].name}, ${contacts[i].email}, ${contacts[i].phone}, ${contacts[i].company}, ${contacts[i].department}, ${contacts[i].birthdate}</div><div class="p-2"><button onclick="EditContact('${i}')">Edit</button> <button onclick="DeleteContact('${i}')">Delete</button></div></div>`;
        }
    }
}

(() => {
    let formDiv = document.querySelector('#contact_form');

    if (formDiv) {
        formDiv.style.display = 'none';
    }

    let contacts = JSON.parse(window.localStorage.getItem('contacts'));
    if (contacts) {
        drawContacts(contacts);
    }
})();