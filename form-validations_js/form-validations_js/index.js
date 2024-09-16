// document.getElementById('registrationForm').addEventListener('submit', function(event) {
//     var form = event.target;
//     var isValid = true;
    // const firstname =document.getElementById("firstname").value.trim();
    // const lastname =document.getElementById("lastname").value.trim();
    // const email = document.getElementById("email").value.trim();
    // const password = document.getElementById("password").value.trim();
    // const pincode = document.getElementById("pincode").value.trim();
    // const number = document.getElementById("number").value.trim();

    // const firstnameerror =document.getElementById("firstnameerror");
    // const lastnameerror =document.getElementById("lastnameerror");
    // const pincodeError =document.getElementById("pincodeError");
    // const mobilenumbererror =document.getElementById("mobilenumbererror");
    // const emailError = document.getElementById("emailError");
    // const passwordError =document.getElementById("passwordError");

    // emailError.textContent = "";
    // passwordError.textContent = "";
    // firstnameerror.textContent ="";
    // lastnameerror.textContent ="";
    
    // mobilenumbererror.textContent="";
    // pincodeError.textContent="";

    
//     var firstname = form.firstname.value.trim();
    
//     if(firstname === "" || firstname.length <= 7 ){
//         alert("First Name is required.");
//         isValid = false;
//     }
//     var lastname = form.lastname.value.trim();
//     if(lastname === "" || lastname.length <= 7 ){
//         alert("Last Name is required.");
//         isValid = false;
//     }

//     var email = form.email.value.trim();
//     var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     if (!emailPattern.test(email)) {
//         alert("Please enter a valid email address.");
//         isValid = false;
//     }
//     var password = form.password.value.trim();
//     // if(password === "" || password.length < 8 )
//     if(password === ""){
//         alert("Password is required.");
//         isValid = false;
//     }
//     var pincode = form.pincode.value.trim();
//     var pincodePattern = /^\d{6}$/;
//     if (!pincodePattern.test(pincode)) {
//         alert("Please enter a valid 6-digit pincode.");
//         isValid = false;
//     }
//     var number = form.number.value.trim();
//     var phonePattern = /^\d{10}$/;
//     if (!phonePattern.test(number)) {
//         alert("Please enter a valid 10-digit phone number.");
//         isValid = false;
//     }
//     if (!isValid) {
//         event.preventDefault();
//     }
// })
// document.getElementById('registrationForm').addEventListener('submit', function(event) {
//     event.preventDefault();

    
//     const errors = document.querySelectorAll('.error');
//     errors.forEach(error => error.textContent = '');

    
//     const firstname = document.getElementById('firstname').value;
//     const lastname = document.getElementById('lastname').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     const pincode = document.getElementById('pincode').value;
//     const number = document.getElementById('number').value;

    
//     if (firstname.length > 7) {
//         document.getElementById('firstnameError').textContent = 'First name should not be more than 7 characters';
//     }

    
//     if (lastname.length > 7) {
//         document.getElementById('lastnameError').textContent = 'Last name should not be more than 7 characters';
//     }

   
//     const emailPattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
//     if (!emailPattern.test(email)) {
//         document.getElementById('emailError').textContent = 'Invalid email';
//     }
//     if (password.length > 8) {
//         document.getElementById('passwordError').textContent = 'Password should not be more than 8 characters';
//     }

    
//     if (pincode.length > 7) {
//         document.getElementById('pincodeError').textContent = 'Pincode should not exceed more than 7 characters';
//     }

   
    
//     if (number.length >10) {
//         document.getElementById('numberError').textContent = 'number should not be excessed more than 10 characters';
//     }

   
//     if (
//         firstname.length <= 7 &&
//         lastname.length <= 7 &&
//         number.length<= 10&&
//         emailPattern.test(email) &&
//         password.length > 8 &&
//         pincode.length <= 7 
       
//     ) {
//         alert('Form submitted successfully!');
       
//     }
// });
function validateForm() {
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const pincode = document.getElementById("pincode").value;
    const number= document.getElementById("number").value;

    const firstnameError = document.getElementById("firstnameError"); 
    const lastnameError = document.getElementById("lastnameError" );
    const emailError = document.getElementById( "emailError");
    const passwordError = document.getElementById( "passwordError");
    const pincodeError = document.getElementById( "pincodeError");
    const pnone_numberError = document.getElementById( "numberError");

    firstnameError.textContent = "";
    lastnameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    pincodeError.textContent = "";
    pnone_numberError.textContent = "";

    let isValid = true;

    if (firstname === "" ||firstname.length<14) {
        firstnameError.textContent =
            "Please enter your name properly.";
        isValid = false;
    }

    if (lastname === "" ||lastname.length<7) {
        lastnameError.textContent =
            "Please enter your lastname.";
        isValid = false;
    }

    if (email === "" || !email.includes("@")) {
        emailError.textContent =
            "Please enter a valid email address.";
        isValid = false;
    }

    if (password === "" || password.length < 8) {
        passwordError.textContent =
            "Please enter a password with at least 6 characters.";
        isValid = false;
    }

    if (pincode  === ""|| pincode .length < 7) {
        pincodeError.textContent =
            "Please select your course.";
        isValid = false;
    }

    if (number  === ""|| number.length <= 10) {
        pnone_numberError.textContent =
            "Please agree to the above information.";
        isValid = false;
    }

    return isValid;
}