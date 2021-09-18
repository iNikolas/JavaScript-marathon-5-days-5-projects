const items = document.getElementsByClassName('item')
const item = items[0]
const dropzones = document.getElementsByClassName('dropzone')

for (const dropzone of dropzones) {
    dropzone.addEventListener('dragenter', dragEnter)
    dropzone.addEventListener('dragleave', dragLeave)
    dropzone.addEventListener("dragover", dragOver)
    dropzone.addEventListener("drop", drop);
}

item.addEventListener('dragstart', dragStart)
item.addEventListener('dragend', dragEnd)

function dragStart(event) {
    const draggingElement = event.target
    draggingElement.classList.add('hold')
    setTimeout(() => draggingElement.classList.add('hide'))
}

function dragEnd(event) {
    const draggingElement = event.target
    draggingElement.className = 'item'
}

function dragEnter(event) {
    const dropzone = event.target
    dropzone.classList.add('hovered')
}

function dragLeave(event) {
    const dropzone = event.target
    dropzone.classList.remove('hovered')
}

function dragOver(event) {
    event.preventDefault()
}

function drop(event) {
    const dropzone = event.target
    dropzone.className = 'dropzone'
    dropzone.appendChild(item)
}