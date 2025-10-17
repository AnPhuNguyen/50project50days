const codes = document.querySelectorAll('.code')

codes[0].focus()

codes.forEach((code, idx) => {
    // Prevent focus change via clicking
    code.addEventListener('mousedown', (e) => {
        e.preventDefault()
        // Only allow focus if it's the first input or the previous one is filled
        if (idx === 0 || codes[idx - 1].value !== '') {
            code.focus()
        }
    })

    // Prevent focus change via tab key
    code.addEventListener('keydown', (e) => {
        if (e.key === 'Tab' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            e.preventDefault()
            return
        }

        if(e.key >= 0 && e.key <=9) {
            codes[idx].value = ''
            setTimeout(() => codes[idx + 1]?.focus(), 10)
        } else if(e.key === 'Backspace') {
            if (codes[idx].value === '') {
                // If current input is empty, just move to previous
                setTimeout(() => codes[idx - 1]?.focus(), 10)
            } else {
                // If current input has value, clear it and move to previous
                codes[idx].value = ''
                setTimeout(() => codes[idx - 1]?.focus(), 10)
            }
        }
    })

    // Handle focus event to ensure proper focus management
    code.addEventListener('focus', () => {
        // Only allow focus if it's the first input or the previous one is filled
        if (idx > 0 && codes[idx - 1].value === '') {
            codes[idx - 1].focus()
        }
    })
})
