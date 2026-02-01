// 1. DYNAMIC FLASHLIGHT BEAM CURSOR
const beam = document.getElementById('cursor-beam');

// Only enable flashlight if device has a fine pointer (mouse)
if (window.matchMedia("(pointer: fine)").matches) {
    document.addEventListener('mousemove', (e) => {
        beam.style.left = e.clientX + 'px';
        beam.style.top = e.clientY + 'px';
    });
} else {
    // Hide beam on touch devices to improve performance
    beam.style.display = 'none';
}

// 2. THEME TOGGLE ENGINE
const toggleBtn = document.getElementById('theme-toggle');
const icon = toggleBtn.querySelector('i');
const html = document.documentElement;

// Check Local Storage
if(localStorage.getItem('theme') === 'light') {
    html.setAttribute('data-theme', 'light');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
}

toggleBtn.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    
    if(currentTheme === 'light') {
        html.setAttribute('data-theme', 'dark');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
        updateParticleColor('dark');
    } else {
        html.setAttribute('data-theme', 'light');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
        updateParticleColor('light');
    }
});

// 3. NEURAL NETWORK CANVAS ANIMATION (ADAPTIVE COLOR)
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let width, height;
let particles = [];
let particleColor = 'rgba(0, 243, 255, '; // Default Dark Mode Color

function resizeCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function updateParticleColor(theme) {
    if(theme === 'light') {
        particleColor = 'rgba(0, 119, 182, '; // Blue for Light Mode
    } else {
        particleColor = 'rgba(0, 243, 255, '; // Cyan for Dark Mode
    }
    particles = []; // Reset particles to apply new color
    initParticles();
}

// Initialize based on current theme
if(localStorage.getItem('theme') === 'light') {
    updateParticleColor('light');
}

class Particle {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = particleColor + '0.5)';
        ctx.fill();
    }
}

function initParticles() {
    // Reduce particle count on mobile for performance
    const count = window.innerWidth < 768 ? 30 : 60;
    for (let i = 0; i < count; i++) particles.push(new Particle());
}
initParticles();

function animateCanvas() {
    ctx.clearRect(0, 0, width, height);
    
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // Adjust connection distance based on screen size
            const maxDist = window.innerWidth < 768 ? 100 : 150;

            if (distance < maxDist) {
                ctx.beginPath();
                ctx.strokeStyle = particleColor + (1 - distance / maxDist) + ')';
                ctx.lineWidth = 0.5;
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
    requestAnimationFrame(animateCanvas);
}
animateCanvas();

// 4. TYPEWRITER EFFECT
const words = ["Computer Engineer", "M.Tech Scholar", "TunzoTech Founder", "Researcher"];
let i = 0;
let timer;

function typeWriter() {
    const heading = document.getElementById("typewriter");
    if (!heading) return;
    
    let word = words[i];
    let currentText = heading.innerText;
    
    if (currentText.length < word.length) {
        heading.innerText = word.substring(0, currentText.length + 1);
        timer = setTimeout(typeWriter, 100);
    } else {
        setTimeout(deleteText, 2000);
    }
}

function deleteText() {
    const heading = document.getElementById("typewriter");
    if (!heading) return;

    let currentText = heading.innerText;

    if (currentText.length > 0) {
        heading.innerText = currentText.substring(0, currentText.length - 1);
        timer = setTimeout(deleteText, 50);
    } else {
        i = (i + 1) % words.length;
        typeWriter();
    }
}
typeWriter();

// 5. 3D TILT EFFECT
const card = document.getElementById('tilt-card');
const container = document.querySelector('.hero-image-wrapper');

if (container && card) {
    container.addEventListener('mousemove', (e) => {
        if(window.innerWidth > 992) {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        }
    });

    container.addEventListener('mouseleave', () => {
        card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });
}

// 6. SCROLL ANIMATIONS
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            entry.target.style.opacity = 1;
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal-on-scroll').forEach(el => {
    el.style.opacity = 0;
    observer.observe(el);
});

// 7. ANIMATED NUMBER COUNTERS
const stats = document.querySelectorAll('.stat-number');
let hasAnimatedStats = false;

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimatedStats) {
            hasAnimatedStats = true;
            stats.forEach(stat => {
                const target = +stat.getAttribute('data-target');
                const isFloat = target % 1 !== 0;
                const increment = target / 50;
                let current = 0;
                const updateCount = () => {
                    current += increment;
                    if (current < target) {
                        stat.innerText = isFloat ? current.toFixed(1) : Math.ceil(current);
                        setTimeout(updateCount, 30);
                    } else {
                        stat.innerText = target;
                    }
                };
                updateCount();
            });
        }
    });
});

const statsSection = document.querySelector('.stats-grid');
if(statsSection) statsObserver.observe(statsSection);

// 8. VISITOR COUNTER
const counterVal = document.getElementById('counter-val');
const API_URL = 'https://api.counterapi.dev/v1/tunzoshivam/portfolio-main/up';

if (counterVal) {
    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            counterVal.innerText = data.count || "ERROR";
        })
        .catch(err => {
            counterVal.innerText = "OFFLINE";
        });
}

// 9. ACTIVE NAVIGATION LINK
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= (sectionTop - 300)) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});