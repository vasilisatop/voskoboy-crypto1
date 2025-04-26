// script.js

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        // Simple form validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        
        if (name === "" || email === "") {
            alert("Please fill in all fields.");
            event.preventDefault();
        }
    });
});
