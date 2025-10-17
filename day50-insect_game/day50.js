const game_container = document.getElementById('game-container')
const start_btn = document.getElementById("start-btn")
const screen = document.querySelector(".screen")
const scoreEl = document.getElementById('score')
const timeEl = document.getElementById('time')

let seconds = 0
let score = 0


start_btn.addEventListener('click', () => {
    screen.classList.add('up')
    setTimeout(createInsect, 1000)
    startGame()
})

function startGame() {
    setInterval(increaseTime, 1000)
}


/**use for timer counter */
function increaseTime() {
    let m = Math.floor(seconds / 60)
    let s = seconds % 60
    m = m < 10 ? `0${m}` : m //used shorthand if to display time in a format
    s = s < 10 ? `0${s}` : s
    timeEl.innerHTML = `Time: ${m}:${s}`
    seconds++
}


//**raise score each time an insect is 'caught' */
function increaseScore() {
    score++
    if(score > 19) {
        message.classList.add('visible')
    }
    scoreEl.innerHTML = `Score: ${score}`
}


/**returns value x,y to place img of insect on screen. 
 * Area for that will be smaller that viewport*/
function getRandomLocation() {
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100
    return { x, y }
}

function catchInsect() {
    increaseScore()
    this.classList.add('caught')
    setTimeout(() => this.remove(), 2000)
    addInsects()
}

function addInsects() {
    setTimeout(createInsect, 1000)
    setTimeout(createInsect, 1500)
}


const insectList = [
    "./img/fly.png",
    "./img/mos.png",
    "./img/spi.png",
    "./img/roach.png",
]

function createInsect() {
    const insect = document.createElement('div')
    insect.classList.add('insect')
    const { x, y } = getRandomLocation()
    insect.style.top = `${y}px`
    insect.style.left = `${x}px`
    let selected_insect = insectList[Math.floor(Math.random() * insectList.length)]
    insect.innerHTML = `<img src="${selected_insect}"
                        alt="gross"
                        style="transform: rotate(${Math.random() * 360}deg)" />`
    
    insect.addEventListener('click', catchInsect)

    game_container.appendChild(insect)
}
