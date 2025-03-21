document.getElementById("login-form").addEventListener("submit", async function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");

    if (username === "" || password === "") {
        errorMessage.textContent = "Por favor, completa todos los campos.";
        return;
    }

    try {
        const response = await fetch("http://localhost:8080/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem("token", data.token);
            localStorage.setItem("username", data.username);  // Guardar sin @
            localStorage.setItem("name", data.name);
            window.location.href = "index.html";
        } else {
            errorMessage.textContent = "Credenciales incorrectas.";
        }
    } catch (error) {
        errorMessage.textContent = "Error de conexión.";
    }
});
