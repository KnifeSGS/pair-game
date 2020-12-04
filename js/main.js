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
    const flippedCardHero = flippedCard.lastElementChild.classList.value;
    isPair(flippedCardHero, flippedCard);
};

const backFlip = () => {
    cards.forEach(item => item.classList.toggle('card--flip'));
};

const wrongFlip = () => {
    setTimeout(function(){
        flips.forEach(item => item.classList.toggle('card--flip'));
        flips = [];
    }, 1000)
    pairs = [];
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

let timer;

const startTimer = () => {
    const timerContainer = document.querySelector('.time__display');
    let minutes = 0;
    let seconds = 0;
    timer = setInterval(() => {
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

let pairs = [];
let flips = [];

const isPair = (pair, flippedCard) => {
    pairs.push(pair)
    flips.push(flippedCard)
    if (pairs.length === 2) {
        if (pairs.every((item, index, pairs) => item === pairs[0])) {
            pairs = [];
            flips = [];
            counter += 1;
            winConditions();
        } else {
            wrongFlip();  
        }
    }  
};

const winConditions = () => {
    counter === 5 ? clearInterval(timer) : '';
    counter === 5 ? setTimeout(restartGame, 5000) : '';
};

const restartGame = () => {
    const timerContainer = document.querySelector('.time__display');
    timerContainer.textContent = '00:00';
    backFlip()
    clearInterval(timer);
};

playTheGame()