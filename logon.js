// Function to handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  // Perform login authentication here
  // For demonstration purposes, let's assume the login is successful
  // Here you would typically perform AJAX request to your backend to authenticate the user
  // If authentication is successful, redirect the user to the main page
  redirectTo('main.html');
});

// Function to handle signup form submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault();
  // Perform signup/authentication here
  // For demonstration purposes, let's assume the signup is successful
  // Here you would typically perform AJAX request to your backend to create a new user
  // If signup is successful, redirect the user to the main page
  redirectTo('main.html');
});

// Function to redirect to a specific page
function redirectTo(url) {
  window.location.href = url;
}
