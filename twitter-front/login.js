document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");

    if (username === "" || password === "") {
        errorMessage.textContent = "Por favor, completa todos los campos.";
    } else {
        errorMessage.textContent = "";
        window.location.href = "index.html"; // Redirige al index.html
    }
});
