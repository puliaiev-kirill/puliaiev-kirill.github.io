const sliderTabs = document.querySelector(".slider__tab"),
      slidesTabs = sliderTabs.querySelectorAll(".tab__img"),
      wrapperTabs = sliderTabs.querySelector(".tab__btn-list");
    

const tabs = [];

for (let i = 0; i < slidesTabs.length; i++){

    const tab = document.createElement("button");
    tab.dataset.SlideTo = i;

    tab.classList.add("tab__btn");
    tab.append("TAB SECTION ");

    if (i == 0) tab.classList.add("tab__btn--active");
    if (i != 0) slidesTabs[i].style.display ="none";

    tab.addEventListener("click" , showSlideTabs)

    wrapperTabs.append(tab);
    tabs.push(tab);
    // console.log(tab);

}

function showSlideTabs(event){
    const slideTo = event.target.dataset.SlideTo;
    // console.log(slideTo);

    slidesTabs.forEach(img => img.style.display="none"); 
    slidesTabs[slideTo].style.display="block";

    tabs.forEach(tab => tab.classList.remove("tab__btn--active"));
    event.target.classList.add("tab__btn--active");


}