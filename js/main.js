/*----- constants -----*/


/*----- app's state (variables) -----*/
let total;
let increment;

/*----- cached element references -----*/
const totalEl = document.querySelector('h1');
const inputEl = document.querySelector('input');

const addEl = document.getElementById('add');
const subtractEl = document.getElementById('subtract');

/*----- event listeners -----*/
addEl.addEventListener('click', addInput);
subtractEl.addEventListener('click', subtractInput);

/*----- functions -----*/
function init(){
    total = 0;
    increment = 1;
    render();
}

function render(){
    inputEl.value = increment;
    totalEl.innerText = total;
    if (total < 0) {
        totalEl.style.color = 'red';
    } else {
        totalEl.style.color = 'black';
    }
}

function addInput(){
    increment = parseInt(inputEl.value);
    total += increment;
    render();
}

function subtractInput(){
    increment = parseInt(inputEl.value);
    total -= increment;
    render();
}

init();
