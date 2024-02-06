// NAV BAR Category(s)
const homeBtn = document.getElementById('home');
const dashboardBtn = document.getElementById('dashboard');
const loginBtn = document.getElementById('login');
const logoutBtn = document.getElementById('logout');

homeBtn.addEventListener('click', () => {
    window.location.href = "/"
});

dashboardBtn.addEventListener('click', () => {
    window.location.href = "/dashboard"
});

loginBtn.addEventListener('click', () => {
    window.location.href = "/login"
});

logoutBtn.addEventListener('click', () => {
    // window.location.href = "/logout"
    const result = confirm('Are you sure you want to log out?')

    if (result) {
        window.location.href = "/logout"
    };
});

// Login / Sign-Up page
const goSignUp = document.getElementById('login_to_signup');

goSignUp.addEventListener('click', () => {
    window.location.href = "/signup"
});


const goLogin = document.getElementById('signup_to_login');

goLogin.addEventListener('click', () => {
    window.location.href = "/login"
});