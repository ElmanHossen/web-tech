document.getElementById("userType").addEventListener("change", function() {
    var type = this.value;
    var rollField = document.getElementById("rollField");
    var deptField = document.getElementById("deptField");

    if (type === "student") {
        rollField.style.display = "block";
        deptField.style.display = "none";
    } else if (type === "teacher") {
        rollField.style.display = "none";
        deptField.style.display = "block";
    } else {
        rollField.style.display = "none";
        deptField.style.display = "none";
    }
});