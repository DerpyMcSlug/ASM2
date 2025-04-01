// Login Form Validation
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loginForm")?.addEventListener("submit", function(event) {
        event.preventDefault();

        let email = document.getElementById("loginEmail").value.trim();
        let password = document.getElementById("loginPassword").value.trim();

        if (!email.includes("@") || !email.includes(".")) {
            alert("Please enter a valid email address.");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters.");
            return;
        }

        alert("Login successful!");
        this.submit();
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // Register Form Validation
    document.getElementById("registerForm")?.addEventListener("submit", function(event) {
        event.preventDefault();

        let name = document.getElementById("registerName").value.trim();
        let email = document.getElementById("registerEmail").value.trim();
        let password = document.getElementById("registerPassword").value.trim();
        let confirmPassword = document.getElementById("confirmPassword").value.trim();

        if (name.length < 3) {
            alert("Full name must be at least 3 characters.");
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            alert("Please enter a valid email address.");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        alert("Registration successful!");
        this.submit();
    });
});
