
// Typewriter
const texts = [
    'MCA Student · Sri Sharda Group of Institution, Lucknow',
    'C++ Intern · Brainwave Matrix Solution (Feb 2025)',
    'Web & Desktop Application Developer'
];
let i = 0, j = 0, forward = true;
const typewriter = document.getElementById('typewriter');
function type() {
    if (forward) {
        typewriter.textContent = texts[i].slice(0, j);
        j++;
        if (j > texts[i].length) {
            forward = false;
            setTimeout(type, 1500);
            return;
        }
    } else {
        typewriter.textContent = texts[i].slice(0, j);
        j--;
        if (j < 0) {
            forward = true;
            i = (i + 1) % texts.length;
            setTimeout(type, 500);
            return;
        }
    }
    setTimeout(type, forward ? 100 : 50);
}
type();

// Theme Toggle
function toggleTheme() {
    document.body.dataset.theme = document.body.dataset.theme === 'dark' ? '' : 'dark';
    const icon = document.querySelector('.theme-toggle i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
}

// Navbar Scroll
window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
    const sections = document.querySelectorAll('section');
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) current = section.getAttribute('id');
    });
    document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
    document.querySelector(`nav a[href="#${current}"]`)?.classList.add('active');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Form
// function handleSubmit(e) {
//     e.preventDefault();
//     alert('Thank you! Your message has been sent. I\\'ll respond as soon as possible.');
//     e.target.reset();
// }

// Intersection Observer for Animations
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => entry.isIntersecting && (entry.target.style.animationPlayState = 'running'));
}, { threshold: 0.1 });
document.querySelectorAll('section').forEach(el => observer.observe(el));
