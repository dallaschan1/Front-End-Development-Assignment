
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;
    var profilePicture = document.getElementById('profilePicture').files[0];

    localStorage.setItem('user', JSON.stringify({ 
        name: name, 
        email: email, 
        phoneNumber: phone, 
        profilePicture: profilePicture ? URL.createObjectURL(profilePicture) : null 
    }));
    
    alert('Sign Up / Login successful!');

});
