const body = document.body
const buttonUp = document.querySelector('.up-button')
const buttonDown = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')

const slidesCount = mainSlide.getElementsByTagName('div').length
let activeSlideIndex = 0
sidebar.style.top = `-${(slidesCount - 1) * 100}vh`


buttonUp.onclick = () => changeSlide('up')
buttonDown.onclick = () => changeSlide('down')
body.onkeydown = keyboardControl

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++
        activeSlideIndex === slidesCount ? activeSlideIndex = 0 : null
    } else if (direction === 'down') {
        activeSlideIndex--
        activeSlideIndex < 0 ? activeSlideIndex = slidesCount - 1 : null
    }
    mainSlide.style.transform = `translateY(-${activeSlideIndex * 100}%)`
    sidebar.style.transform = `translateY(${activeSlideIndex * 100}%)`
}

function keyboardControl(event) {
    if (event.key === 'ArrowUp') changeSlide('up')
    if (event.key === 'ArrowDown') changeSlide('down')
}