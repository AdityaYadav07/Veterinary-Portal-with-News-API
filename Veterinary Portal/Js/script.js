// contact form js

function validateForm() {
    let valid = true;

    // Clear previous errors
    clearErrors();

    // Name validation
    const name = document.getElementById('name').value;
    if (name.trim() === "") {
        showError('nameError', 'Name is required.');
        valid = false;
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === "") {
        showError('emailError', 'Email is required.');
        valid = false;
    } else if (!emailPattern.test(email)) {
        showError('emailError', 'Please enter a valid email address.');
        valid = false;
    }

    // Message validation
    const message = document.getElementById('message').value;
    if (message.trim() === "") {
        showError('messageError', 'Message is required.');
        valid = false;
    } else if (message.trim().length < 10) {
        showError('messageError', 'Message must be at least 10 characters long.');
        valid = false;
    }

    return valid;
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function (element) {
        element.style.display = 'none';
    });
}
