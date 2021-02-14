
const burger = document.querySelector('.burger');
const menu = document.querySelector('nav');
const menuDeskstop = document.querySelector('.pretAPorter');

burger.addEventListener('click', function(){
menu.classList.toggle('menu-open');
});

// menuDeskstop.addEventListener('click', function(){
// menu.classList.toggle('menu-open');
// })



// const images = document.querySelectorAll('.lazyload');

// function handleIntersection(entries) {
//    entries.map((entry) => {
//      if (entry.isIntersecting) {
//        entry.target.src = entry.target.dataset.src; entry.target.classList.add('loaded')
//       observer.unobserve(entry.target);
//    }
//    });
//  }



