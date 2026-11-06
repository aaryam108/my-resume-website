// Automatically update copyright year

document.getElementById("year").textContent =
    new Date().getFullYear();


// Download CV as PDF

function downloadResume() {
    window.print();
}


// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function (e) {

        const target = document.querySelector(
            this.getAttribute('href')
        );

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth'
            });
        }

    });

});


// Reveal sections on scroll

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.12
});

document.querySelectorAll('.section').forEach(section => {

    section.classList.add('reveal');
    observer.observe(section);

});