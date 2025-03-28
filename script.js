//web d.

var typed = new Typed('#element', {
    strings: ['Web Developer'],
    typeSpeed: 50,
});

//theme
const themeToggle = document.getElementById('themeToggle');


const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.classList.add(savedTheme);
}



themeToggle.addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode'); 
    } else {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
    }
});


//form
const form = document.querySelector('.contact-form');

form.addEventListener('submit', (e) => {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        e.preventDefault(); // Prevent form submission
        alert('Please fill out all fields before submitting.');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        e.preventDefault();
        alert('Please enter a valid email address.');
    }
});


const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;



// scroll to top
const scrollToTopBtn = document.getElementById('scrollToTopBtn');


window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { 
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});


scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth', 
    });
});