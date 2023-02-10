// query selector for toggler
const body = document.querySelector("body");
const toggle = document.querySelector("#toggle");
const sunIcon = document.querySelector(".toggle .bxs-sun");
const moonIcon = document.querySelector(".toggle .bx-moon");

toggle.addEventListener("change", () => {
    
    body.classList.toggle("dark");
    sunIcon.className = sunIcon.className == "bx bxs-sun" ? "bx bx-sun" : "bx bxs-sun";
    moonIcon.className = moonIcon.className == "bx bxs-moon" ? "bx bx-moon" : "bx bxs-moon";

});
// query selector for hamburger
const hamburger =document.querySelector('.header .nav-bar .hamburger');
const mobile_menu =document.querySelector('.header .nav-bar ul');
const header = document.querySelector('.header .container');

hamburger.addEventListener('click', ()=> {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});