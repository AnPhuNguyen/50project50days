const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        // Create span element
        let ripple = document.createElement("span");

        // Add ripple class to span
        ripple.classList.add("ripple-effect");

        // Add span to the button
        this.appendChild(ripple);

        // Get position of X
        let x = e.clientX - e.currentTarget.offsetLeft;

        // Get position of Y
        let y = e.clientY - e.currentTarget.offsetTop;

        // Position the span element
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        // Remove span after 0.3s
        setTimeout(() => {
            ripple.remove();
        }, 300);
    });
});
