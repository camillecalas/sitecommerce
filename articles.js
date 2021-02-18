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



// MENU CACHE
const menuCache = document.querySelector('.menuCache');
const dropdown =document.querySelector('.dropdown');

dropdown.addEventListener('mouseenter', function(){
  menuCache.classList.add('menuCache_open');
  });

menuCache.addEventListener('mouseleave', function(){
  menuCache.classList.remove('menuCache_open');
  });

links.forEach(link =>{
    link.addEventListener('click', function(){
      dropdown.classList.remove('menu-open');
    })
  });