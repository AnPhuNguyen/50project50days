const smallCups = document.querySelectorAll('.cup-small')
const listers = document.getElementById('liters') //to the span element next to <small>Remained</small>
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx) {
    //below if-statement enable toggle:
    //  if current cup is already full but next cup is not, idx = idx-1 to 
    // remove 'full' class from that cup
    if(smallCups[idx].classList.contains('full') 
        && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }
    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    //percentage text: hide if no cup is selected, otherwise show ratio in percentage
    if(fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 200}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    
    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        listers.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}