document.getElementById("analyzeBtn").addEventListener("click", function() {
    var text = document.getElementById("inputText").value;

    if (text.trim() === "") {
        document.getElementById("charCount").innerText = "0";
        document.getElementById("wordCount").innerText = "0";
        document.getElementById("reversed").innerText = "";
        return;
    }

    var chars = text.length;
    var words = text.trim().split(/\s+/).length;
    var reversed = text.split("").reverse().join("");

    document.getElementById("charCount").innerText = chars;
    document.getElementById("wordCount").innerText = words;
    document.getElementById("reversed").innerText = reversed;
});