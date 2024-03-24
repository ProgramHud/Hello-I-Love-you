function submitMessage() {
    var message = document.getElementById("messageInput").value;
    if (message.trim() !== "") {
        var messageBoard = document.getElementById("messageBoard");
        var newMessage = document.createElement("div");
        newMessage.textContent = message;
        messageBoard.appendChild(newMessage);
        document.getElementById("messageInput").value = "";
    } else {
        alert("Por favor, digite uma mensagem antes de enviar.");
    }
}
