(function() {
    window.addEventListener('load', function() {
        const loadTime = performance.now();
        const footer = document.querySelector('footer');
        const loadInfo = document.createElement('p');
        loadInfo.textContent = `Время загрузки страницы: ${loadTime.toFixed(2)} мс`;
        footer.appendChild(loadInfo);
    });
})();

document.querySelectorAll('nav ul li a').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.color = '#005f99';
    });
    item.addEventListener('mouseout', () => {
        item.style.color = '#432b1d';
    });
});

const links = document.querySelectorAll('nav ul li a');
const currentPage = window.location.href;

links.forEach(link => {
    if (link.href === currentPage) {
        link.classList.add('active');
    }
});
