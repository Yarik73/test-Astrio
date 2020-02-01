let $images = document.querySelectorAll('.slider img');
let current = 0;

function slider() {
    for (let i = 0; i < $images.length; i++) {
        $images[i].classList.add('visually-hidden');
    }

    $images[current].classList.remove('visually-hidden');
}

slider();

// document.querySelector('.slider').onclick = slider; переключение по нажатию на картинку
document.querySelector('.btn__prev').onclick = function() {
    if (current - 1 === -1) {
        current = $images.length - 1;
    } else {
        current--;
    }
    slider();
};
document.querySelector('.btn__next').onclick = function () {
    if (current + 1 === $images.length) {
        current = 0;
    } else {
        current++;
    }
    slider();
};
