let nav_icons = [...document.querySelectorAll(".nav-icon")];

nav_icons.forEach((icon) => {

    icon.addEventListener("click", ()=> {

        if (icon == nav_icons[0]) {
            document.querySelector(".nav-bar-selection").style.top = "42vh"
        } else if (icon == nav_icons[1]) {
            document.querySelector(".nav-bar-selection").style.top = "48.2vh"
        } else {
            document.querySelector(".nav-bar-selection").style.top = "54.3vh"
        }

    })

});


$(document).ready(function() {
    // Select the elements you want to make appear on scroll
    var hiddenElements = $('.hidden-element');

    // Set a flag to avoid repetitive animations
    var animationFlag = false;

    // Function to handle the scroll event
    function handleScroll() {
        var scrollPosition = $(window).scrollTop();
        var windowHeight = $(window).height();

        // Loop through each hidden element
        hiddenElements.each(function() {
            var elementPosition = $(this).offset().top;

            // Check if the element is in the viewport
            if (elementPosition < scrollPosition + windowHeight * 0.8 && !animationFlag) {
                // Add a class to change opacity and trigger the transition
                $(this).addClass('visible-element');
                animationFlag = true; // Set the flag to true to avoid repetitive animations
            }
        });
    }

    // Attach the handleScroll function to the scroll event
    $(window).scroll(handleScroll);

    // Call the handleScroll function on page load to check if elements are already in the viewport
    handleScroll();
});