const startBtn = document.querySelector('#start')
const timerOptions = document.querySelector('#time-list')
const screens = document.querySelectorAll('.screen')
const timerElement = document.querySelector('#time')
const gameBoard = document.querySelector('#board')
const circleElement = document.createElement('div')
const MAX_CIRCLE_DIAMETER_IN_PX = 60
const MIN_CIRCLE_DIAMETER_IN_PX = 3
//according to the 'border-radius' CSS property
const RESTRICTED_ZONE_IN_PX = 30
let timeLeft = 0
let score = 0
let misses = 0
circleElement.className = 'circle'
gameBoard.onclick = onBoardClick
const boardWidth = gameBoard.clientWidth
const boardHeight = gameBoard.clientHeight

startBtn.onclick = (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
}

timerOptions.onclick = (event) => {
    if (event.target.classList.contains('time-btn')) {
        timeLeft = parseInt(event.target.innerText)
        setTimer(timeLeft)
        screens[1].classList.add('up')
        gameStart()
    }
}

function gameStart() {
    gameBoard.append(circleElement)
    generateCirclePositionDimensionAndColor()
    const timeCount = setInterval(() => {
        setTimer(--timeLeft)
        if (timeLeft === 0) {
            clearInterval(timeCount)
            gameOver()
        }
    }, 1000)
}

function setTimer(time) {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    timerElement.innerHTML = `${minutes > 9 ? minutes : '0' + minutes}:${seconds > 9 ? seconds : '0' + seconds}`
}

function onBoardClick(event) {
    if (event.target.classList.contains('circle')) {
        console.log(++score)
        generateCirclePositionDimensionAndColor()
    } else {
        console.log(++misses)
    }
}

function generateCirclePositionDimensionAndColor() {
    getRandomCircleColor()
    const circleDiameter = MIN_CIRCLE_DIAMETER_IN_PX + Math.floor(Math.random() * (MAX_CIRCLE_DIAMETER_IN_PX - MIN_CIRCLE_DIAMETER_IN_PX) + 1)
    let posX = Math.floor(Math.random() * (boardWidth + 1))
    let posY = Math.floor(Math.random() * (boardHeight + 1))
    if (posX < circleDiameter) posX = circleDiameter
    if (posY < circleDiameter) posY = circleDiameter
    if (posX > (boardWidth - circleDiameter)) posX = boardWidth - circleDiameter
    if (posY > (boardHeight - circleDiameter)) posY = boardHeight - circleDiameter
    if (posX < RESTRICTED_ZONE_IN_PX & posY < RESTRICTED_ZONE_IN_PX) {
        posX = RESTRICTED_ZONE_IN_PX
        posY = RESTRICTED_ZONE_IN_PX
    }
    if (posX > (boardWidth - RESTRICTED_ZONE_IN_PX) & posY > (boardHeight - RESTRICTED_ZONE_IN_PX)) {
        posX = boardWidth - RESTRICTED_ZONE_IN_PX
        posY = boardHeight - RESTRICTED_ZONE_IN_PX
    }
    if (posX > (boardWidth - RESTRICTED_ZONE_IN_PX) & posY < RESTRICTED_ZONE_IN_PX) {
        posX = boardWidth - RESTRICTED_ZONE_IN_PX
        posY = RESTRICTED_ZONE_IN_PX
    }
    if (posX < RESTRICTED_ZONE_IN_PX & posY < posY > (boardHeight - RESTRICTED_ZONE_IN_PX)) {
        posX = RESTRICTED_ZONE_IN_PX
        posY = boardHeight - RESTRICTED_ZONE_IN_PX
    }
    circleElement.style.width = `${circleDiameter}px`
    circleElement.style.height = `${circleDiameter}px`
    circleElement.style.left = `${posX < circleDiameter ? circleDiameter : posX}px`
    circleElement.style.top = `${posY < circleDiameter ? circleDiameter : posY}px`
}

function gameOver() {
    gameBoard.innerHTML = `<div><h1>Счет: <span class="primary">${score}</span></h1><br><h1>Промахов: <span class="primary">${misses}</span></h1><div>`
    timerElement.parentElement.classList.add('hide')
}

function getRandomCircleColor() {
    const color = getRandomColor()
    circleElement.style.background = `${color}`
    circleElement.style.boxShadow = `0 0 6px ${color}, 0 0 15px ${color}`
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
}