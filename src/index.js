import {shuffle} from "./shuffle"
import {pipe} from "./pipe"
import './style.css'
const section = document.querySelector('section');
const arrNumbers = [1,1,2,2,3,3,4,4,5,5,6,6];
let cards = []
let shuffled = shuffle(arrNumbers);
// console.log(shuffled);


// let block = false;
let currentScore = 0;
let previousClickedElement = null

function handleMove() {
// console.log('firs')
if(previousClickedElement === null) {
    this.classList.remove('hide');
    previousClickedElement = this
    // console.log(previousClickedElement);
    currentScore++;
} else {
    this.classList.remove('hide');

    if(this.dataset.value === previousClickedElement.dataset.value) {
        // console.log('same', this.dataset.value, previousClickedElement.dataset.value)
        previousClickedElement = null;
        currentScore++;

    } else {
        // console.log('different', this.dataset.value, previousClickedElement.dataset.value)
    }
}
}

function handleGameState(){
    // console.log('second')
}

function renderGame(arr) {
    for(let index = 0; index < arr.length; index++) {
    const card = document.createElement('div');
    const cardNumber = document.createElement('span');
    card.dataset.value = arr[index];
    card.dataset.index = index;
    cardNumber.innerText = arr[index];
    card.classList.add('card', 'hide')
    card.appendChild(cardNumber);
    section.appendChild(card);
    cards.push(card);
    card.addEventListener('click', cardClickHandler)
    }
}

let cardClickHandler = pipe(handleMove, handleGameState);

// function startNewGame(){}

renderGame(shuffled);