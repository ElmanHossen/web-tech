document.getElementById("regForm").addEventListener("submit", function(e) {
    e.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm = document.getElementById("confirm").value;
    var phone = document.getElementById("phone").value;

    var valid = true;

    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passError").innerText = "";
    document.getElementById("confirmError").innerText = "";
    document.getElementById("phoneError").innerText = "";
    document.getElementById("success").innerText = "";

    if (name === "") {
        document.getElementById("nameError").innerText = "Name is required";
        valid = false;
    }

    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        document.getElementById("emailError").innerText = "Invalid email format";
        valid = false;
    }

    if (password.length < 6) {
        document.getElementById("passError").innerText = "Password must be at least 6 characters";
        valid = false;
    }

    if (password !== confirm) {
        document.getElementById("confirmError").innerText = "Passwords do not match";
        valid = false;
    }

    if (phone === "" || isNaN(phone)) {
        document.getElementById("phoneError").innerText = "Phone must contain only digits";
        valid = false;
    }

    if (valid) {
        document.getElementById("success").innerText = "Registration Successful!";
    }
});