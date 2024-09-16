document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Clear previous errors
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.textContent = '');

    // Get form values
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const pincode = document.getElementById('pincode').value;
    const number = document.getElementById('number').value;

    // Validate First Name
    if (firstname.length > 7) {
        document.getElementById('firstnameError').textContent = 'First name should not be more than 7 characters';
    }

    // Validate Last Name
    if (lastname.length > 7) {
        document.getElementById('lastnameError').textContent = 'Last name should not be more than 7 characters';
    }

    // Validate Email
    const emailPattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email';
    }

    // Validate Pincode
    if (pincode.length > 7) {
        document.getElementById('pincodeError').textContent = 'Pincode should not exceed more than 7 characters';
    }

    // Validate Number
    const numberPattern = /^\d+$/;
    if (!numberPattern.test(number)) {
        document.getElementById('numberError').textContent = 'Invalid number';
    }

    // If all validations pass, you can submit the form or handle it here
    if (
        firstname.length <= 7 &&
        lastname.length <= 7 &&
        emailPattern.test(email) &&
        pincode.length <= 7 &&
        numberPattern.test(number)
    ) {
        alert('Form submitted successfully!');
        // Handle form submission, e.g., send data to the server
    }
});
