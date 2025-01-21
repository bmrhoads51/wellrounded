document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('dynamicButton');
    const content = document.getElementById('dynamicContent');

    if (button) {
        button.addEventListener('click', () => {
            content.innerHTML = '<p>You clicked the button! Dynamic content loaded.</p>';
        });
    }
});
