const close = document.querySelector('.close');
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-items');
const shadow = document.querySelector('.shadow');

hamburger.addEventListener("click", () => {
    menu.classList.add("show");
    shadow.classList.toggle('active')
});

close.addEventListener("click", () => {
    menu.classList.remove("show");
    menu.style.transition = "width 1s ease-in";
    shadow.classList.toggle('hidden');
});

