document.getElementById('babyRegistrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    if (!this.checkValidity()) {
        event.stopPropagation();
        alert('Please fill all required fields.');
    } else {
        alert('Registration successful!');
        // Optionally clear the form or send data to a server here
    }
    this.classList.add('was-validated');
});
