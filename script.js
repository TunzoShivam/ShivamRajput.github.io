// 1. MOBILE MENU
const navToggle = document.getElementById('nav-toggle');
const navLinksEl = document.getElementById('nav-links');

navToggle.addEventListener('click', () => navLinksEl.classList.toggle('open'));
navLinksEl.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-link')) navLinksEl.classList.remove('open');
});

// 2. ACTIVE NAV LINK ON SCROLL
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

function setActive() {
    let current = 'home';
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 140) current = section.id;
    });
    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
}
window.addEventListener('scroll', setActive);
setActive();

// 3. VISITOR COUNTER
const counterVal = document.getElementById('counter-val');
const API_URL = 'https://api.counterapi.dev/v1/tunzoshivam/portfolio-main/up';

if (counterVal) {
    fetch(API_URL)
        .then(res => res.json())
        .then(data => { counterVal.innerText = data.count || '—'; })
        .catch(() => { counterVal.innerText = 'offline'; });
}
