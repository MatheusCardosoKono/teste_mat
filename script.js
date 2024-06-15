document.addEventListener('DOMContentLoaded', function() {
    const noButton = document.getElementById('noButton');

    noButton.addEventListener('mouseover', function() {
        const container = noButton.parentElement;
        const containerRect = container.getBoundingClientRect();
        const buttonRect = noButton.getBoundingClientRect();

        let newLeft, newTop;

        do {
            newLeft = Math.random() * (containerRect.width - buttonRect.width);
            newTop = Math.random() * (containerRect.height - buttonRect.height);
        } while (
            Math.abs(newLeft - buttonRect.left) < buttonRect.width &&
            Math.abs(newTop - buttonRect.top) < buttonRect.height
        );

        noButton.style.position = 'absolute';
        noButton.style.left = `${newLeft}px`;
        noButton.style.top = `${newTop}px`;
    });
});
