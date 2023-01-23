console.log('Оценка за задание: 75 баллов')
console.log('Мой diskord - gromotron5525#6640')
console.log('Мой telegram - https://t.me/gromotron')

let burgerBlock = document.getElementById('burgerMenuBlock');
let burgerMenu = document.querySelector('.burgerMenu');
let burgA = document.querySelectorAll('.burgA');



document.querySelector('.burger').addEventListener('click', openBurger);
function openBurger(event) {
    burgerBlock.classList.remove('dNone');
    setTimeout(function(){burgerMenu.style.transform = 'translateX(0px)'},100);
}
document.querySelector('.btnX').addEventListener('click', closeBurger);
function closeBurger(event) {
    burgerMenu.style.transform = 'translateX(-380px)';
    setTimeout(function(){burgerBlock.classList.add('dNone')},900);
}
document.querySelector('.burgerLinkBlock').addEventListener('click', closeBurgerLink);
function closeBurgerLink(event) {
    if (event.target.classList == 'navA burgA') {
        closeBurger(event);
    }
}
burgerBlock.addEventListener('click', clickBurgerBlock);
function clickBurgerBlock(event) {
    if (event.target.id == 'burgerMenuBlock') {
        closeBurger(event);
    }
}
