jQuery(document).ready(function () {
    jQuery(".accordion-item button").on("click", function () {
        jQuery(this).parents().siblings().children(".accordion-content").slideUp();
        jQuery(this).siblings().slideToggle();
        jQuery(this).attr("aria-expanded", jQuery(this).attr("aria-expanded") === "false" ? "true" : "false");
    })

    var header = jQuery('.main-header');
    var headerOffset = 100; // Add 100 pixels to the initial offset

    function updateHeader() {
        if (jQuery(window).scrollTop() > headerOffset) {
            header.addClass('fixed-header');
        } else {
            header.removeClass('fixed-header');
        }
    }

    // Initial check on page load
    updateHeader();

    // Listen for scroll events and update the header
    jQuery(window).scroll(updateHeader);

    jQuery(".mobile-menu-trigger").on('click', function () {
        jQuery(".mobile-menu").toggle()
    })
    jQuery(".mobile-menu-close-btn").on('click', function () {

        jQuery(".mobile-menu").hide()
    })

})