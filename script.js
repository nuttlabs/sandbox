// FAQ Accordion
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq__item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq__question');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all other items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Testimonials Slider
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.testimonials__dot');
    let currentIndex = 1; // Start with middle one (Maya)
    let autoSlideInterval;

    function updateSlider(index) {
        // Update testimonials
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.remove('testimonial--center');

            if (i === index) {
                testimonial.classList.add('testimonial--center');
            }
        });

        // Update dots
        dots.forEach((dot, i) => {
            dot.classList.remove('testimonials__dot--active');

            if (i === index) {
                dot.classList.add('testimonials__dot--active');
            }
        });

        currentIndex = index;
    }

    // Dot click handlers
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            updateSlider(index);
            resetAutoSlide();
        });
    });

    // Auto-slide functionality
    function autoSlide() {
        const nextIndex = (currentIndex + 1) % testimonials.length;
        updateSlider(nextIndex);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(autoSlide, 5000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    // Start auto-sliding
    startAutoSlide();

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
