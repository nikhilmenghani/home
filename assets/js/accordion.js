document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.accordion-toggle').forEach(toggle => {
        toggle.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
});
