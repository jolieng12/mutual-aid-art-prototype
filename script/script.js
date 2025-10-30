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
        if (pressed=='false') {
            button.setAttribute('aria-pressed', 'true');
            heart.setAttribute('class', 'bi bi-heart-fill');
        } else {
            button.setAttribute('aria-pressed', 'false');
            heart.setAttribute('class', 'bi bi-heart');
        }
    });
});

/* Modal */
addEventBtn = document.querySelector('#event-btn');
submitEventBtn = document.querySelector('#submit-event-btn')
closeBtn = document.querySelector('.close');
modal = document.querySelector('.modal');

addEventBtn.addEventListener('click', e => {
    let pressed = addEventBtn.getAttribute('aria-pressed');
    console.log(pressed);
    if (pressed == 'false') {
        
        modal.setAttribute('class', 'modal container d-block');
        addEventBtn.setAttribute('aria-pressed', 'true');
    } else {
        modal.setAttribute('class', 'modal container');
        addEventBtn.setAttribute('aria-pressed', 'false');
    }
});

submitEventBtn.addEventListener('click', e => {
    modal.setAttribute('class', 'modal container');
    addEventBtn.setAttribute('aria-pressed', 'false');
});

closeBtn.addEventListener('click', e => {
    modal.setAttribute('class', 'modal container');
    addEventBtn.setAttribute('aria-pressed', 'false');
});