document.addEventListener("DOMContentLoaded", async () => {
    const token = localStorage.getItem("token");

    if (!token) {
        window.location.href = "login.html";
        return;
    }

    await fetchPosts();
});

const tweetContainer = document.getElementById("tweet-container");
const emptyMessage = document.getElementById("emptyMessage");
const postButton = document.getElementById("postButton");
const newPostContent = document.getElementById("newPostContent");

async function fetchPosts() {
    try {
        const response = await fetch("http://localhost:8080/posts", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        });

        if (!response.ok) {
            throw new Error("Error al cargar los posts");
        }

        const tweets = await response.json();
        loadTweets(tweets);
    } catch (error) {
        console.error("Error:", error);
    }
}

function loadTweets(tweets) {
    tweetContainer.innerHTML = "";

    if (tweets.length === 0) {
        emptyMessage.classList.remove("hidden");
        return;
    } else {
        emptyMessage.classList.add("hidden");
    }

    tweets.forEach(tweet => {
        addTweetToDOM(tweet, false);
    });
}

function addTweetToDOM(tweet, isNew = true) {
    const tweetElement = document.createElement("div");
    tweetElement.classList.add("tweet");
    tweetElement.innerHTML = `
        <div class="header">
            <span class="name">${tweet.name}</span>
            <span class="username">@${tweet.username}</span>
        </div>
        <div class="content">${tweet.content}</div>
        <div class="actions">
            <button onclick="likeTweet(event, '${tweet.username}')">❤️</button>
            <button onclick="retweet(event, '${tweet.username}')">🔁</button>
            <button onclick="commentTweet(event, '${tweet.username}')">💬</button>
        </div>
    `;

    if (isNew) {
        tweetContainer.prepend(tweetElement);
        window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
        tweetContainer.appendChild(tweetElement);
    }
}



postButton.addEventListener("click", async () => {
    const content = newPostContent.value.trim();
    if (!content) return;

    // Recuperar username y name desde el localStorage
    const username = localStorage.getItem("username");
    const name = localStorage.getItem("name");

    if (!username || !name) {
        console.error("Error: No se encontró el usuario en el localStorage.");
        return;
    }

    try {
        const response = await fetch("http://localhost:8080/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({ name, username, content })
        });

        if (!response.ok) throw new Error("Error al publicar");

        const newTweet = await response.json();
        addTweetToDOM(newTweet, true);
        newPostContent.value = "";
        emptyMessage.classList.add("hidden");
    } catch (error) {
        console.error("Error:", error);
    }
});

