document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("register-error-message");

    if (!name || !email || !username || !password) {
        errorMessage.textContent = "Todos los campos son obligatorios.";
        return;
    }

    const userData = { name, email, username, password, role: "USER" };

    fetch("http://localhost:8080/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData)
    })
        .then(response => {
            if (response.ok) {
                window.location.href = "login.html";
            } else {
                return response.text();
            }
        })
        .then(error => {
            if (error) errorMessage.textContent = error;
        })
        .catch(error => {
            console.error("Error:", error);
            errorMessage.textContent = "Error al registrarse.";
        });
});
