document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById("preloader");
    const commentsContainer = document.getElementById("comments-container");

    async function fetchComments() {
        try {
            preloader.style.display = "block"; // Показываем preloader
            commentsContainer.innerHTML = ""; // Очищаем контейнер

            // Псевдослучайная фильтрация
            const randomId = Math.random() > 0.5 ? 100 : 200;
            const url = `https://jsonplaceholder.typicode.com/comments?id=${randomId}`;
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("Ошибка загрузки данных");
            }

            const comments = await response.json();
            preloader.style.display = "none"; // Скрываем preloader

            if (comments.length === 0) {
                commentsContainer.innerHTML = "<p>Нет комментариев для отображения.</p>";
                return;
            }

            comments.forEach((comment) => {
                const commentElement = document.createElement("div");
                commentElement.classList.add("comment");
                commentElement.innerHTML = `
                    <h3>${comment.name}</h3>
                    <p><strong>Email:</strong> ${comment.email}</p>
                    <p>${comment.body}</p>
                `;
                commentsContainer.appendChild(commentElement);
            });
        } catch (error) {
            preloader.style.display = "none"; // Скрываем preloader
            commentsContainer.innerHTML = `<p class="error-message">⚠ Что-то пошло не так: ${error.message}</p>`;
        }
    }

    fetchComments();
});
