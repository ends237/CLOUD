document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('p, li');

    elements.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.style.transform = 'scale(1.05)';
            element.style.color = '#4CAF50';
        });

        element.addEventListener('mouseout', () => {
            element.style.transform = 'scale(1)';
            element.style.color = '';
        });
    });
});