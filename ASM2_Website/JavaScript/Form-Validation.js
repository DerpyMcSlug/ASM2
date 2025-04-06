// Login Form Validation
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loginForm")?.addEventListener("submit", function(event) {
        event.preventDefault();        
        let isValid = true;

        // Clear Previous errors
        document.getElementById('emailLoginError').textContent = '';
        document.getElementById('passwordLoginError').textContent = '';

        let email = document.getElementById("loginEmail").value.trim();
        let password = document.getElementById("loginPassword").value.trim();

        // Validate Email
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (email === '') {
            document.getElementById('emailLoginError').textContent = 'Email is required.';
            isValid = false;
        } else if (!emailPattern.test(email)) {
            document.getElementById('emailLoginError').textContent = 'Enter a valid email.';
            isValid = false;
        } else {
            document.getElementById('emailLoginError').textContent = ''; // Clear error if valid
        }

        // Validate Password
        const passwordPattern = /^[a-zA-Z0-9_-]+$/;
        if (password.length < 6 || password.length == 0) {
            document.getElementById('passwordLoginError').textContent = 'Password must be at least 6 characters.';
            isValid = false;
        } else if (!passwordPattern.test(password)) {
            document.getElementById('passwordLoginError').textContent = 'Password cannot contain special characters.';
            isValid = false;
        } else {
            document.getElementById('passwordLoginError').textContent = ''; // Clear error if valid
        }

        if (isValid) {
            alert("Login successful!");
            this.submit();
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // Register Form Validation
    document.getElementById("registerForm")?.addEventListener("submit", function(event) {
        event.preventDefault();
        let isValid = true;

        // Clear Previous errors
        document.getElementById('usernameError').textContent = '';
        document.getElementById('emailError').textContent = '';
        document.getElementById('registerError').textContent = '';
        document.getElementById('confirmError').textContent = '';

        //Get Values
        let name = document.getElementById("registerName").value.trim();
        let email = document.getElementById("registerEmail").value.trim();
        let password = document.getElementById("registerPassword").value.trim();
        let confirmPassword = document.getElementById("confirmPassword").value.trim();

        // Validate username (no special characters)
        const usernamePattern = /^[a-zA-Z0-9_-]+$/;
        if (name.length < 3 || name == '') {
            document.getElementById('usernameError').textContent = 'Full name must be at least 3 characters.';
            isValid = false;
        } else if (!usernamePattern.test(name)) {
            document.getElementById('usernameError').textContent = 'Username cannot contain special characters.';
            isValid = false;
        } else {
            document.getElementById('usernameError').textContent = ''; // Clear error if valid
        }

        // Validate Email
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (email === '') {
            document.getElementById('emailError').textContent = 'Email is required.';
            isValid = false;
        } else if (!emailPattern.test(email)) {
            document.getElementById('emailError').textContent = 'Enter a valid email.';
            isValid = false;
        } else {
            document.getElementById('emailError').textContent = ''; // Clear error if valid
        }

        // Validate Password
        const passwordPattern = /^[a-zA-Z0-9_-]+$/;
        if (password.length < 6 || password.length == 0) {
            document.getElementById('registerError').textContent = 'Password must be at least 6 characters.';
            isValid = false;
        } else if (!passwordPattern.test(password)) {
            document.getElementById('registerError').textContent = 'Password cannot contain special characters.';
            isValid = false;
        } else {
            document.getElementById('registerError').textContent = ''; // Clear error if valid
        }

        if (confirmPassword !== password) {
            document.getElementById('confirmError').textContent = 'Password is not identical.';
            isValid = false; 
        } else {
            document.getElementById('confirmError').textContent = ''; // Clear error if valid
        }

        if (isValid){
            alert("Registration successful!");
            this.submit();
        }
    });
});
