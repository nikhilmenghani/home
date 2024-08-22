$(document).ready(function() {
    $('.ui.button').each(function() {
        const buttonText = $(this).text().trim(); // Get the text content of the current button

        // Check if the next popup has the special class
        const popupElement = $(this).next('.ui.flowing.popup.special-popup');

        if (popupElement.length === 0) {
            return; // Skip if no matching popup with the special class is found
        }

        // Initialize the popup for the current button
        $(this).popup({
            popup: popupElement,
            on: 'click',
            position: 'bottom left',
            variation: 'flowing'
        });

        popupElement.find('a, .ui.button').on('click', function(event) {
            event.preventDefault(); // Prevent the default action (if it's a link)
            
            // Remove the display property and replace 'visible' with 'hidden'
            const popupElement = $(this).closest('.ui.flowing.popup');
            popupElement.css('display', ''); // Remove the inline display property
            popupElement.removeClass('visible').addClass('hidden'); // Replace 'visible' with 'hidden'

            // Optionally, if you want the link to open in a new tab
            if ($(this).is('a')) {
                window.open($(this).attr('href'), '_blank');
            }
        });
    });
});