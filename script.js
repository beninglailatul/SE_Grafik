fetch('./Data_Dashboard.json')
    .then(response => response.json())
    .then(data => { 
    });


const menuToogle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('.navbar .menu');

menuToogle.addEventListener('click', function () {
    nav.classList.toggle('slide');
});
       