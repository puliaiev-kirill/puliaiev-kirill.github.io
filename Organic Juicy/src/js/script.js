const menuIcon = document.querySelector(".menu__icon"),
      header = document.querySelector("header");


menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('menu__icon--active');
    header.classList.toggle("header--mobile");
});


// slider

const sliderArrows = document.querySelector(".slider-arrows"),
      slidesArrows = sliderArrows.querySelectorAll(".slider-arrows__item"),
      prev = sliderArrows.querySelector(".slider-arrows__arrow--left"),
      next = sliderArrows.querySelector(".slider-arrows__arrow--right");


console.log(next);

let slideIndex = 0; 

prev.addEventListener("click", () => showSliderArrows(-1));
next.addEventListener("click", () => showSliderArrows(1));

function showSliderArrows(n){
    // console. log(n);

    slideIndex += n;

    if (slideIndex < 0){
        slideIndex = slidesArrows.length -1;
    }
    if(slideIndex >= slidesArrows.length) slideIndex = 0;

    slidesArrows.forEach(item => item.style.display ="none");
    slidesArrows[slideIndex].style.display = "block";

}

showSliderArrows(0);
