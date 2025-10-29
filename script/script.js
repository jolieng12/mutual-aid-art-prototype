/*hamburger button */
hamburgerBtn = document.querySelector('#hamburger-btn');
mainNav = document.querySelector('#main-nav');
hamburgerIcon = document.querySelector('#hamburger-icon');
hamburgerBtn.addEventListener('click', (e) => {
    let expanded = hamburgerBtn.getAttribute('aria-expanded');
    if (expanded==='false') {
        hamburgerBtn.setAttribute('aria-expanded', 'true');
        mainNav.setAttribute('class', 'main-nav d-block');
        hamburgerIcon.setAttribute('class', 'bi bi-x-lg f-44');
    } else {
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        mainNav.setAttribute('class', 'main-nav');
        hamburgerIcon.setAttribute('class', 'bi bi-list f-44');
    }
});

/* Favorite buttons */
const favButtons = document.querySelectorAll('.favorite-btn')
const hearts = document.querySelectorAll('.bi-heart');

favButtons.forEach((button, index) => {
    const heart = hearts[index];
    button.addEventListener('click', (e) => {
        let pressed = button.getAttribute('aria-pressed');
        console.log(pressed);
        if (pressed=='false') {
            button.setAttribute('aria-pressed', 'true');
            heart.setAttribute('class', 'bi bi-heart-fill');
        } else {
            button.setAttribute('aria-pressed', 'false');
            heart.setAttribute('class', 'bi bi-heart');
        }
    });
});