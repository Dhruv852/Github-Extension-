document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile menu functionality (to be implemented)
    const nav = document.querySelector('nav');
    
    // Add shadow to navigation on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            nav.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.boxShadow = 'none';
        }
    });

    // Animate feature cards on scroll
    const featureCards = document.querySelectorAll('.feature-card');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        },
        { threshold: 0.1 }
    );

    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease-out';
        observer.observe(card);
    });
});