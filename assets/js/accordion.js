document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.accordion-toggle').forEach(toggle => {
        toggle.addEventListener('click', function() {
            const accordionContent = this.nextElementSibling;

            if (this.classList.contains('active')) {
                // Collapse the accordion
                accordionContent.style.maxHeight = accordionContent.scrollHeight + "px"; // Set to current height
                requestAnimationFrame(() => {
                    accordionContent.style.maxHeight = "0px";
                });
                this.classList.remove('active');
            } else {
                // Temporarily remove max-height to get accurate scrollHeight
                accordionContent.style.maxHeight = "none";
                const fullHeight = accordionContent.scrollHeight + "px";
                accordionContent.style.maxHeight = "0px";
                requestAnimationFrame(() => {
                    accordionContent.style.maxHeight = fullHeight;
                });
                this.classList.add('active');
            }
        });
    });
});
