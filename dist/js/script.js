'use strict'

function burger() {
    let btn = document.querySelector(".header__button");
    let menu = document.querySelector('.navigation');
    let line = document.querySelector('.header__button-line');

    btn.addEventListener("click", () => {
        menu.classList.toggle("active");
        line.classList.toggle("active")
    });
}
burger();