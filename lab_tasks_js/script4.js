document.getElementById("addBtn").addEventListener("click", function() {
    var name = document.getElementById("sName").value;
    var roll = document.getElementById("sRoll").value;
    var dept = document.getElementById("sDept").value;
    var error = document.getElementById("formError");

    if (name === "" || roll === "" || dept === "") {
        error.innerText = "All fields are required";
        return;
    }

    error.innerText = "";

    var table = document.getElementById("studentTable");
    var row = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.innerText = name;
    var td2 = document.createElement("td");
    td2.innerText = roll;
    var td3 = document.createElement("td");
    td3.innerText = dept;
    var td4 = document.createElement("td");

    var delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.addEventListener("click", function() {
        row.remove();
    });

    td4.appendChild(delBtn);
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    table.appendChild(row);

    document.getElementById("sName").value = "";
    document.getElementById("sRoll").value = "";
    document.getElementById("sDept").value = "";
});