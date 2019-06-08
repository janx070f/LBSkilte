// JavaScript source code by Jan Andreassen 1071790 | Mmda0918 - 2019

    let hamburgerButton = document.querySelector('.NavButton');
    let mobileNav = document.querySelector('.mobile');

    function openMobile() {
        mobileNav.classList.add('open'); //Add the class open to the mobile class
    }

    function closeMobile() {
        mobileNav.classList.remove('open'); //remove the class open from the mobile class
    }

    hamburgerButton.addEventListener('click', openMobile); //when click use function openMobile
    mobileNav.addEventListener('click', closeMobile); //when click use function closeMobile
