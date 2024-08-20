document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('donationForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        // Clear previous errors
        clearErrors();

        // Get form values
        const name = document.getElementById('name').value.trim();
        const age = parseInt(document.getElementById('age').value, 10);
        const email = document.getElementById('email').value.trim();
        const bloodType = document.getElementById('bloodType').value;
        const donationDate = document.getElementById('donationDate').value;
        const agreeToTerms = document.getElementById('agreeToTerms').checked;

        let valid = true;

        // Name validation
        if (name === '') {
            displayError('nameError', 'Full name is required');
            valid = false;
        }

        // Age validation
        if (isNaN(age) || age < 18 || age > 65) {
            displayError('ageError', 'Age must be between 18 and 65');
            valid = false;
        }

        // Email validation
        if (email === '' || !validateEmail(email)) {
            displayError('emailError', 'Valid email is required');
            valid = false;
        }

        // Blood type validation
        if (bloodType === '') {
            displayError('bloodTypeError', 'Please select your blood type');
            valid = false;
        }

        // Donation date validation
        if (donationDate === '') {
            displayError('donationDateError', 'Preferred donation date is required');
            valid = false;
        }

        // Terms and conditions validation
        if (!agreeToTerms) {
            displayError('termsError', 'You must agree to the terms and conditions');
            valid = false;
        }

        if (valid) {
            // If the form is valid, you can submit it or perform any other action
            alert('Thank you for your donation request!');
            // form.submit(); // Uncomment this to submit the form if not using AJAX
        }
    });

    // Helper function to validate email
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Helper function to display errors
    function displayError(elementId, message) {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = message;
        }
    }

    // Helper function to clear errors
    function clearErrors() {
        const errors = document.querySelectorAll('.error');
        errors.forEach(error => error.textContent = '');
    }
});
