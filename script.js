// 1. MOBILE MENU
const navToggle = document.getElementById('nav-toggle');
const navLinksEl = document.getElementById('nav-links');

navToggle.addEventListener('click', () => navLinksEl.classList.toggle('open'));

// 2. ACTIVE NAV LINK (based on current page)
const currentPage = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
document.querySelectorAll('.nav-link').forEach(link => {
    const target = link.getAttribute('href').toLowerCase();
    link.classList.toggle('active', target === currentPage);
});

// 3. VISITOR COUNTER
const counterVal = document.getElementById('counter-val');
const API_URL = 'https://api.counterapi.dev/v1/tunzoshivam/portfolio-main/up';

if (counterVal) {
    fetch(API_URL)
        .then(res => res.json())
        .then(data => { counterVal.innerText = data.count || '—'; })
        .catch(() => { counterVal.innerText = 'offline'; });
}
