if (typeof Motion === 'undefined') {
    console.error('Motion One не загружен! Проверьте подключение скрипта.');
} else {
    console.log('Motion One доступен:', Motion);
}

const {animate, scroll, hover, inView} = Motion;
inView(".scroll-section", (element) => {
    animate(
        element,
        {opacity: 1, x: [-100, 0]},
        {
            duration: 0.9,
            easing: [0.17, 0.55, 0.55, 1],
        }
    )
    return () => animate(element, {opacity: 0, x: -100})
});
hover(".box", (element) => {
    animate(element, {scale: 1.2})
    return () => animate(element, {scale: 1})
});


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});


const lightbox = new PhotoSwipeLightbox({
    gallery: '#tea-gallery',
    children: 'a.gallery-img',
    pswpModule: PhotoSwipe,
});
lightbox.init();


let cardThx = document.getElementById('card-thx');
cardThx.style.display = 'none';
let postcodeInput = document.getElementById('postcode-input');
document.getElementById('create-order').onclick = (function (e) {
    let nameInput = document.getElementById('name-input');
    let lastNameInput = document.getElementById('last-name-input');
    let phoneInput = document.getElementById('phone-input');
    let countryInput = document.getElementById('country-input');
    let addressInput = document.getElementById('address-input');
    let form = document.getElementById('form');
    if (!nameInput.value) {
        alert('Заполните имя');
        return;
    }
    if (!lastNameInput.value) {
        alert('Заполните фамилию');
        return;
    }
    if (!phoneInput.value) {
        alert('Заполните телефон');
        return;
    }
    if (!countryInput.value) {
        alert('Заполните страну');
        return;
    }
    if (!postcodeInput.value) {
        alert('Заполните индекс');
        return;
    }
    if (!addressInput.value) {
        alert('Заполните адрес');
        return;
    }
    if (postcodeInput.value.length !== 6) {
        e.preventDefault();
        alert('Индекс должен содержать 6 символов!');
        return;
    }
    alert('Спасибо за заказ!');
    form.style.display = 'none';
    cardThx.style.display = '';
});


postcodeInput.onkeydown = function (e) {
    let controlKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'];
    if (controlKeys.includes(e.key))
        return;
    if (isNaN(parseInt(e.key))) {
        return false;
    }
};