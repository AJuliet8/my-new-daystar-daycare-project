document.getElementById('sitterRegistrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    if (!this.checkValidity()) {
        event.stopPropagation();
        alert('Please ensure all required fields are filled correctly.');
    } else {
        alert('Registration successful!');
        // Add logic to handle form data, e.g., send to a server or local storage
    }
    this.classList.add('was-validated');
});
