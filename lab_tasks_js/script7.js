var currentSize = 16;

document.getElementById("bgBtn").addEventListener("click", function() {
    var colors = ["#ffe4e1", "#e0ffff", "#f0fff0", "#fffacd", "#e6e6fa"];
    var random = Math.floor(Math.random() * colors.length);
    document.getElementById("sampleText").style.backgroundColor = colors[random];
});

document.getElementById("sizeBtn").addEventListener("click", function() {
    currentSize = currentSize + 2;
    document.getElementById("sampleText").style.fontSize = currentSize + "px";
});

document.getElementById("centerBtn").addEventListener("click", function() {
    document.getElementById("sampleText").style.textAlign = "center";
});

document.getElementById("resetBtn").addEventListener("click", function() {
    var p = document.getElementById("sampleText");
    p.style.backgroundColor = "white";
    p.style.fontSize = "16px";
    p.style.textAlign = "left";
    currentSize = 16;
});