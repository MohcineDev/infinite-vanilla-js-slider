const slider = document.querySelector('.slider')
const slides = document.querySelector('.slides')
const cards = document.querySelectorAll('.slides .card')
const btns = document.querySelectorAll('.btns button')
const test = document.querySelectorAll('.mobile')

let indexMobile = 2

let index = 1
let cardIndex = 2
let slidewidth = null

// test.forEach(item => item.addEventListener('click', () => {
//     if (item.id === 'left') {
//         indexMobile--
//         cardIndex--
//     }
//     else {
//         indexMobile++
//         cardIndex++
//     }

//     slidewidth = (cards[0].clientWidth + 40) * indexMobile

//     slides.style.transform = `translateX(-${slidewidth}px)`;

//     slides.style.transition = 'transform 0.2s';

// }))

console.log(getComputedStyle(document.querySelector(':root')).getPropertyValue('--slide-scroll'));


cards[cardIndex].classList.add('card-focus')

btns.forEach(btn => btn.addEventListener('click', () => {
    slide(btn)
}))

const slide = (btn) => {
    if (btn.id === 'left') {
        index--
        cardIndex--
    }
    else {
        index++
        cardIndex++
    }

    slidewidth = (cards[0].clientWidth + 40) * index

    slides.style.transform = `translateX(-${slidewidth}px)`;
    slides.style.transition = 'transform 0.2s';
    btn.disabled = true
}


slides.addEventListener('transitionend', () => {

    removeFocus()
    console.log('transitionend slidewidth : ' + slidewidth);

    if (cards[cardIndex].id === 'last') {
        slides.style.transform = `translateX(-${cards[0].clientWidth + 40}px)`;
        slides.style.transition = 'none'
        index = 1
        cardIndex = 2
    }
    else if (cards[cardIndex].id === 'first') {
        slides.style.transform = `translateX(-${(cards[0].clientWidth + 40) * 4}px)`
        slides.style.transition = 'none'
        index = 4
        cardIndex = 5
    }
    cards[cardIndex].classList.add('card-focus')
    btns[0].disabled = false
    btns[1].disabled = false
 })

// remove focus
const removeFocus = () => {

    cards.forEach(element => {
        element.classList.remove('card-focus')
    });
}
// 132

let mediaQuery = window.matchMedia('(max-width: 600px)');

handleSlide(mediaQuery) // Call listener function at run time

// mediaQuery.addListener(handleSlide, null) // Attach listener funct

function handleSlide(media) {
    if (media.matches) {

        console.log(media);
    }
}