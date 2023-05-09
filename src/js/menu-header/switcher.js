const inputCheck = document.querySelector('#toggle');

inputCheck.addEventListener('change', (e) => {
    if (inputCheck.checked === true) {
        localStorage.setItem('theme', `dark`)
    } else {
        localStorage.setItem('theme', `light`)
    }
});
