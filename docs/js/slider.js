


export const sliderInit = () => {

    
      
const mySwiper = new Swiper(".swiper-container", {
    slidesPerView: 3,
    slidesPerView: 'auto',
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
      draggable: true,
      snapOnRelease: true, 
      dragSize: "80px"

    }
  });

      document.addEventListener("DOMContentLoaded", (e) => {
        const target = document.querySelector(".swiper-scrollbar-drag");
        const element = document.createElement("span");
        element.classList.add("swiper-scrollbar-drag__ball");
        target.appendChild(element);
      });
     
    
}