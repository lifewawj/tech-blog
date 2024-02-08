document.addEventListener('DOMContentLoaded', () => {

    // MAIN & NAV BAR Category(s) 
    const logo = document.getElementById('logo');
    const homeBtn = document.getElementById('home');
    const dashboardBtn = document.getElementById('dashboard');
    const loginBtn = document.getElementById('login');
    const logoutBtn = document.getElementById('logout');
    const goSignUp = document.getElementById('goSignUp');

    logo.addEventListener('click', () => {
        window.location.href = "/";
    });

    homeBtn.addEventListener('click', () => {
        window.location.href = "/";
    });

    dashboardBtn.addEventListener('click', () => {
        window.location.href = "/dashboard";
    });

    loginBtn.addEventListener('click', () => {
        window.location.href = "/login";
    });

    logoutBtn.addEventListener('click', () => {
        const result = confirm('Are you sure you want to log out?');
        if (result) {
            window.location.href = "/logout";
        }
    });

    // Login / Sign-Up page
    goSignUp.addEventListener('click', () => {
        window.location.href = "/signup";
    });
});

// TODO:
// Sign Up functionality
// Create a function that takes the username, and password from the user's req
// Through an if statement check if the username and password are available waiting for the user's reponse
// Through that will than stringify and store their response in a JSON body format


// Assign the sign-up form to an addEventListener 
const signUpForm = document.querySelector('.signup-form')
signUpForm.addEventListener('submit', signupFormHandler);