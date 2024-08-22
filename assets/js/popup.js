$(document).ready(function() {
    // Initialize the popup
    $('.ui.button').first().popup({
        popup: $('.ui.flowing.popup'),
        on: 'click',
        position: 'bottom left',
        variation: 'flowing'
    });

    // Allow links inside the popup to function properly
    $('.ui.flowing.popup a').on('click', function(event) {
        event.stopPropagation(); // Prevent the popup from closing when the link is clicked
    });
});
