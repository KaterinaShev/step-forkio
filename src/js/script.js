// function testWebP(callback) {
//     var webP = new Image();
//     webP.onload = webP.onerror = function () {
//     callback(webP.height == 2);
//     };
//     webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
//     }
//     testWebP(function (support) {
//     if (support == true) {
//     document.querySelector('body').classList.add('webp');
//     }else{
//     document.querySelector('body').classList.add('no-webp');
//     }
//     });

// let btn = document.querySelector('.menu-btn');
// let menu = document.querySelector('.navigation');
// let line = document.querySelector('menu-btn__line');
// btn.addEventListener("click", function (e) {
//     menu.classList.toggle("active");
// });
// line.addEventListener("click", function (e) {
//     btn.classList.toggle("active");
// });

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