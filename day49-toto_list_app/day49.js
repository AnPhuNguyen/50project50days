const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUL = document.getElementById('todos')

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let todo_input = input.value
    if (!todo_input)
        return;

    const todoElm = document.createElement('li')
    todoElm.innerText = todo_input
    todoElm.addEventListener('click', () => {
        todoElm.classList.toggle('completed')
    })

    todoElm.addEventListener('contextmenu', (e) => {
        e.preventDefault()
        todoElm.remove()
    }) 
//pc:  "click" need left-click, 'contextmenu' need right-click
    todosUL.appendChild(todoElm)
    input.value = ''

})