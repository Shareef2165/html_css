document.getElementById('registrationForm').addEventListener('submit', function(event) {
    var form = event.target;
    var isValid = true;

    // Validate First Name
    var firstname = form.firstname.value.trim();
    if (firstname === "") {
        alert("First Name is required.");
        isValid = false;
    }

    // Validate Last Name
    var lastname = form.lastname.value.trim();
    if (lastname === "") {
        alert("Last Name is required.");
        isValid = false;
    }

    // Validate Email
    var email = form.email.value.trim();
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        isValid = false;
    }

    // Validate Password
    var password = form.password.value.trim();
    if (password === "") {
        alert("Password is required.");
        isValid = false;
    }

    // Validate Pincode
    var pincode = form.pincode.value.trim();
    var pincodePattern = /^\d{6}$/;
    if (!pincodePattern.test(pincode)) {
        alert("Please enter a valid 6-digit pincode.");
        isValid = false;
    }

    // Validate Phone Number
    var number = form.number.value.trim();
    var phonePattern = /^\d{10}$/;
    if (!phonePattern.test(number)) {
        alert("Please enter a valid 10-digit phone number.");
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});