function loadNavigation() {
    const navigationHTML = `
    <header>
        <img class="logo" src="/images/logo.svg" alt="Restaurant logo"> 
        <button class="hamburger-menu">☰</button> 
        <nav class="navigation">
            <button class="close-menu">X</button> 
            <img class="logo-in-menu" src="/images/logo.svg" alt="Restaurant logo" hidden> 
            <img class="user-pfp-menu" src="#" alt="User Profile" style="display: none;">
            <a href="/html/index.html">Home</a>
            <a href="/html/Menu.html">Menu</a>
            <a href="/html/Our-Chefs.html">Chefs</a>
            <a href="/html/reservation.html">Make a Reservation</a>
            <button class="Login-Signup-menu">Login / Signup</button>
            <div class="visit-us">
                <h3>Visit Us</h3>
                <a href="https://maps.app.goo.gl/DaQyjKibYgyqRcD26">69 Bussorah St, Singapore 199482</a>
                <p>Daily: 1pm to 10.00pm</p>
                <p id = "aaa" >booking@restaurant.com</p>
            </div>
        </nav>
        <button class="Login-Signup">Login / Signup</button>
        <img class="user-pfp" src="#" alt="User Profile" style="display: none;">
    </header>`;
    
    const placeholder = document.getElementById('navigation-placeholder');

    // Insert the navigation HTML into the placeholder
    if (placeholder) {
        placeholder.innerHTML = navigationHTML;
    }

    addEventListeners();
    updateNavigationWithUserProfile();
}

function addEventListeners() {
    // Event listener for the Login/Signup button outside the menu
    var loginSignupButton = document.querySelector('.Login-Signup');
    if (loginSignupButton) {
        loginSignupButton.addEventListener('click', function() {
            
            window.location.href = '/html/login-signup.html'; // Adjust the path as necessary
        });
    }

    // Event listener for the Login/Signup button inside the menu
    var loginSignupMenuButton = document.querySelector('.Login-Signup-menu');
    if (loginSignupMenuButton) {
        loginSignupMenuButton.addEventListener('click', function() {
            window.location.href = '/html/login-signup.html'; // Adjust the path as necessary
        });
    }
}
// Call the function when the script loads
loadNavigation();


document.querySelector('.hamburger-menu').addEventListener('click', function() {
    document.querySelector('.navigation').style.left = '-20px'; // Show menu
    document.body.classList.add('no-scroll'); // Prevent scrolling on the main page
});
    
document.querySelector('.close-menu').addEventListener('click', function() {
    document.querySelector('.navigation').style.left = '-100%'; // Hide menu
    document.body.classList.remove('no-scroll'); // Allow scrolling on the main page
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
    function updateNavigationWithUserProfile() {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        const profilePicBase64 = localStorage.getItem('userImage');
    
        const userPfpElement = document.querySelector('.user-pfp');
        const userPfpMenuElement = document.querySelector('.user-pfp-menu');
        const loginSignupButton = document.querySelector('.Login-Signup');
        const loginSignupMenuButton = document.querySelector('.Login-Signup-menu');
    
        if (isLoggedIn && profilePicBase64) {
            if (userPfpElement) {
                userPfpElement.src = profilePicBase64;
                userPfpElement.style.display = 'block';
            }
            if (userPfpMenuElement) {
                userPfpMenuElement.src = profilePicBase64;
                userPfpMenuElement.style.display = 'block';
            }
    
            // Hide login/signup buttons if desired
            loginSignupButton.style.display = 'none';
            loginSignupMenuButton.style.display = 'none';
        } else {
           
    
            // Ensure profile pictures are hidden if not logged in
            if (userPfpElement) userPfpElement.style.display = 'none';
            if (userPfpMenuElement) userPfpMenuElement.style.display = 'none';
        }
    }
    