const prevBtn = document.getElementById('left')
const nextBtn = document.getElementById('right')
const imgList = document.querySelectorAll('#imgs img')
const imageContainer = document.getElementById('imgs')

let idx = 0
let interval = setInterval(run, 2000)

function run() {
    idx++
    changeImage()
}

function changeImage() {
    if (idx > imgList.length - 1) {
        idx = 0
    } else if (idx < 0) {
        idx = imgList.length - 1
    }

    imageContainer.style.transform = `translateX(${-idx * 500}px)`
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

nextBtn.addEventListener('click', () => {
    idx++
    changeImage()
    resetInterval()
})

prevBtn.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})
