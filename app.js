// Elements
const registrationPage = document.getElementById('registration-page');
const loginPage = document.getElementById('login-page');
const securedPage = document.getElementById('secured-page');
const toLoginLink = document.getElementById('to-login');
const toRegisterLink = document.getElementById('to-register');

// Load registration page first
window.onload = function() {
    showRegistration();
    updateURL('register');
};

// Show Registration Page
function showRegistration() {
    registrationPage.style.display = 'block';
    loginPage.style.display = 'none';
    securedPage.style.display = 'none';
    document.body.className = 'registration'; // Change background
}

// Show Login Page
function showLogin() {
    registrationPage.style.display = 'none';
    loginPage.style.display = 'block';
    securedPage.style.display = 'none';
    document.body.className = ''; // Default background for login
}

// Show Secured Page
function showSecured() {
    registrationPage.style.display = 'none';
    loginPage.style.display = 'none';
    securedPage.style.display = 'block';
    document.body.className = 'secured'; // Change background for secured
}

// Update URL
function updateURL(page) {
    window.history.pushState({}, '', `/${page}`);
}

// Event listeners for switching between pages
toLoginLink.addEventListener('click', (e) => {
    e.preventDefault();
    showLogin();
    updateURL('login');
});

toRegisterLink.addEventListener('click', (e) => {
    e.preventDefault();
    showRegistration();
    updateURL('register');
});

// Registration Form Handling
document.getElementById('registration-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    if (username && password) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', btoa(password)); // Simple base64 encoding for example

        alert('Registration successful!');
        showLogin();
        updateURL('login');
        document.getElementById('register-username').value = '';
        document.getElementById('register-password').value = '';
    }
});

// Login Form Handling
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (username === localStorage.getItem('username') && btoa(password) === localStorage.getItem('password')) {
        alert('Login successful!');
        showSecured();
        updateURL('secured');
    } else {
        alert('Invalid credentials');
    }

    document.getElementById('login-username').value = '';
    document.getElementById('login-password').value = '';
});

// Logout Button Handling
document.getElementById('logout-btn').addEventListener('click', () => {
    alert('Logged out successfully!');
    showLogin();
    updateURL('login');
});
