function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobileMenuContainer');
    if (mobileMenu.style.right === '0px') {
        mobileMenu.style.right = '-100%';
    } else {
        mobileMenu.style.right = '0px';
    }
}


function closeMobileMenu() {
    const mobileMenu = document.querySelector('.mobileMenuContainer');
    mobileMenu.style.right = '-100%';
}


document.querySelectorAll('.mobileNav a').forEach(link => {
    link.addEventListener('click', () => {
        closeMobileMenu();
    });
});


const toggleSelectors = ['#hamburgerMenuIcon', '.mobileMenuClose'];


toggleSelectors.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        element.addEventListener('click', toggleMobileMenu);
    });
});

