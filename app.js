
console.log("app.js loaded");

const btn = document.getElementById('btn-fact');
const factText = document.getElementById('fact-text');
const tarsImg = document.getElementById('tars');

let dodging = true;
const dodgeRadius = 100;
const dodgeDuration = 60000;

function moveButtonRandomly() {
    const btnWidth = btn.offsetWidth;
    const btnHeight = btn.offsetHeight;
    const maxX = window.innerWidth - btnWidth;
    const maxY = window.innerHeight - btnHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    btn.style.left = `${randomX}px`;
    btn.style.top = `${randomY}px`;
}

function sayRandomTaunt() {
    const randomIndex = Math.floor(Math.random() * TAUNTS.length);
    factText.textContent = TAUNTS[randomIndex];
}

moveButtonRandomly();

document.addEventListener('mousemove', (event) => {
    if (!dodging) return;

    const rect = btn.getBoundingClientRect();
    const btnCenterX = rect.left + rect.width / 2;
    const btnCenterY = rect.top + rect.height / 2;

    const distance = Math.hypot(event.clientX - btnCenterX, event.clientY - btnCenterY);

    if (distance < dodgeRadius) {
        moveButtonRandomly();
        sayRandomTaunt();
    }
});

setTimeout(() => {
    dodging = false;
    btn.style.transition = 'background 0.15s, transform 0.1s, top 0.2s ease, left 0.2s ease';
    factText.textContent = "Fine, here's your fact (get a job, jeez)";
}, dodgeDuration);

btn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * FACTS.length);
    const chosenFact = FACTS[randomIndex];

    factText.textContent = chosenFact.text;
    tarsImg.src = chosenFact.image;
});

const jokeCorner = document.getElementById('joke-corner');
const jokeText = document.getElementById('joke-text');

jokeCorner.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * JOKES.length);
    jokeText.textContent = JOKES[randomIndex];
});