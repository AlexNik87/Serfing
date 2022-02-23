const slider = $('.board__list').bxSlider( {
    pager: false,
    controls: false
});

$('.board__slider-arrow--direction--prev').click(e => {
    e.preventDefault()
    slider.goToPrevSlide()
})

$('.board__slider-arrow--direction--next').click(e => {
    e.preventDefault()
    slider.goToNextSlide()
});
