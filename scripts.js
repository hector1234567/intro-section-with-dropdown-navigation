const header = document.querySelector('.header');
const features = document.querySelector('.menu__option--features');
const company = document.querySelector('.menu__option--company');
const featuresSide = document.querySelector('.side-nav .menu__option--features');
const companySide = document.querySelector('.side-nav .menu__option--company');
const buttonShowMenu = document.querySelector('#button-show-menu');
const sideNav = document.querySelector('.side-nav');
const shadow = document.querySelector('.shadow');

const menuFeatures = document.querySelector('.nav--features');
const menuCompany = document.querySelector('.nav--company');
const menuFeaturesSide = document.querySelector('.side-nav .nav--features');
const menuCompanySide = document.querySelector('.side-nav .nav--company');

header.addEventListener('click', ev => {
    const link = ev.target.closest('a');

    if(!link) {
        if(buttonShowMenu.checked) {
            shadow.classList.remove('transparent');
            sideNav.classList.remove('width0');
        } else {
            shadow.classList.add('transparent');
            sideNav.classList.add('width0');
        }
        return;
    };

    if(link === features) {
        menuFeatures.classList.toggle('hidden');
    }
    if(link === company) {
        menuCompany.classList.toggle('hidden');
    }
});

sideNav.addEventListener('click', ev => {
    const link = ev.target.closest('a');

    if(link === featuresSide) {
        menuFeaturesSide.classList.toggle('hidden');
    }
    if(link === companySide) {
        menuCompanySide.classList.toggle('hidden');
    }
});