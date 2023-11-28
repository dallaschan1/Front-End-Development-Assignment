let currentIndex = 0;
const images = document.querySelectorAll("#slider .image");
const textContents = document.querySelectorAll("#slider .text-content");

document.getElementById("prev").addEventListener("click", () => changeSlide(-1));
document.getElementById("next").addEventListener("click", () => changeSlide(1));

function changeSlide(step) {
    images[currentIndex].classList.add('zooming');
    setTimeout(() => {
        const nextIndex = (currentIndex + step + totalImages) % totalImages;
        images[nextIndex].classList.add('active');
        textContents[nextIndex].classList.add('active');
        images[currentIndex].classList.remove('active', 'zooming');
        textContents[currentIndex].classList.remove('active');
        currentIndex = nextIndex;
    }, 3000); // Zoom duration
}

changeSlide(0);
setInterval(() => changeSlide(1), 3000);
