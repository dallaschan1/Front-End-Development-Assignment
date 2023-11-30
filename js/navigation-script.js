function loadNavigation() {
    const navigationHTML = `
    <header>
        <img class="logo" src="/images/logo.svg" alt="Restaurant logo"> 
        <button class="hamburger-menu">☰</button> 
        <nav class="navigation">
            <button class="close-menu">X</button> 
            <img class="logo-in-menu" src="/images/logo.svg" alt="Restaurant logo" hidden> 
            <a href="/html/index.html">Home</a>
            <a href="/html/Menu.html">Menu</a>
            <a href="/html/Our-Chefs.html">Chefs</a>
            <a href="/html/About-Us.html">About Us</a>
            <a href="/html/Contact-Us.html">Contact Us</a>
            <button class="button-Reservation-menu">Make a Reservation</button>
            <div class="visit-us">
                <h3>Visit Us</h3>
                <a href="https://maps.app.goo.gl/DaQyjKibYgyqRcD26">69 Bussorah St, Singapore 199482</a>
                <p>Daily: 1pm to 10.00pm</p>
                <p>booking@restaurant.com</p>
            </div>
        </nav>
        <button class="button-Reservation">Make a Reservation</button>
    </header>`;
    
    const placeholder = document.getElementById('navigation-placeholder');

    // Insert the navigation HTML into the placeholder
    if (placeholder) {
        placeholder.innerHTML = navigationHTML;
    }
}

// Call the function when the script loads
loadNavigation();
