// References to DOM elements
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const book = document.querySelector('#chefs');

const paper0 = document.querySelector('#p0'); // Reference to the new homepage
const paper1 = document.querySelector('#p1');
const paper2 = document.querySelector('#p2');
const paper3 = document.querySelector('#p3');

// Event listeners
prevBtn.addEventListener("click", goPrevious);
nextBtn.addEventListener("click", goNext);

// Business Logic
let currentState = 0; // Start with the homepage
let numOfPapers = 4; // Including the new homepage
let maxState = numOfPapers + 1;

function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
}

function closeBook(isFirstPage) {
    if(isFirstPage) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNext() {
    if (currentState < maxState) {
        switch (currentState) {
            case 0:
                openBook();
                paper0.classList.add("flipped");
                paper0.style.zIndex = 1;
                break;
            case 1:
                paper1.classList.add("flipped");
                paper1.style.zIndex = 2;
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 3;
                break;
            case 3:
                closeBook(false);
                paper3.classList.add("flipped");
                paper3.style.zIndex = 4;
                break;
            default:
                throw new Error("unknown state");
        }

        currentState++;
    }
}

function goPrevious() {
    if (currentState > 0) {
        switch (currentState) {
            case 1:
                closeBook(true);
                paper0.classList.remove("flipped");
                paper0.style.zIndex = 4;
                break;
            case 2:
                openBook();
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 3;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 2;
                break;
            case 4:
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 1;
                break;
            default:
                throw new Error("unknown state");
        }

        currentState--;
    }
}
