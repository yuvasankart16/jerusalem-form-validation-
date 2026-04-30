const form = document.getElementById("myForm");

form.addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmpassword = document.getElementById("confirmPassword").value; 

    let isValid = true;

    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("confirmError").innerText = "";

    if(name.trim() === ""){
        document.getElementById("nameError").innerText = "Name is required";
        isValid = false;
    }

    let emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailpattern.test(email)){
        document.getElementById("emailError").innerText = "Invalid email format";
        isValid = false;
    }

    if(password.length < 9){
        document.getElementById("passwordError").innerText = "Password must be at least 10 characters long";
        isValid = false;
    }

    if(password !== confirmpassword){
        document.getElementById("confirmError").innerText = "Passwords do not match";
        isValid = false;
    }

    if(isValid){
        alert("Form submitted successfully");
        form.requestFullscreen();
    }
});