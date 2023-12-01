

const initialDelay = 3600;
document.querySelectorAll('.card .text-content div').forEach(div => div.innerHTML = '');
let currentIndex = 1; // Start with the first card
let isSwiping = false; // Swipe lock flag
let typingTimeout; // Store typing timeout ID
const totalCards = document.querySelectorAll('.card').length;
const paginationContainer = document.querySelector('.carousel-pagination');
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
const slider = document.getElementById('carousel-container');
slider.addEventListener('mousedown', (e) => {
    isDragging = true;
    startPos = getPositionX(e);
    slider.style.cursor = 'grabbing';
});

slider.addEventListener('mouseup', () => {
    isDragging = false;
    slider.style.cursor = 'grab';
    handleSwipeEnd();
});

slider.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const currentPosition = getPositionX(e);
        currentTranslate = prevTranslate + currentPosition - startPos;
    }
});

slider.addEventListener('mouseleave', () => {
    if (isDragging) {
        isDragging = false;
        handleSwipeEnd();
    }
});

function getPositionX(event) {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

function handleSwipeEnd() {
    
    if (currentTranslate > 100) { // Swipe right threshold
        handleSwipe('right');
    } else if (currentTranslate < -100) { // Swipe left threshold
        handleSwipe('left');
    }
    // Reset values
    startPos = 0;
    currentTranslate = 0;
    prevTranslate = 0;
}



function updateActiveDot(index) {
    document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
        if (i === index - 1) {
            dot.classList.add('active-dot');
        } else {
            dot.classList.remove('active-dot');
        }
    });
}
// Create dots
for (let i = 0; i < totalCards; i++) {
    const dot = document.createElement('span');
    dot.classList.add('carousel-dot');
    if (i === 0) dot.classList.add('active-dot');
    paginationContainer.appendChild(dot);
}


function clearTextContent() {
    document.querySelectorAll('.head-text-case, .body-text-case').forEach(div => div.innerHTML = '');
}
function cancelOngoingTyping() {
    if (typingTimeout) {
        clearTimeout(typingTimeout);
        typingTimeout = null;
    }
}

function textTypingEffect(element, text, callback, i = 0, wordCount = 0) {
    if (typingTimeout) clearTimeout(typingTimeout); 

  
    if (text[i] === '<') {
       
        const endOfTag = text.indexOf('>', i);
        if (endOfTag !== -1) {
            
            element.innerHTML += text.slice(i, endOfTag + 1);
            
            i = endOfTag;
        }
    } else {
        
        element.innerHTML += text[i];
    }

    
    if (i < text.length - 1) {
        typingTimeout = setTimeout(() => textTypingEffect(element, text, callback, i + 1, wordCount), 1);
    } else if (callback) {
        callback();
    }
}


