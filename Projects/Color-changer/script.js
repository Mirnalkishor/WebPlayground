const buttons = document.querySelectorAll('.color-button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        document.body.className = '';
        document.body.style.backgroundColor = button.id;
    });
});