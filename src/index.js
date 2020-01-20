import {shuffle} from "./shuffle"
import {pipe} from "./pipe"
import './style.css'
const section = document.querySelector('section');
const gameFinished = document.querySelector('.game-finished');
const scoreKeeper = document.querySelector('p.counter');
const arrNumbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
let cards = []
let shuffled = shuffle(arrNumbers);
// console.log(shuffled);


let block = false;
let currentScore = 0;
let previousClickedElement = null

function handleMove() {
    if (block === true || !this.classList.contains('hide')) {
        // bye - this is meant to prevent user from clicking for one second
        return
    }
    // console.log('first function')
    if (previousClickedElement === null) {
        this.classList.remove('hide');
        previousClickedElement = this
        // console.log(previousClickedElement);
        currentScore++;
    } else {
        this.classList.remove('hide');

        if (this.dataset.value === previousClickedElement.dataset.value) {
            // console.log('same', this.dataset.value, previousClickedElement.dataset.value)
            previousClickedElement = null;
            currentScore++;

        } else {
            // console.log('different', this.dataset.value, previousClickedElement.dataset.value)
            block = true;
            setTimeout(() => {
                block = false;
                previousClickedElement.classList.add('hide');
                this.classList.add('hide');
                previousClickedElement = null;
                currentScore++;
            }, 1000);
        }
    }
    scoreKeeper.innerText = `Number of tries ${currentScore}`;
}

/**
 * Function that checks if game is still going
 */
function handleGameState() {
  for (let card of cards) {
    if (card.classList.contains("hide")) {
      return;
    }
  }
  gameFinished.innerText = "Game finished. Play again!";
  let lowestScore = Number(localStorage.getItem("low-score")) || Infinity;
  if (currentScore < lowestScore) {
    scoreKeeper.innerText = `${currentScore} is the new lowest score. Low is good! ;)`;
    localStorage.setItem("low-score", currentScore);
  }
}


function renderGame(arr) {
    for (let index = 0; index < arr.length; index++) {
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