// Função para salvar a mensagem no armazenamento local
function submitMessage() {
    var message = document.getElementById("messageInput").value;
    if (message.trim() !== "") {
        // Adiciona a mensagem ao armazenamento local
        if (localStorage.getItem("messages") === null) {
            localStorage.setItem("messages", JSON.stringify([message]));
        } else {
            var messages = JSON.parse(localStorage.getItem("messages"));
            messages.push(message);
            localStorage.setItem("messages", JSON.stringify(messages));
        }
        // Exibe a mensagem no quadro de mensagens
        displayMessages();
        document.getElementById("messageInput").value = "";
    } else {
        alert("Por favor, digite uma mensagem antes de enviar.");
    }
}

// Função para exibir as mensagens salvas
function displayMessages() {
    var messageBoard = document.getElementById("messageBoard");
    messageBoard.innerHTML = "";
    var messages = JSON.parse(localStorage.getItem("messages"));
    if (messages !== null) {
        messages.forEach(function(message) {
            var newMessage = document.createElement("div");
            newMessage.textContent = message;
            messageBoard.appendChild(newMessage);
        });
    }
}

// Exibe as mensagens ao carregar a página
window.onload = function() {
    displayMessages();
};
