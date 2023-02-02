console.log('Оценка за задание: 100 баллов')
console.log('Мой diskord - gromotron5525#6640')
console.log('Мой telegram - https://t.me/gromotron')

let burgerBlock = document.getElementById('burgerMenuBlock');
let burgerMenu = document.querySelector('.burgerMenu');

//Activate burger menu
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

//Service blur
// let serviceBtnBlock = document.querySelector('.serviceBtnBlock');
let countServ = 0; //countServiceBtnActive
document.querySelector('.serviceBtnBlock').addEventListener('click', clickSevice);
function clickSevice(event) {
    if (event.target.type == 'button') {
        let list = event.target.classList;
        let id = event.target.id;
        if (list == 'btn btnService btnActive') {
            list.remove('btnActive');
            countServ--;
            blurAll(countServ, id, false);
        } else {
            if (countServ<2) {
                list.add('btnActive');
                countServ++;
                blurAll(countServ, id, true);
            }
        }
    }
}
function blurAll (count, id, bool) {
    if (count == 1) {
        if (bool == true) {
            document.querySelectorAll('.serviceItem').forEach((item) => {
                item.classList.add('blure');
            });
            document.querySelectorAll('.'+id).forEach((item) => {
                item.classList.remove('blure');
            });
        } else {
            document.querySelectorAll('.'+id).forEach((item) => {
                item.classList.add('blure');
            });
        }
    } else if (count > 1) {
        document.querySelectorAll('.'+id).forEach((item) => {
            item.classList.remove('blure');
        });
    } else {
        document.querySelectorAll('.serviceItem').forEach((item) => {
            item.classList.remove('blure');
        });
    }
}


// price accordion
let countPrice = 0;
document.querySelector('.priceItemBlock').addEventListener('click', clickPrice);
function clickPrice(event) {
    let et = event.target;
    if (et.classList.contains('priceItemActive') == true) {
        countPrice = 0;
        return clickPriceClear();
    } else if(countPrice > 0) {
        clickPriceClear();
        countPrice = 0;
    }
    if (et.classList.contains('priceClick') == true) {
        if (et.classList.contains('priceItemCard') == true) {
            et.classList.add('priceItemActive');
            et.nextElementSibling.classList.remove('dNone');
            console.log(et.nextElementSibling.classList)
            console.log(1)
            countPrice++;
            return
        } else if (et.parentElement.parentElement.classList.contains('priceItemCard') == true) {
            et.parentElement.parentElement.classList.add('priceItemActive');
            console.log(2)
            et.parentElement.nextElementSibling.classList.remove('dNone');
            countPrice++;
            return
        } else {
            et.parentElement.parentElement.parentElement.classList.add('priceItemActive');
            console.log(3)
            et.parentElement.parentElement.nextElementSibling.classList.remove('dNone');
            countPrice++;
            return
        }
    }
}
function clickPriceClear () {
    document.querySelectorAll('.priceItemActive').forEach((item) => {
        item.classList.remove('priceItemActive');
    });
    document.querySelectorAll('.pIF').forEach((item) => {
        item.classList.add('dNone');
    });
}
