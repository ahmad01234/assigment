let menuList = document.getElementById("menuList")
menuList.style.maxHeight = "0px";

function toggleMenu() {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "300px";

    } else {

        menuList.style.maxHeight = "0px";
    }
}

const navbar = document.querySelector('.navbar-container');
const navbar1 = document.querySelector('.logo');
const navbar2 = document.querySelector('.text');
const navbar3 = document.querySelector('.text2');
const navbar4 = document.querySelector('.text3');
const navbar5 = document.querySelector('.text4');
const navbar6 = document.querySelector('.text5');

window.addEventListener('scroll', () => {


    if (window.scrollY >= 60) {

        navbar.classList.add('navbar-scrolled');
        navbar1.classList.add('navbar-text');
        navbar2.classList.add('navbar-text');
        navbar3.classList.add('navbar-text');
        navbar4.classList.add('navbar-text');
        navbar5.classList.add('navbar-text');
        navbar6.classList.add('navbar-text');
    } else if (window.scrollY < 60) {

        navbar.classList.remove('navbar-scrolled');
        navbar1.classList.remove('navbar-text');
        navbar2.classList.remove('navbar-text');
        navbar3.classList.remove('navbar-text');
        navbar4.classList.remove('navbar-text');
        navbar5.classList.remove('navbar-text');
        navbar6.classList.remove('navbar-text');
    }
});
