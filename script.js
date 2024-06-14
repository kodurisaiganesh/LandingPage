$(document).ready(function() {
    // Select all images within the container
    var images = $(".image-slider img");
    var currentIndex = 0;
    var intervalTime = 5000; // Change slide every 5 seconds

    // Function to slide images
    function slideImages() {
        // Hide the current image
        images.eq(currentIndex).removeClass("active");

        // Increment index or reset to 0 if the end is reached
        currentIndex = (currentIndex + 1) % images.length;

        // Show the next image
        images.eq(currentIndex).addClass("active");
    }

    // Initially show the first image
    images.eq(0).addClass("active");

    // Set interval to slide images
    var slideInterval = setInterval(slideImages, intervalTime);

    // Pause slideshow on hover
    $(".image-slider").hover(
        function() {
            clearInterval(slideInterval);
        },
        function() {
            slideInterval = setInterval(slideImages, intervalTime);
        }
    );

    // Countdown timer script
    // Set the date we're counting down to
    var countDownDate = new Date("Jun 30, 2024 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {
        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);
});
