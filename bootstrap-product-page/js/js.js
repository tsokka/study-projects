$('.slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});


$('.slick-custom-prev').click(function () {
    $('.slider').slick('slickPrev');
});
$('.slick-custom-next').click(function () {
    $('.slider').slick('slickNext');
});


$("#accordion").accordion({
    collapsible: true,
    heightStyle: "content",
    icons: false,
    activate: function (event, ui) {
        $(ui.newHeader).find(".accordion-icon").addClass("rotate-180");
        $(ui.oldHeader).find(".accordion-icon").removeClass("rotate-180");
    }
});


new WOW({
    animateClass: 'animate__animated',
}).init();


const lightbox = new PhotoSwipeLightbox({
    gallery: '#tea-gallery',
    children: 'a.gallery-img',
    pswpModule: PhotoSwipe,
});
lightbox.init();


let cardThx = $('#card-thx');
cardThx.hide();
let postcodeInput = $('#postcode-input');
$('#create-order').click(function (e) {
    let nameInput = $('#name-input');
    let lastNameInput = $('#last-name-input');
    let phoneInput = $('#phone-input');
    let countryInput = $('#country-input');
    let addressInput = $('#address-input');
    let form = $('#form');
    if (!nameInput.val()) {
        alert('Заполните имя');
        return;
    }
    if (!lastNameInput.val()) {
        alert('Заполните фамилию');
        return;
    }
    if (!phoneInput.val()) {
        alert('Заполните телефон');
        return;
    }
    if (!countryInput.val()) {
        alert('Заполните страну');
        return;
    }
    if (!postcodeInput.val()) {
        alert('Заполните индекс');
        return;
    }
    if (!addressInput.val()) {
        alert('Заполните адрес');
        return;
    }
    if (postcodeInput.val().length !== 6) {
        e.preventDefault();
        alert('Индекс должен содержать 6 символов!');
        return;
    }
    alert('Спасибо за заказ!');
    form.hide();
    cardThx.show();
});


postcodeInput.on("keydown", function (e) {
    let controlKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'];
    if (controlKeys.includes(e.key))
        return;
    if (isNaN(parseInt(e.key))) {
        return false;
    }
});