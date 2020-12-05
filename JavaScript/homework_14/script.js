async function printText() {
    let textElm = document.querySelector('#text_to_print');
    let printElm = document.querySelector('#printer');
    if (textElm && printElm) {
        printElm.innerHTML = '';
        let textArr = textElm.value.split('');
        for (let charVal of textArr) {
            await new Promise(resolve => {
                setTimeout(resolve, Math.ceil(Math.random() * 1000));
            });
            printElm.innerHTML += charVal;
        }
    }
}