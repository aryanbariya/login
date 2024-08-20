const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const registerContainer = document.getElementById('registerContainer');
const securedPage = document.getElementById('securedPage');
const message = document.getElementById('message');
const registerMessage = document.getElementById('registerMessage');
const userSpan = document.getElementById('user');
const logoutButton = document.getElementById('logout');
const registerLink = document.getElementById('registerLink');
const loginLink = document.getElementById('loginLink');

let users = [];

registerLink.addEventListener('click', () => {
    loginForm.parentElement.classList.add('hidden');
    registerContainer.classList.remove('hidden');
});

loginLink.addEventListener('click', () => {
    registerContainer.classList.add('hidden');
    loginForm.parentElement.classList.remove('hidden');
});

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    if (users.some(user => user.username === username)) {
        registerMessage.textContent = 'Username already exists!';
        return;
    }

    users.push({ username, password });
    registerMessage.textContent = 'Registration successful! You can now login.';
    registerForm.reset();
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        userSpan.textContent = username;
        securedPage.classList.remove('hidden');
        loginForm.parentElement.classList.add('hidden');
    } else {
        message.textContent = 'Invalid username or password!';
    }
});

logoutButton.addEventListener('click', () => {
    securedPage.classList.add('hidden');
    loginForm.parentElement.classList.remove('hidden');
    message.textContent = '';
    loginForm.reset();
});
