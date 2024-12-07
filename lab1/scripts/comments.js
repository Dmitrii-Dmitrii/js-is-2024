document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById("preloader");
    const commentsContainer = document.getElementById("comments-container");

    let isFirstFetch = true;

    async function fetchComments() {
        try {
            preloader.style.display = "block";
            commentsContainer.replaceChildren();

            // Псевдослучайная фильтрация
            const url = isFirstFetch
                ? "https://jsonplaceholder.typicode.com/comments?id_gte=100&_limit=5"
                : "https://jsonplaceholder.typicode.com/comments?id_lte=200&_limit=5";
            isFirstFetch = !isFirstFetch;

            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("Ошибка загрузки данных");
            }

            const comments = await response.json();
            preloader.style.display = "none";

            if (comments.length === 0) {
                const noCommentsMessage = document.createElement("p");
                noCommentsMessage.textContent = "Нет комментариев для отображения.";
                commentsContainer.appendChild(noCommentsMessage);
                return;
            }

            comments.forEach((comment) => {
                const commentElement = document.createElement("div");
                commentElement.classList.add("comment");

                const commentTitle = document.createElement("h3");
                commentTitle.textContent = comment.name;
                commentElement.appendChild(commentTitle);

                const commentEmail = document.createElement("p");
                const emailStrong = document.createElement("strong");
                emailStrong.textContent = "Email:";
                commentEmail.appendChild(emailStrong);
                commentEmail.appendChild(document.createTextNode(` ${comment.email}`));
                commentElement.appendChild(commentEmail);

                const commentBody = document.createElement("p");
                commentBody.textContent = comment.body;
                commentElement.appendChild(commentBody);

                commentsContainer.appendChild(commentElement);
            });
        } catch (error) {
            preloader.style.display = "none";
            const errorMessage = document.createElement("p");
            errorMessage.classList.add("error-message");
            errorMessage.textContent = `⚠ Что-то пошло не так: ${error.message}`;
            commentsContainer.appendChild(errorMessage);
        }
    }

    fetchComments();
});