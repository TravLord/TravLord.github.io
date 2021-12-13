function open_form() {
    document.getElementById("my_form").style.display = "block";    
}

function close_form() {
    document.getElementById("my_form").style.display = "none";
}
//THIS FUNCTION DISPLAYS THE 1ST IMG IN THE SLIDESHW WHEN PAGE LOADS*/
var slideIndex = 1;
showSlides(slideIndex);

//THIS FUNCTION CHANGES THE SLIDE WHEN THE LEFT OR RIGHT ARROWS ARE CLICKED
function plus_slides(n) {
    showSlides(slideIndex +=n);
}

//THIS FUNCTION CHANGES THE SLIDE WHEN THE DOTS ARE CLICKED
function current_slide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides"); // THIS TAKES ALL ELEMMTS WITH THE CLASS NAME "mySlides" STORES IN VARIABLE ARRAY "slides"
    var dots = document.getElementsByClassName("dot"); // STORES IN VARIABLE ARRAY "dots"
    if(n > slides.length) {slideIndex = 1}; // If n (the number passed into a function) is greater than the length of the array "slides" , the slideIndex is set to 1 
  // this (above) also resets the img to the first image in array on users screen when you've clicked nxt through every img/slide.
    if(n < 1) {slideIndex = slides.length}; // if n (the number passed into a function) is less than 1, the slideIndex is set to the length of the array "slides"
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none" // This for loop takes each item in the array "slides" and sets the display to none
    }
    for(i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active",""); //THIS FOR LOOP TAKES EACH ITEM IN THE ARRAY "dots" AND REMOVES "active" WHICH REMOVES THE ACTIVE STYLING
    }
    slides[slideIndex - 1].style.display = "block"; // THIS DISPLAYS THE IMG IN SLIDESHOW
    dots[slideIndex -1 ].className += " active"; // THIS ADDS THE ACTIVE STYLING TO THE DOT ASSOCIATED WITH THE IMG
}

// THIS CODE WILL CREATE THE CLOSE CONTACT FORM WHEN USER CLICKS OFF OF IT ANYWHERE ON SCREEN
// NEED TO ADD EVENT LISTENER (BELOW) TO DO THIS.  TO "LISTEN" FOR CLICKS
document.addEventListener("click" ,function(event){
    //HERE WE ARE SAYING IF THE CLICK HAPPENS ON THE CANCEL BUTTON OR ANYWHERE THAT IS NOT THE CONTACT FORM AMD THE CLICK DOES NOT HAPPEN ON ANY ELEMENT WITH CONTACT CLASS THEN CALL close_form() FUNCTION
    if(event.target.matches(".cancel") || !event.target.closest(".form_popup") && !event.target.closest(".pop_up_button") && !event.target.closest(".contact")){
        close_form()
    }
}, false )