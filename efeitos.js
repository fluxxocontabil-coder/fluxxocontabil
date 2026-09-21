// Brilho que acompanha o mouse nos cards
document.querySelectorAll('.service-card, .highlight-card, .segment-card, .card').forEach(function (card) {
    card.addEventListener('mousemove', function (e) {
        var r = card.getBoundingClientRect();
        card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        card.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
});
