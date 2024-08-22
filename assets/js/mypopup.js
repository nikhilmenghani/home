document.addEventListener('DOMContentLoaded', function() {
    // Function to open the popup
    function openPopup(title, content) {
        const overlay = document.getElementById('popup-overlay');
        const popupTitle = document.getElementById('popup-title');
        const popupContent = document.getElementById('popup-content');
        
        // Check if the elements exist before performing operations
        if (overlay && popupTitle && popupContent) {
            popupTitle.textContent = title;
            popupContent.innerHTML = content;
            overlay.classList.remove('hidden');
        }
    }

    // Function to close the popup
    function closePopup() {
        const overlay = document.getElementById('popup-overlay');
        
        // Check if the overlay element exists
        if (overlay) {
            overlay.classList.add('hidden');
        }
    }

    // Attach close event to close button
    const closeButton = document.getElementById('popup-close');
    if (closeButton) {
        closeButton.addEventListener('click', closePopup);
    }

    // Attach open event to buttons (example: adding event to buttons dynamically)
    const buttons = document.querySelectorAll('.custom-popup-button');
    if (buttons.length > 0) {
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                const title = button.getAttribute('data-title');
                const content = button.getAttribute('data-content');
                openPopup(title, content);
            });
        });
    }

    // Optional: Close popup when clicking outside the popup content
    const overlay = document.getElementById('popup-overlay');
    if (overlay) {
        overlay.addEventListener('click', function(event) {
            if (event.target === this) {
                closePopup();
            }
        });
    }
});
