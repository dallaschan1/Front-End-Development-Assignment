const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");



function loginUser(event) {
    event.preventDefault(); // Prevent form submission to server
  
    // Retrieve input values
    const username = document.querySelector('.sign-in-form input[type="text"]').value;
    const password = document.querySelector('.sign-in-form input[type="password"]').value;
  
    // Check if credentials match
    if (username === localStorage.getItem('username') && password === localStorage.getItem('password')) {
      alert("Login successful!");
      // Redirect or perform actions after successful login
      // Set the login state flag
localStorage.setItem('isLoggedIn', 'true');

    } else if (username === "admin" && password === "admin") {
      alert("Admin login successful!");

    } else {
      alert("Invalid credentials!");
    }
  }

function registerUser(event) {
    event.preventDefault(); 
  
    // Retrieve values from form
    const username = document.querySelector('.sign-up-form input[type="text"]').value;
    const password = document.querySelector('.sign-up-form input[type="password"]').value;
    const email = document.querySelector('.sign-up-form input[type="email"]').value;
    const phone = document.querySelector('.sign-up-form input[type="tel"]').value;
    const imageFile = document.querySelector('.sign-up-form input[type="file"]').files[0];
  

    if (!username || !password || !email || !phone || !imageFile) {
      alert("All fields are required, including image upload.");
      return;
    }
  
    // FileReader to read the image file
    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onloadend = function() {
      const base64Image = reader.result;
      
  
      // Storing the user data
      localStorage.setItem('username', username);
      localStorage.setItem('password', password); 
      localStorage.setItem('email', email);
      localStorage.setItem('phone', phone);
      localStorage.setItem('userImage', base64Image); // Storing the base64 image string
  
      alert("Registration successful!");
      // Set the login state flag
localStorage.setItem('isLoggedIn', 'true');

    };
  }


  


sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

document.getElementById('actual-btn').addEventListener('change', function() {
    document.getElementById('file-chosen').value = this.files[0].name;
  });
  document.getElementById('file-chosen').addEventListener('click', function() {
    document.getElementById('actual-btn').click();
  });
  
  
  document.getElementById('close-btn').addEventListener('click', function() {
    window.history.back(); // Navigate back to the previous page
});
