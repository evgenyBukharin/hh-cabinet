import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);

const slider = new Swiper(document.querySelector(".hero__slider"), {
	slidesPerView: 1,
	speed: 600,
	pagination: {
		el: ".hero__pagination",
		clickable: true,
		bulletActiveClass: "hero__bullet-active",
		renderBullet: function (index, className) {
			return `<span class="hero__bullet ${className}">${index + 1}</span>`;
		},
	},
	navigation: {
		nextEl: ".hero__button-next",
		prevEl: ".hero__button-prev",
	},
});

// задаем общее количество слайдов
const allItemsSpan = document.querySelector(".hero__text-all-value");
allItemsSpan.innerHTML = document.querySelectorAll(".hero__row").length;

// убираем десятому ряду в каждом слайдер нижний бордер
const slides = document.querySelectorAll(".swiper-slide");
slides.forEach((slide) => {
	let rows = slide.querySelectorAll(".hero__row");
	if (rows[9] !== undefined) {
		rows[9].style.borderBottom = "none";
	}
});

const lastButton = document.querySelector(".hero__button-last");
lastButton.addEventListener("click", () => {
	slider.slideTo(slides.length - 1, 1000);
});
