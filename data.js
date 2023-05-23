const swiperEl = document.querySelector('swiper-container');

const params = {
    centeredSlides: false,


    navigation: {
        nextEl: '.carousel-next-custom',
        prevEl: '.carousel-prev-custom',
    },

    grabCursor: true,
    keyboard: {
        enabled: true,
    },
    breakpoints: {
        769: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        },
        480: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        }
    },
};

Object.assign(swiperEl, params)

swiperEl.initialize();

$.ajax({
    url: './data.json',
    dataType: "json",
    type: 'GET',
    success: function (_data) {
        _data.projetos.forEach(projeto => {
            console.log(projeto.text)
            $('swiper-container').append(
                `
                <swiper-slide>
                    <div class="card projeto-card">
                        <img src="`
                + projeto.image +
                `" alt="" class="card-img-top ratio ratio-1x1">
                        <div class="card-body">
                            <h2 class="card-title">
                                `
                + projeto.title +
                `
                            </h2>
                            <small class="card-text">
                                `
                                + projeto.text +
                                `
                            </small>
                        </div>
                    </div>
                </swiper-slide>
                `
            )
        });
    }
});