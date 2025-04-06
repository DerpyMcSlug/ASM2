document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("profileForm")?.addEventListener("submit", function(event) {
        event.preventDefault();

        let name = document.getElementById("profileName").value.trim();
        let phone = document.getElementById("profilePhone").value.trim();
        let address = document.getElementById("profileAddress").value.trim();

        if (name.length < 3) {
            alert("Full name must be at least 3 characters.");
            return;
        }

        if (!/^\+?[0-9]{10,15}$/.test(phone)) {
            alert("Please enter a valid phone number.");
            return;
        }

        if (address.length < 10) {
            alert("Address must be at least 10 characters.");
            return;
        }

        alert("Profile updated successfully!");
    });
});