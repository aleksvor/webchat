document.addEventListener("DOMContentLoaded", load, false)

function sendMsg() {
    var msgBox = document.getElementById("message-type");
    var msgUL = document.getElementById("msg-chain");

    var li = document.createElement("li");
    li.innerHTML = "<span class=\"msg-own\">" + msgBox.value + "</span>";
    li.className = "msg-box";

    msgUL.appendChild(li);
    msgBox.value = "";
}

function load() {
    document.getElementById("btn-send").onclick = sendMsg;
    document.getElementById("message-type").value = "";
}
