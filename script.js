// Hamburger menu toggle
document.getElementById('menuToggle').addEventListener('click', () => {
    document.getElementById('menu').classList.toggle('show');
});

// Scroll animation activation
const sections = document.querySelectorAll('section');

function activateVisibleSections() {
    const triggerPoint = window.innerHeight / 1.5;

    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < triggerPoint) {
            section.classList.add('active');
        }
    });
}

document.querySelector('.scroll-container').addEventListener('scroll', activateVisibleSections);
window.addEventListener('load', activateVisibleSections);

// Form submission success message
document.getElementById('contactForm').addEventListener('submit', function (e) {
    const form = this;
    const successMsg = document.getElementById('formSuccess');

    setTimeout(() => {
        successMsg.textContent = "Message sent successfully! We'll get back to you shortly.";
        successMsg.style.display = 'block';
        form.reset();
        grecaptcha.reset();
    }, 1000);
});
