const ratings = document.querySelectorAll(".rating")
const ratingsContainer = document.querySelector('.ratings-container')

const ratePanel = document.getElementById("panel")
const endPanel = document.getElementById("ending")
const sendBtn = document.getElementById('send')
const rate = document.getElementById("rate")

let selectedRating = 'Satisfied'


ratingsContainer.addEventListener('click', (e) => {
    if(e.target.parentNode.classList.contains('rating')) {
        removeActive()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.nextElementSibling.innerHTML
    }
})


sendBtn.addEventListener('click', ()=>{
    ratePanel.style.display = 'none'
    endPanel.style.display = 'inline'
    rate.innerText = selectedRating
})

function removeActive() {
    for(let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active')
    }
}