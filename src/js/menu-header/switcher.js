const inputCheck = document.querySelector('#color-toggle');

inputCheck.addEventListener('check', (e) => {
    if (inputCheck.checked = true) {
        localStorage.setItem('theme', `dark`)
    } else {
        localStorage.setItem('theme', `light`)
    }
});