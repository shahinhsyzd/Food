'use strict';
const addition = document.querySelector('.addition');
const menuBtn = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');
const sideBar = document.querySelector('.side-navbar');
const toggleBtn = document.querySelector('.toggle-btn');
const hiddenClass = document.querySelector('.hidden');

// menuBtn.addEventListener('click', function () {
//     addition.classList.toggle('hidden');
//     overlay.classList.toggle('hidden');
// });
toggleBtn.addEventListener('click', function () {
    toggleBtn.classList.toggle('open');
    sideBar.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
});
overlay.addEventListener('click', function () {
    addition.classList.add('hidden');
    overlay.classList.add('hidden');
    sideBar.classList.add('hidden');
});