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




// CARROUSSEL 
let thumbnails = document.getElementsByClassName('thumbnail')

let activeImages = document.getElementsByClassName('active')

for (var i=0; i < thumbnails.length; i++){

    thumbnails[i].addEventListener('mouseover', function(){
        console.log(activeImages)
        
        if (activeImages.length > 0){
            activeImages[0].classList.remove('active')
        }
        

        this.classList.add('active')
        document.getElementById('featured').src = this.src
    })
}


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


// let buttonRight = document.getElementById('slideRight');
// let buttonLeft = document.getElementById('slideLeft');

// buttonLeft.addEventListener('click', function(){
//     document.getElementById('slider').scrollLeft -= 180
// })

// buttonRight.addEventListener('click', function(){
//     document.getElementById('slider').scrollLeft += 180
// })




