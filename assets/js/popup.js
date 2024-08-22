$(document).ready(function() {
    // Initialize the popup
    $('.ui.button').first().popup({
        popup: $('.ui.flowing.popup'),
        on: 'click',
        position: 'bottom left',
        variation: 'flowing'
    });

    // Handle the link click inside the popup
    $('.ui.flowing.popup a').on('click', function(event) {
        
        // Close the popup after the link is clicked
        $('.ui.button').first().popup('hide');
    });
});
