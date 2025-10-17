const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart',()=>{
    fill.classList.add('hold')
})

fill.addEventListener('dragend',()=>{
    fill.className = 'fill'
})

for (let i = 0; i < empties.length; i++){
    empties[i].addEventListener('dragover', (e)=>{
        e.preventDefault()
    });
    empties[i].addEventListener("dragenter", ()=>{
        empties[i].classList.add('hovered')
    });
    empties[i].addEventListener("dragleave", ()=>{
        empties[i].className = 'empty'
    });
    empties[i].addEventListener("drop", ()=>{
        empties[i].className = 'empty'
        empties[i].append(fill)
    });
}