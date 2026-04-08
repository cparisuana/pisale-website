// ===================================
// NAVIGATION
// ===================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');
const navbar = document.querySelector('.navbar');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===================================
// EXAMPLE FILTERING
// ===================================

const filterBtns = document.querySelectorAll('.filter-btn');
const exampleCards = document.querySelectorAll('.example-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        exampleCards.forEach(card => {
            const category = card.getAttribute('data-category');
            
            if (filter === 'all') {
                card.classList.remove('hidden');
                card.style.animation = 'fadeInUp 0.5s ease-out';
            } else {
                if (category.includes(filter)) {
                    card.classList.remove('hidden');
                    card.style.animation = 'fadeInUp 0.5s ease-out';
                } else {
                    card.classList.add('hidden');
                }
            }
        });
    });
});

// ===================================
// SMOOTH SCROLL WITH OFFSET
// ===================================

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.about-card, .feature-item, .example-card, .publication-card').forEach(el => {
    observer.observe(el);
});

// ===================================
// VIEW DETAILS BUTTON HANDLER
// ===================================

document.querySelectorAll('.view-details').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const card = btn.closest('.example-card');
        const title = card.querySelector('h3').textContent;
        
        // In a real implementation, this would open a modal or navigate to a detail page
        alert(`Opening detailed view for: ${title}\n\nThis would show:\n- Full simulation parameters\n- High-resolution images/videos\n- Performance metrics\n- Input files\n- Results analysis`);
    });
});

// ===================================
// CONTACT FORM HANDLER
// ===================================

const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // In a real implementation, this would send the data to a backend
        console.log('Form submitted:', { name, email, message });
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// ===================================
// PARALLAX EFFECT FOR HERO
// ===================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = 1 - (scrolled * 0.001);
    }
});

// ===================================
// MOUSE TRAIL EFFECT (OPTIONAL)
// ===================================

let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Add mouse glow effect to particle canvas
canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Draw glow at mouse position
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, 100);
    gradient.addColorStop(0, 'rgba(139, 47, 201, 0.3)');
    gradient.addColorStop(1, 'rgba(139, 47, 201, 0)');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
});

// ===================================
// LOADING ANIMATION
// ===================================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Animate hero content on load
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.animation = 'fadeInUp 1s ease-out';
    }
});

// ===================================
// CONSOLE MESSAGE
// ===================================

console.log('%c🚀 HydroCode Website', 'color: #8B2FC9; font-size: 24px; font-weight: bold;');
console.log('%cPowered by ALE-AMR technology', 'color: #E94560; font-size: 14px;');
console.log('%cInterested in the code? Visit our GitHub!', 'color: #F97316; font-size: 12px;');
