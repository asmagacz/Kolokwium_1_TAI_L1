let button = document.querySelector('.button');
let div = document.querySelector('.box')


button.addEventListener('click', function () {
    div.classList.remove('box');
    div.classList.add('red');
});