function setupCardContent(index) {
    cancelOngoingTyping();
    clearTextContent();
    let div, headdiv, heading, profileText, accoladesText, signatureDishText;
    let button;

    switch (index) {
        case 1:
            div = document.querySelector(".body-text-case1");
        headdiv = document.querySelector(".head-text-case1");
        heading = "Head Chef Amy Richardson";
        profileText = `
Amy Richardson, a luminary in the culinary world, has reshaped modern gastronomy with her innovative approach and exceptional skill. Trained at the distinguished Culinary Institute of America, Amy has consistently showcased her extraordinary prowess in the kitchen. With over 15 years of experience in prestigious kitchens around the globe, she's developed a unique culinary style that seamlessly blends traditional techniques with contemporary flavors.

Her commitment to excellence is evident in her dedication to using only the finest, locally-sourced ingredients. Amy's cooking philosophy revolves around enhancing natural flavors while presenting dishes in an artistically sophisticated manner. Her meticulous attention to detail and relentless pursuit of perfection have been pivotal in elevating La Maison Gourmet to a Michelin-starred establishment.`;

        accoladesText = `<span class="highlight-text">Accolades:<span> <br>
- Michelin Star Award: La Maison Gourmet, under Amy's expert guidance, earned its first Michelin star in 2018, signifying her culinary mastery and innovation.<br>
- James Beard Award for Best New Restaurant (2019): This prestigious award was a result of Amy's creative menu planning and exceptional culinary skills.<br>
- Gourmet Magazine's Chef of the Year (2020): Amy was nationally recognized for her significant contributions to the culinary arts.<br>
- Featured in 'Chefs of Tomorrow': Amy was highlighted in this documentary series that profiles the world's most influential chefs.<br>
- Guest Judge on 'MasterChef': Amy has shared her culinary expertise on this popular cooking show, inspiring a new generation of chefs.`;

        

        break;
        case 2:
    div = document.querySelector(".body-text-case2");
    headdiv = document.querySelector(".head-text-case2");
    heading = "Sous Chef Marcho Alvarez";
    profileText = `Marco Alvarez, an acclaimed figure in the culinary landscape, has revolutionized the art of cooking with his inventive techniques and exceptional finesse. A graduate of the prestigious Le Cordon Bleu, Marco has demonstrated his remarkable culinary talents in top-tier kitchens across the world. With more than 20 years of experience, he has honed a distinctive culinary style that artfully merges classic methods with avant-garde flavors.

    Marco's passion for culinary excellence is rooted in his commitment to using high-quality, sustainable ingredients. His cooking philosophy centers on elevating simple, natural flavors while presenting his creations in a visually stunning and innovative manner. His scrupulous attention to detail and unwavering pursuit of culinary excellence have been instrumental in transforming The Aventine into a critically-acclaimed, award-winning restaurant.
    `;
    
            accoladesText = `<span class="highlight-text">Accolades:</span> <br>
            - Golden Fork Award: Under Marco's visionary leadership, The Aventine was awarded the Golden Fork in 2017, a testament to his culinary ingenuity.<br>
            - International Chef of the Year (2018): This global recognition was a nod to Marco's exceptional skills and innovative menu designs.<br>
            - Top 10 Chefs by Culinary World Magazine (2019): Marco was recognized globally for his outstanding contributions to culinary arts.<br>
            - Star in 'Culinary Masters': Featured in this acclaimed documentary, Marco shared insights into his unique cooking style.<br>
            - Renowned Speaker at Global Chefs Conference: Marco has been a keynote speaker, sharing his expertise and inspiring culinary professionals worldwide.
            `;
    
    break;

        case 3:
            div = document.querySelector(".body-text-case3");
        headdiv = document.querySelector(".head-text-case3");
        heading = "Sous Chef Elena Soto";
        profileText = `Elena Soto, a trailblazer in the realm of gastronomy, has carved a niche for herself with her creative culinary expressions and unparalleled expertise. Trained at the renowned Johnson & Wales University, Elena has consistently displayed her exceptional culinary acumen in prominent restaurants internationally. Boasting over a decade of experience, she has developed a signature culinary style that beautifully combines age-old traditions with modern, eclectic tastes.

        Elena’s commitment to culinary artistry is reflected in her dedication to sourcing premium, organic ingredients. Her cooking philosophy is centered on intensifying inherent flavors while artistically presenting each dish. Her meticulous craftsmanship and relentless drive for perfection have been key in making The Orchard a destination for gourmet dining, earning it numerous accolades.
        `;

        accoladesText = `<span class="highlight-text">Accolades:</span> <br>
        - Culinary Excellence Award: The Orchard, under Elena's innovative direction, was awarded this honor in 2016, highlighting her culinary brilliance.<br>
        - National Rising Chef Award (2017): This award recognized Elena’s inventive menus and exceptional cooking skills.<br>
        - Food & Wine's Best New Chef (2018): Elena was nationally acclaimed for her significant impact on the culinary scene.<br>
        - Profiled in 'The Next Big Thing': This documentary series featured Elena, spotlighting her as one of the leading chefs of her generation.<br>
        - Regular Contributor on 'The Art of Cooking': Elena has appeared on this renowned cooking show, imparting her knowledge and inspiring aspiring chefs.
        `;

        

        break;
    }

    if (headdiv) headdiv.innerHTML = '';
    if (div) div.innerHTML = '';

    button = document.querySelector(`.card:nth-child(${index}) button`);
    if (button) {
        button.style.display = 'none';
    }

    setTimeout(() => {
        textTypingEffect(headdiv, heading, () => {
            textTypingEffect(div, profileText, () => {
                div.innerHTML += '<br><br>'; // Add space
                textTypingEffect(div, accoladesText, () => {
                    // Show the button after all text is typed
                    if (button) {
                        button.style.display = 'block';
                    }
                }, 0, 0);
            }, 0, 0);
        }, 0, 0);
    }, initialDelay);
}

function handleSwipe(direction) {
    if (isSwiping) return; // Check if already swiping
    isSwiping = true; // Set swipe lock
    const totalCards = 5; // Total number of cards
    let nextIndex = currentIndex;

    if (direction === 'left' && currentIndex < totalCards) {
        nextIndex++;
    } else if (direction === 'right' && currentIndex > 1) {
        nextIndex--;
    }

    if (nextIndex !== currentIndex) {
        // Hide current card and show next card
        const currentCard = document.querySelector(`.card:nth-child(${currentIndex})`);
        const nextCard = document.querySelector(`.card:nth-child(${nextIndex})`);

        if (currentCard && nextCard) {
            currentCard.style.display = 'none';
            nextCard.style.display = 'flex';
            
            currentIndex = nextIndex;
            setupCardContent(currentIndex);
        } else {
            console.error('Card elements not found:', currentCard, nextCard);
        }
    }
    isSwiping = false;
    updateActiveDot(currentIndex); 
}


// Touch event listeners for swipe detection
let touchStartX = 0;
let touchEndX = 100;

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
}, false);

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchEndX < touchStartX) {
        handleSwipe('left');
    } else if (touchEndX > touchStartX) {
        handleSwipe('right');
    }
}, false);

setupCardContent(currentIndex);
updateActiveDot(currentIndex);  
// Get all elements with the class 'viewMenuButton'
var menuButtons = document.getElementsByClassName('viewMenuButton');

// Loop through the collection and add a click event listener to each element
for (var i = 0; i < menuButtons.length; i++) {
    menuButtons[i].addEventListener('click', function() {
        window.location.href = 'Menu.html';
    });
}
