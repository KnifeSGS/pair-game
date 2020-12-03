'use strict';

const cards = document.querySelectorAll('.card');
const cardsFront = document.querySelectorAll('.flip-box-front');
const cardsBack = document.querySelectorAll('.flip-box-back');
const imgsArray = [...cardsBack];
let counter = 0;
const deckOfCards = ['batman', 'superman', 'wonderwoman', 'greenlantern', 'flash'];
const doubleDeck = deckOfCards.concat(deckOfCards);

const playTheGame = () => {
    insertCards();
    addFlipListener();
    addTimerListener();

    winConditions()
};

const shuffleCards = (array) => {
    let n = array.length;
    let copy = [];
    let i = '';
    while (n) {
        i = Math.floor(Math.random() * (n -= 1));
        copy.push(array.splice(i, 1)[0])
    }
    return copy
};

const insertCards = () => {
    const cardImgs = shuffleCards(doubleDeck);
    cardImgs.forEach((item, index) => cardsBack[index].classList.add(item));

};

const addFlipListener = () => {
    cards.forEach(card => {
        card.addEventListener('click', addFlip)
    })
};

const removeListener = (target) => {
    target.removeEventListener('click', addFlip)
};

const addFlip = (event) => {
    const flippedCard = event.target.parentElement;
    flippedCard.classList.toggle('card--flip');
    removeFlip();
};

const removeFlip = () => {
    const data = document.querySelectorAll('[data-card]');
    
};

const backFlip = () => {

};

const addTimerListener = () => {
    cards.forEach(card => {
        card.addEventListener('click', startTimer)
    })
};

const removeTimerListener = () => {
    cards.forEach(card => {
        card.removeEventListener('click', startTimer)
    })
};

const startTimer = () => {
    const timerContainer = document.querySelector('.time__display');
    let minutes = 0;
    let seconds = 0;
    const timer = setInterval(() => {
        seconds += 1;
        let sec;
        let min;
        seconds < 10 ? sec = `0${seconds}` : sec = `${seconds}`
        minutes < 10 ? min = `0${minutes}` : min = `${minutes}`
        timerContainer.textContent = `${min}:${sec}`;
        seconds === 60 ? (minutes += 1, seconds = 0) : '';
    }, 1000)
    removeTimerListener()
    return timer
};

const isPair = () => {
    let pairs = [];
    const flashCards = document.querySelectorAll('.flash');
    const batCards = document.querySelectorAll('.batman');
    const wonderCards = document.querySelectorAll('.wonderwoman');
    const superCards = document.querySelectorAll('.superman');
    const greenCards = document.querySelectorAll('.greenlantern');
    
    

    counter = pairs.length
}

const winConditions = () => {
    counter === 5 ? setInterval(restartGame, 5000) : '';
};

const restartGame = () => {
    const timerContainer = document.querySelector('.time__display');
    timerContainer.textContent = '00:00';
    clearInterval(timer);
};

playTheGame()