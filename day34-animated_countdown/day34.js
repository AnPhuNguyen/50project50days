const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const finalMessage = document.querySelector('.final')
const replay = document.querySelector('#replay')

document.addEventListener('DOMContentLoaded', ()=>{
    runAnimation()
})



replay.addEventListener('click', () => {
    resetDOM()
    runAnimation()
})

function resetDOM() {
    counter.classList.remove('hide')
    finalMessage.classList.remove('show')
    nums.forEach((num) => {num.classList.value = ''})
    nums[0].classList.add('in')
}

function runAnimation() {
    let current = 0;
    const timer = setInterval(() => {
        nums[current].classList.remove('in');
        current++;
        if (current < nums.length) {
            nums[current].classList.add('in');
        } else {
            counter.classList.add('hide');
            finalMessage.classList.add('show');
            clearInterval(timer);
        }
    }, 1000);
}
