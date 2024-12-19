document.addEventListener('DOMContentLoaded', function () {
    new Swiper('.swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        slidesPerView: 1,
    });
});

function showModal(imageSrc) {
    Swal.fire({
        imageUrl: imageSrc,
        imageAlt: 'Галерея автомобилей',
        showCloseButton: true,
        background: '#fdf2e9',
    });
}

