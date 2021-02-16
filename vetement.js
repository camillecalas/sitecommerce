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


// let buttonRight = document.getElementById('slideRight');
// let buttonLeft = document.getElementById('slideLeft');

// buttonLeft.addEventListener('click', function(){
//     document.getElementById('slider').scrollLeft -= 180
// })

// buttonRight.addEventListener('click', function(){
//     document.getElementById('slider').scrollLeft += 180
// })




