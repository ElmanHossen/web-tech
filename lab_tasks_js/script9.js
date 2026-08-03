var isDark = false;

document.getElementById("themeBtn").addEventListener("click", function() {
    var body = document.body;
    var header = document.querySelector("header");
    var footer = document.querySelector("footer");
    var about = document.getElementById("about");
    var projects = document.getElementById("projects");
    var contact = document.getElementById("contact");
    var btn = document.getElementById("themeBtn");

    if (isDark === false) {
        body.style.backgroundColor = "#1a1a1a";
        body.style.color = "white";
        header.style.backgroundColor = "#111";
        footer.style.backgroundColor = "#111";
        about.style.backgroundColor = "#2c2c2c";
        projects.style.backgroundColor = "#2c2c2c";
        contact.style.backgroundColor = "#2c2c2c";
        btn.innerText = "Switch to Light Mode";
        isDark = true;
    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        header.style.backgroundColor = "#2c3e50";
        footer.style.backgroundColor = "#2c3e50";
        about.style.backgroundColor = "#f9f9f9";
        projects.style.backgroundColor = "#f0f8ff";
        contact.style.backgroundColor = "#fff5ee";
        btn.innerText = "Switch to Dark Mode";
        isDark = false;
    }
});

document.getElementById("navAbout").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("about").style.display = "block";
    document.getElementById("projects").style.display = "none";
    document.getElementById("contact").style.display = "none";
});

document.getElementById("navProjects").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("about").style.display = "none";
    document.getElementById("projects").style.display = "block";
    document.getElementById("contact").style.display = "none";
});

document.getElementById("navContact").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("about").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("contact").style.display = "block";
});

function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var ampm = "AM";
    var greeting = "";

    if (hours >= 12) {
        ampm = "PM";
    }
    if (hours > 12) {
        hours = hours - 12;
    }
    if (hours === 0) {
        hours = 12;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    var time = hours + ":" + minutes + ":" + seconds + " " + ampm;
    document.getElementById("clock").innerText = time;

    var h = now.getHours();
    if (h >= 5 && h < 12) {
        greeting = "Good Morning";
    } else if (h >= 12 && h < 17) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }
    document.getElementById("greeting").innerText = greeting + "! Welcome to my portfolio.";
}

setInterval(updateClock, 1000);
updateClock();

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    var name = document.getElementById("cName").value;
    var email = document.getElementById("cEmail").value;
    var message = document.getElementById("cMessage").value;
    var valid = true;

    document.getElementById("nameErr").innerText = "";
    document.getElementById("emailErr").innerText = "";
    document.getElementById("msgErr").innerText = "";
    document.getElementById("cSuccess").innerText = "";

    if (name === "") {
        document.getElementById("nameErr").innerText = "Name is required";
        valid = false;
    }

    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        document.getElementById("emailErr").innerText = "Invalid email format";
        valid = false;
    }

    if (message.length < 10) {
        document.getElementById("msgErr").innerText = "Message must be at least 10 characters";
        valid = false;
    }

    if (valid) {
        document.getElementById("cSuccess").innerText = "Message sent successfully!";
    }
});