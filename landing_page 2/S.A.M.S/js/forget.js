// Role button active toggle
const roleButtons = document.querySelectorAll('.role');
roleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        roleButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});
