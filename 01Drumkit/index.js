let clap = document.getElementById('clap');
let hihat = document.getElementById('hihat');
let kick = document.getElementById('kick');
let openhat = document.getElementById('openhat');
let boom = document.getElementById('boom');
let ride = document.getElementById('ride');
let snare = document.getElementById('snare');
let tom = document.getElementById('tom');
let tink = document.getElementById('tink');
const clapAudio = new Audio('/sounds/clap.wav');
const hihatAudio = new Audio('/sounds/hihat.wav');
const kickAudio = new Audio('/sounds/kick.wav');
const openhatAudio = new Audio('/sounds/openhat.wav');
const boomAudio = new Audio('/sounds/boom.wav');
const rideAudio = new Audio('/sounds/ride.wav');
const snareAudio = new Audio('/sounds/snare.wav');
const tomAudio = new Audio('/sounds/tom.wav');
const tinkAudio = new Audio('/sounds/tink.wav');

function tinkSound() {
    tinkAudio.play();
    tink.classList.add('playing');
    // removePlaying();
}

function tomSound() {
    tomAudio.play();
    tom.classList.add('playing');
    // removePlaying();
}

function snareSound() {
    snareAudio.play();
    snare.classList.add('playing');
    // removePlaying();
}

function rideSound() {
    rideAudio.play();
    ride.classList.add('playing');
    // removePlaying();
}

function boomSound() {
    boomAudio.play();
    boom.classList.add('playing');
    // removePlaying();
}

function openhatSound() {
    openhatAudio.play();
    openhat.classList.add('playing');
    // removePlaying();
}

function kickSound() {
    kickAudio.play();
    kick.classList.add('playing');
    // removePlaying();
}

function clapSound() {
    clapAudio.play();
    clap.classList.add('playing');
    // removePlaying();
}



function hihatSound() {
    hihatAudio.play();
    hihat.classList.add('playing');
    // removePlaying();
}

// function removePlaying() {
//     clapBtn.classList.remove('playing')
// }