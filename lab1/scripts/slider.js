document.addEventListener('DOMContentLoaded', function () {
    new Swiper('.swiper-container', {
        loop: true, // Слайдер будет зацикливаться
        navigation: {
            nextEl: '.swiper-button-next', // Указывает элемент для кнопки "Следующий слайд".
            prevEl: '.swiper-button-prev', // Указывает элемент для кнопки "Предыдущий слайд".
        },
        autoplay: {
            delay: 5000, // Интервал в миллисекундах между переключениями слайдов
            disableOnInteraction: false, // Указывает автоматическое пролистывание продолжится после взаимодействия пользователя.
        },
        slidesPerView: 1, // Количество слайдов, отображаемых одновременно
    });
});

// imageSrc - путь до изображения, которое будет отображено в модальном окне
function showModal(imageSrc) {
    Swal.fire({
        imageUrl: imageSrc, // Указывает URL изображения, переданного в параметр imageSrc, для отображения в модальном окне.
        imageAlt: 'Галерея автомобилей', // Текст, который будет показан, если изображение не загрузится.
        showCloseButton: true, // Указывает, что в модальном окне будет кнопка для его закрытия.
        background: '#fdf2e9', // Цвет фона модального окна
    });
}

