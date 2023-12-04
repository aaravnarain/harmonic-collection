document.addEventListener("DOMContentLoaded", function() {
    const movingImages = document.querySelectorAll(".movingImage");

    function moveImage(image) {
        const maxX = window.innerWidth - image.clientWidth;
        const maxY = window.innerHeight - image.clientHeight;

        const randomXStart = Math.floor(Math.random() * maxX);
        const randomYStart = Math.floor(Math.random() * maxY);

        const randomXEnd = Math.floor(Math.random() * maxX);
        const randomYEnd = Math.floor(Math.random() * maxY);

        // Smoothly move the image using requestAnimationFrame
        const start = Date.now();
        const duration = 7000; // 2 seconds

        function animate() {
            const elapsed = Date.now() - start;
            const progress = elapsed / duration;

            if (progress < 1) {
                const currentX = easeInOutQuad(progress) * (randomXEnd - randomXStart) + randomXStart;
                const currentY = easeInOutQuad(progress) * (randomYEnd - randomYStart) + randomYStart;

                image.style.left = `${currentX}px`;
                image.style.top = `${currentY}px`;

                requestAnimationFrame(animate);
            } else {
                // When the animation completes, trigger a new random position
                moveImage(image);
            }
        }

        // Set the initial position
        image.style.left = `${randomXStart}px`;
        image.style.top = `${randomYStart}px`;

        // Start the animation
        animate();
    }

    function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    // Start the continuous smooth movement for each image
    movingImages.forEach(moveImage);
});

document.addEventListener("DOMContentLoaded", function () {
    const navbarToggle = document.getElementById("navbar-toggle");
    const navbar = document.getElementById("myNavbar");

    navbarToggle.addEventListener("click", function () {
        navbar.classList.toggle("active");
    });
});

