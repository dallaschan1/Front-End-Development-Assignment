let currentIndex = 0;
const images = document.querySelectorAll("#slider .image");
const textContents = document.querySelectorAll("#slider .text-content");
const totalImages = images.length; // Define totalImages based on the number of image elements

document.getElementById("prev").addEventListener("click", () => changeSlide(-1));
document.getElementById("next").addEventListener("click", () => changeSlide(1));

function changeSlide(step) {
    // Start by removing 'active' and 'zooming' from current elements
    images[currentIndex].classList.remove('active', 'zooming');
    textContents[currentIndex].classList.remove('active');

    // Calculate the next index
    currentIndex = (currentIndex + step + totalImages) % totalImages;

    // Add 'active' to the new current elements
    images[currentIndex].classList.add('active');
    textContents[currentIndex].classList.add('active');

    // Add 'zooming' with a slight delay to allow 'active' to take effect
    setTimeout(() => {
        images[currentIndex].classList.add('zooming');
    }, 100); // Short delay before zooming
}

changeSlide(0);
setInterval(() => changeSlide(1), 3000);
