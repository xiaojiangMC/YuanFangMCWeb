window.onscroll = function() {
    backTop();
    header();
};

function backTop() {
    const backTop = document.getElementById('backTop');
    if (window.scrollY > 760) {
        backTop.style.display = 'flex';
    } else {
        backTop.style.display = 'none';
    }
}

function header() {
    const header = document.querySelector('header');
    if (window.scrollY > 700) {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    } else {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
    }
}

window.addEventListener('scroll', checkSections);

function checkSections() {
    const sections = document.querySelectorAll('.vis');
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < windowHeight - 100) {
            section.classList.add('visible');
        }
    });
}
