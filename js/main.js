'use strict';

const cards = document.querySelectorAll('.card');
const cardsFront = document.querySelectorAll('.flip-box-front');
const cardsBack = document.querySelectorAll('.flip-box-back');
const imgsArray = [...cardsBack];
let counter = 0;

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
    const cardImgs = shuffleCards(imgsArray);
    const rndImgs = cardImgs.map(item => cardsBack.textContent = item);
    return rndImgs
};

const addFlipListener = () => {
    cards.forEach(card => {
        card.addEventListener('click', addFlip)
    })
};

const addBackListener = () => {
    cardsBack.forEach(card => {
        card.addEventListener('click', backFlip)
    })
};

const removeListener = (target) => {
    target.removeEventListener('click', addFlip)
};

const addFlip = (event) => {
    const flippedCard = event.target;
    flippedCard.classList.toggle('card--flip');
};

const removeFlip = () => {
    // const remove = 
    removeListener(event.target)
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

const winConditions = () => {
    counter === 5 ? setInterval(restartGame, 5000) : '';
};

const restartGame = () => {
    const timerContainer = document.querySelector('.time__display');
    timerContainer.textContent = '0:0';
    clearInterval(timer);
};

playTheGame()