function updateMenu(category) {
    // Hide all menu categories
    document.querySelectorAll('.menu-selector').forEach(function(menuItem) {
        menuItem.classList.remove('active');
    });
    document.querySelectorAll('.menu-content').forEach(menu => {
        menu.style.display = 'none';
    });
    document.querySelector('.menu-selector[onclick="updateMenu(\'' + category + '\')"]').classList.add('active');
    // Show the selected category
    document.getElementById(category + '-menu').style.display = 'block';
}

document.getElementById('viewMenuButton').addEventListener('click', function() {
    document.getElementById('content').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.hamburger-menu').addEventListener('click', function() {
document.querySelector('.navigation').style.left = '-20px'; // Show menu
});

document.querySelector('.close-menu').addEventListener('click', function() {
    document.querySelector('.navigation').style.left = '-100%'; // Hide menu
});
