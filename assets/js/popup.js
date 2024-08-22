$(document).ready(function() {
    $('.custom-popup-trigger').on('click', function() {
        const popupId = $(this).data('id');
        const popupElement = $('#popup-' + popupId);
        const contentElement = $('#content-' + popupId);

        // Ensure the popup is hidden before showing it again
        popupElement.removeClass('hidden').addClass('visible'); // Show the popup

        // Initialize the popup for the current button
        $(this).popup({
            popup: popupElement,
            on: 'manual',
            position: 'bottom left',
            variation: 'flowing',
            onVisible: function() {
                popupElement.css('display', 'block');
            }
        }).popup('show');

        // Attach event handler to links inside the popup to close it when clicked
        contentElement.find('a').on('click', function(event) {
            // Replace 'visible' class with 'hidden' to hide the popup
            popupElement.removeClass('visible').addClass('hidden');

            // Open the link in a new tab if the link has target='_blank'
            if ($(this).attr('target') === '_blank') {
                event.preventDefault(); // Prevent the default action
                window.open($(this).attr('href'), '_blank');
            }
        });
    });
});
