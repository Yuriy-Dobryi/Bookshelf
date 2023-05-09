// Switch Theme Mode

const main = document.querySelector('main');

const body = document.querySelector('body');
const toggle = document.querySelector('.toggle');

let getMode = localStorage.getItem('mode');
if( getMode && getMode === 'dark'){
    body.classList.add('dark');
    toggle.classList.add("active");
}

toggle.addEventListener('click', () =>{
    body.classList.toggle('dark');
    
    if(!body.classList.contains('dark')) {
        return localStorage.setItem('mode', 'ligth');
    }
        localStorage.setItem('mode', 'dark');
});

toggle.addEventListener('click',() => {
    return toggle.classList.toggle("active");
});