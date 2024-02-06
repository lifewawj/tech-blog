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
    console.log("Login Button has been clicked!")
    window.location.href = "/login"
});

logoutBtn.addEventListener('click', () => {
    window.location.href = "/logout"
});

