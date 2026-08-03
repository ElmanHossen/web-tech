var isDark = false;

document.getElementById("toggleBtn").addEventListener("click", function() {
    var body = document.body;
    var header = document.querySelector("header");
    var content = document.querySelector(".content");
    var footer = document.querySelector("footer");
    var btn = document.getElementById("toggleBtn");

    if (isDark === false) {
        body.style.backgroundColor = "#1a1a1a";
        body.style.color = "white";
        header.style.backgroundColor = "#2c3e50";
        content.style.backgroundColor = "#2c2c2c";
        footer.style.backgroundColor = "#2c2c2c";
        footer.style.color = "white";
        btn.innerText = "Switch to Light Mode";
        isDark = true;
    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        header.style.backgroundColor = "#3498db";
        content.style.backgroundColor = "white";
        footer.style.backgroundColor = "#ecf0f1";
        footer.style.color = "black";
        btn.innerText = "Switch to Dark Mode";
        isDark = false;
    }
});