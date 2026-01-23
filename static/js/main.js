document.addEventListener('DOMContentLoaded', () => {
    // GSAP Typing Effect
    const typedTextElement = document.getElementById('typed-text');
    const words = ["Content Writer", "Copywriter", "Digital Marketer", "Storyteller"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];
        const displayedText = isDeleting 
            ? currentWord.substring(0, charIndex--) 
            : currentWord.substring(0, charIndex++);

        typedTextElement.textContent = displayedText;

        let typingSpeed = isDeleting ? 50 : 150;

        if (!isDeleting && charIndex === currentWord.length + 1) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === -1) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            charIndex = 0;
            typingSpeed = 500;
        }

        setTimeout(type, typingSpeed);
    }

    if (typedTextElement) {
        type();
    }

    // Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.glass-nav');
        if (window.scrollY > 50) {
            navbar.style.padding = '0.5rem 0';
            navbar.style.background = 'rgba(253, 251, 247, 0.98)'; // Vintage cream (high opacity)
            navbar.style.boxShadow = '5px 5px 15px rgba(62, 39, 35, 0.2)';
        } else {
            navbar.style.padding = '1rem 0';
            navbar.style.background = 'rgba(253, 251, 247, 0.95)'; // Vintage cream (original)
            navbar.style.boxShadow = '5px 5px 15px rgba(62, 39, 35, 0.15)';
        }
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Button Ripple Effect
    const buttons = document.querySelectorAll('.btn-primary-custom, .btn-outline-custom');
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            let x = e.clientX - e.target.offsetLeft;
            let y = e.clientY - e.target.offsetTop;
            
            let ripple = document.createElement('span');
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});
