const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
]

button.addEventListener('click', () => {
    const notif = document.createElement('div')
    notif.innerHTML = messages[Math.floor(Math.random() * messages.length)]
    notif.classList.add('toast')
    
    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 2000);
})