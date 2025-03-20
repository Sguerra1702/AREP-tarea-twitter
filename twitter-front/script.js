const tweetContainer = document.getElementById("tweet-container");
const overlay = document.getElementById("overlay");
const overlayContent = document.getElementById("overlay-content");

const tweets = [
    { profileName: "Juan Pérez", username: "@juanperez", content: "Hoy es un gran día para programar!" },
    { profileName: "María López", username: "@marialopez", content: "Me encanta el diseño minimalista." },
    { profileName: "Carlos García", username: "@carlosg", content: "¿Alguien más está viendo la serie del momento?" },
    { profileName: "Ana Torres", username: "@ana_torres", content: "Estoy probando este nuevo clon de Twitter 😃" },
    { profileName: "Luis Mendoza", username: "@luis_mendoza", content: "El café de la mañana es sagrado ☕" },
    { profileName: "Sofía Ramírez", username: "@sofiaramirez", content: "¡Ya casi es fin de semana!" },
    { profileName: "Jorge Medina", username: "@jorgemedina", content: "¿Alguien sabe cómo hacer un carrito de compras?" },
    { profileName: "Laura Gómez", username: "@lauragomez", content: "¡Hoy es el día de mi cumpleaños! 🎉" },
    { profileName: "Pedro Sánchez", username: "@pedrosanchez", content: "¿Qué opinan de la última película de ciencia ficción?" },
    { profileName: "Carmen Ruiz", username: "@carmenruiz", content: "¡Estoy aprendiendo a tocar la guitarra!" },
    { profileName: "Miguel Vargas", username: "@miguelvargas", content: "¿Alguien más está emocionado por el nuevo iPhone?" },
    { profileName: "Elena Martínez", username: "@elenamartinez", content: "¡Hoy es un día soleado!" },
    { profileName: "Ricardo Flores", username: "@ricardoflores", content: "¡Estoy muy emocionado por el hackathon!" },
    { profileName: "Gabriela Soto", username: "@gabrielasoto", content: "¡Ya casi es Navidad!" },
    { profileName: "Javier Cervantes", username: "@javiercervantes", content: "¡Hoy es el día de mi graduación!" },
    { profileName: "Fernanda Guzmán", username: "@fernandaguzman", content: "¡Estoy aprendiendo a cocinar!" },
    { profileName: "Roberto Jiménez", username: "@robertojimenez", content: "¡Hoy es el día de mi boda!" },
    { profileName: "Alejandra Varela", username: "@alejandravarela", content: "¡Estoy muy emocionada por el concierto de mañana!" },
    { profileName: "Arturo Mendoza", username: "@arturomendoza", content: "¡Hoy es el día de mi aniversario!" },
    { profileName: "Diana Sánchez", username: "@dianasanchez", content: "¡Hoy es el día de mi graduación!" },
    { profileName: "Jesús Torres", username: "@jesustorres", content: "¡Estoy muy emocionado por el hackathon!" },
    { profileName: "Mariana Gómez", username: "@marianagomez", content: "¡Ya casi es Navidad!" },
    { profileName: "Rosa Cervantes", username: "@rosacervantes", content: "¡Hoy es el día de mi graduación!" },
    { profileName: "José Guzmán", username: "@joseguzman", content: "¡Estoy aprendiendo a cocinar!" },
    { profileName: "Verónica Jiménez", username: "@veronicajimenez", content: "¡Hoy es el día de mi boda!" },
    { profileName: "Eduardo Varela", username: "@eduardovarela", content: "¡Estoy muy emocionado por el concierto de mañana!" },
    
];

function loadTweets() {
    tweetContainer.innerHTML = "";
    tweets.forEach((tweet, index) => {
        const tweetElement = document.createElement("div");
        tweetElement.classList.add("tweet");
        tweetElement.innerHTML = `
            <div class="header">
                <span class="name">${tweet.profileName}</span>
                <span class="username">${tweet.username}</span>
            </div>
            <div class="content">${tweet.content}</div>
            <div class="actions">
                <button onclick="likeTweet(event, ${index})">❤️</button>
                <button onclick="retweet(event, ${index})">🔁</button>
                <button onclick="commentTweet(event, ${index})">💬</button>
            </div>
        `;
        tweetElement.addEventListener("click", () => showOverlay(tweet));
        tweetContainer.appendChild(tweetElement);
    });
}

function showOverlay(tweet) {
    overlayContent.innerHTML = `
        <div class="header">
            <span class="name">${tweet.profileName}</span>
            <span class="username">${tweet.username}</span>
        </div>
        <div class="content">${tweet.content}</div>
        <div class="actions">
            <button>❤️</button>
            <button>🔁</button>
            <button>💬</button>
        </div>
    `;
    overlay.classList.remove("hidden");
}

// Cerrar overlay al hacer clic fuera
overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
        overlay.classList.add("hidden");
    }
});

function likeTweet(event, index) {
    event.stopPropagation();
    alert(`Te gustó el tweet de ${tweets[index].profileName}`);
}

function retweet(event, index) {
    event.stopPropagation();
    alert(`Retweeteaste el tweet de ${tweets[index].profileName}`);
}

function commentTweet(event, index) {
    event.stopPropagation();
    alert(`Comentaste en el tweet de ${tweets[index].profileName}`);
}

// Cargar tweets al inicio
loadTweets();
