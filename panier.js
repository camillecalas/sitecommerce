// MENU BURGER

const burger = document.querySelector('.burger');
const menu = document.querySelector('nav');
const liens = document.querySelectorAll('nav a')

burger.addEventListener('click', function(){
menu.classList.toggle('menu-open');
});

liens.forEach(lien =>{
  lien.addEventListener('click', function(){
    menu.classList.remove('menu-open');
  })
});
