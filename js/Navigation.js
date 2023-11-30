

document.querySelector('.hamburger-menu').addEventListener('click', function() {
document.querySelector('.navigation').style.left = '-20px'; // Show menu
});

document.querySelector('.close-menu').addEventListener('click', function() {
    document.querySelector('.navigation').style.left = '-100%'; // Hide menu
});



document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('.navigation a'); // Select all nav links
    var currentUrl = window.location.href; // Get the current URL

    navLinks.forEach(function(link) {
        if (currentUrl.includes(link.href)) {
            link.classList.add('active'); // Add 'active' class if URLs match
        }
    });
});
