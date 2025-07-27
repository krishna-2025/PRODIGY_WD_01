// Smooth Scroll to sections on click
const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 50, 
            behavior: 'smooth'
        });
    });
});
