document.addEventListener('DOMContentLoaded', () => {
    const signInBtn = document.getElementById('signInBtn');
    const signUpBtn = document.getElementById('signUpBtn');
    const message = document.getElementById('message');

    // Helper function to retrieve user data from localStorage
    function getUsers() {
        return JSON.parse(localStorage.getItem('users')) || {};
    }

    // Helper function to save user data to localStorage
    function saveUsers(users) {
        localStorage.setItem('users', JSON.stringify(users));
    }

    // Sign-Up Handler
    signUpBtn.addEventListener('click', () => {
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;

        if (!username || !password) {
            message.textContent = "Please enter both a username and password.";
            message.style.color = "red";
            return;
        }

        const users = getUsers();

        if (users[username]) {
            message.textContent = "Username already exists. Please choose another.";
            message.style.color = "red";
        } else {
            users[username] = password; // Store the username and password
            saveUsers(users);
            message.textContent = "Sign-up successful! You can now sign in.";
            message.style.color = "green";
        }
    });

    // Sign-In Handler
    signInBtn.addEventListener('click', () => {
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;

        if (!username || !password) {
            message.textContent = "Please enter both a username and password.";
            message.style.color = "red";
            return;
        }

        const users = getUsers();

        if (users[username] && users[username] === password) {
            message.textContent = `Welcome back, ${username}! You are now signed in.`;
            message.style.color = "green";
        } else {
            message.textContent = "Invalid username or password. Please try again.";
            message.style.color = "red";
        }
    });
});
