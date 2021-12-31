// toggle menu items
let toggle_button = document.querySelector('#header .toggle-button');
let collapse = document.querySelectorAll('#header .collapse');

toggle_button.addEventListener('click', function () {
    collapse.forEach(col => col.classList.toggle('collapse-toggle'))
});

//masonry for posts
new Masonry('#posts .grid', {
    itemSelector:'.grid-item',
    gutter:20
});

//Swiper slider
new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop:true,
    slidesPerView:5,
    autoplay:{
        delay:3000
    },
    //responsive
    breakpoints:{
        '@0': {
            slidesPerView:2
        },
        '@1.00': {
            slidesPerView:3
        },
        '@1.25': {
            slidesPerView:4
        },
        '@1.50': {
            slidesPerView:5
        }
    }
});

//Search icon change
function iconChange() {
    var searchIcon = document.getElementById("search-icon");
    // searchBox.classList.toggle("fa-search");
    searchIcon.classList.toggle("fa-times");
    searchIcon.classList.toggle("fa-search");

}