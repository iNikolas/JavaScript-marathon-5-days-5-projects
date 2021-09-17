const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
    slide.addEventListener('click', addActiveClassToNode)
}

function addActiveClassToNode(event) {
    clearActiveClassesFromAllNodes()
    event.target.classList.add('active')
}

function clearActiveClassesFromAllNodes() {
    for (const slide of slides) {
        slide.classList.remove('active')
    }
}