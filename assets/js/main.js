// SCROLL REVEAL ANIMATION
const sr = ScrollReveal ({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});


sr.reveal(`.offer, 
            .brands, .title, .row, .testimonial, 
            .footer`,{
                interval: 200
            })

// SLIDE SHOW TESTIMONIAL

var slideIndex = 0;
showSlide();

function showSlide() {
    var i;
    var slides = document.getElementById("slideShow");
    for (i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }

    slideIndex++;

   if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000);
}