
// MENU BURGER

const burger = document.querySelector('.burger');
const menu = document.querySelector('nav');
const menuDeskstop = document.querySelector('.pretAPorter');

burger.addEventListener('click', function(){
menu.classList.toggle('menu-open');
});

// menuDeskstop.addEventListener('click', function(){
// menu.classList.toggle('menu-open');
// })



// INTRO ANIMATION
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1});
tl.fromTo(".icones", { opacity: 0 }, { opacity: 1, duration: 1}, "-=1");
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");






// SCROLL HEADER
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}










// let observer = new IntersectionObserver(function (observables) {

//     observables.forEach(function(observable) {

//         if (observable.intersectionRatio > 0.5) {

//            observable.target.classList.remove('not-visible')
        
//             console.log('Item visible')
//         }
//     })
// }, {
// threshold: [0.5]
// })

// let items = document.querySelectorAll('.images')
// items.forEach(function(item){
//     item.classList.add('not-visible')
//     observer.observe(item)
// })