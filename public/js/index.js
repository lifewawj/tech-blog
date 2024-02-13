const logoutBtn = document.getElementById('logout');

logoutBtn.addEventListener('click', () => {
    const result = confirm('Are you sure you want to log out?');
    if (result === true) {
        window.location.href = "/logout";
    } else {
        window.location.href = "/"
    }
});

// TODO:
// Sign Up functionality
// Create a function that takes the username, and password from the user's req
// Through an if statement check if the username and password are available waiting for the user's reponse
// Through that will than stringify and store their response in a JSON body format
// const signUpFormHandler = () => {

// }


// Assign the sign-up form to an addEventListener 
// const signUpForm = document.querySelector('.signup-form')
// signUpForm.addEventListener('submit', signUpFormHandler)