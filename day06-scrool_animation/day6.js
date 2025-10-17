const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4
    // this above formula returns 4/5 of screen height by pixel
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        // console.log(box.getBoundingClientRect())
        if(boxTop < triggerBottom) { 
            //if box's distance from top of window is less than 4/5 of screen height
            // It means that it is now above the bottom 1/5 of the screen
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}