/*burger burger-active */
const burger = document.querySelector('.burger');
const burgerActive = document.querySelector(".burger-active");
const navBar = document.querySelector(".navbar");
const body = document.querySelector("body")
const brandname = document.querySelector(".brandname");
export const menuBurgerInit = () => {
    const menuToggle = () => {
        burger.classList.toggle("burger-active");
        body.classList.toggle("fixed");
        navBar.classList.toggle("navbar-active");
        brandname.classList.toggle("brandname-active");
    }
    burger.addEventListener('click', menuToggle);
}