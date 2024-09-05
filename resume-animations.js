document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    function handleCardHover(event) {
        const card = event.currentTarget;
        card.classList.add('hover');
    }

    function handleCardHoverEnd(event) {
        const card = event.currentTarget;
        card.classList.remove('hover');
    }

    cards.forEach(card => {
        card.addEventListener('mouseover', handleCardHover);
        card.addEventListener('mouseout', handleCardHoverEnd);
    });
});
