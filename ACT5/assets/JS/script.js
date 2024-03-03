const button = document.getElementById('_button');
const notification = document.getElementById('_notification');

button.addEventListener('click', () => {
    const counter = Number(notification.getAttribute('data-count')) || 0;

    notification.setAttribute('data-count', counter + 1);
    notification.classList.add('count');
    notification.classList.add('notify');
})

notification.addEventListener('animationend', () => {
    notification.classList.remove('notify');
})
