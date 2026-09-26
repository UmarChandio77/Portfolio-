// Toggle Mobile Menu Navigation
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('#navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    // Change icon between hamburger menu and close icon
    const icon = menuIcon.querySelector('i');
    if (navbar.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close Mobile Menu on Nav Link Click
const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        const icon = menuIcon.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Active Link Highlight on Scroll
const sections = document.querySelectorAll('section');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.navbar a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};
