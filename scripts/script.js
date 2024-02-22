let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let previous = document.getElementById('prev');
let thumb = document.querySelectorAll('.thumbnail .item');

let countItems = items.length;
let itemActive = 0;

next.onclick = function() {
    itemActive = itemActive + 1;
    if (itemActive >= countItems) {
        itemActive = 0;
    }
    slide();
}

previous.onclick = function() {
    itemActive = itemActive - 1;
    if (itemActive < 0) {
        itemActive = countItems - 1;
    }
    slide();
}

function slide() {
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbActiveOld.classList.remove('active');

    items[itemActive].classList.add('active');
    thumb[itemActive].classList.add('active');
}

thumb.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        slide();
    })
})