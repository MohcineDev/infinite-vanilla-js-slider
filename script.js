const slider = document.querySelector('.slider')
const slides = document.querySelector('.slides')
const cards = document.querySelectorAll('.slides .card')
const btns = document.querySelectorAll('.btns button')

let index = 1
let cardIndex = 2
let slidewidth = null

 

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
