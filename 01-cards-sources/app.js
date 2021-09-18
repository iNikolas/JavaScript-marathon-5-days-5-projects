function slidesPlugin(slideNumber = 2) {
    const slides = document.querySelectorAll('.slide')

    slides[slideNumber].classList.add('active')

    for (const slide of slides) {
        slide.addEventListener('click', addActiveClassToNode)
    }

    function addActiveClassToNode(event) {
        if (event.currentTarget.classList.contains('active')) {
            event.currentTarget.classList.remove('active')
        } else {
            clearActiveClassesFromAllNodes()
            event.currentTarget.classList.add('active')
        }
    }

    function clearActiveClassesFromAllNodes() {
        for (const slide of slides) {
            slide.classList.remove('active')
        }
    }
}

slidesPlugin(3)