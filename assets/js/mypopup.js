document.addEventListener('DOMContentLoaded', function() {
    // Function to open the popup
    function openPopup(title, content) {
        const overlay = document.getElementById('popup-overlay');
        const popupTitle = document.getElementById('popup-title');
        const popupContent = document.getElementById('popup-content');
        
        popupTitle.textContent = title;
        popupContent.innerHTML = content;
        
        overlay.classList.remove('hidden');
    }

    // Function to close the popup
    function closePopup() {
        const overlay = document.getElementById('popup-overlay');
        overlay.classList.add('hidden');
    }

    // Attach close event to close button
    document.getElementById('popup-close').addEventListener('click', closePopup);

    // Attach open event to buttons (example: adding event to buttons dynamically)
    document.querySelectorAll('.custom-popup-button').forEach(button => {
        button.addEventListener('click', function() {
            const title = button.getAttribute('data-title');
            const content = button.getAttribute('data-content');
            openPopup(title, content);
        });
    });

    // Optional: Close popup when clicking outside the popup content
    document.getElementById('popup-overlay').addEventListener('click', function(event) {
        if (event.target === this) {
            closePopup();
        }
    });
});
