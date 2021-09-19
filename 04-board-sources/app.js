const board = document.getElementById('board')
const SQUARES_NUMBER = 600
const ANIMATION_DELAY = 2000

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const squareDiv = document.createElement('div')
    squareDiv.className = 'square'
    squareDiv.onmouseover = onMouseOver
    board.appendChild(squareDiv)
}

function onMouseOver(event) {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    const color = `rgb(${r}, ${g}, ${b})`
    event.target.style.backgroundColor = color
    event.target.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    setTimeout(() => {
        event.target.style.backgroundColor = ''
        event.target.style.boxShadow = ''
    }, ANIMATION_DELAY)
}