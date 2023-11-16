let currentIndex = 0;
const images = document.querySelectorAll("#slider .image");
const textContents = document.querySelectorAll("#slider .text-content"); // Select the .text-content divs
const totalImages = images.length;

document.getElementById("prev").addEventListener("click", () => changeSlide(-1));
document.getElementById("next").addEventListener("click", () => changeSlide(1));

function changeSlide(step) {
    // Hide the currently displayed image and text
    images[currentIndex].style.display = 'none';
    textContents[currentIndex].classList.remove('active'); // Adjust to target .text-content div

    // Update the current index
    currentIndex = (currentIndex + step + totalImages) % totalImages;

    // Show the new image and text
    images[currentIndex].style.display = 'block';
    textContents[currentIndex].classList.add('active'); // Adjust to target .text-content div
}

// Initialize first slide and text
changeSlide(0);

// Optional: Automatic slide change every 3 seconds
setInterval(() => changeSlide(1), 3000);
