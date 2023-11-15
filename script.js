let currentIndex = 0;
const images = document.querySelectorAll("#slider .image");
const texts = document.querySelectorAll("#slider #text p");
const totalImages = images.length;

document.getElementById("prev").addEventListener("click", () => changeImage(-1));
document.getElementById("next").addEventListener("click", () => changeImage(1));

function changeImage(step) {
    images[currentIndex].hidden = true;
    texts[currentIndex].hidden = true;
    currentIndex = (currentIndex + step + totalImages) % totalImages;
    images[currentIndex].hidden = false;
    texts[currentIndex].hidden = false;
}

setInterval(() => changeImage(1), 1000); // Change image every 3 seconds
