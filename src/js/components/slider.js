import Swiper from "swiper";

const slider = new Swiper(document.querySelector(".hero__slider"), {
	slidesPerView: 1,
	speed: 500,
});

const allItemsSpan = document.querySelector(".hero__text-all-value");
const allPagesSpan = document.querySelector(".hero__text-pages-value");
const onPageSpan = document.querySelector(".hero__text-onpage-value");

allItemsSpan.innerHTML = document.querySelectorAll(".hero__row").length;
allPagesSpan.innerHTML = document.querySelectorAll(".swiper-slide").length;
onPageSpan.innerHTML = document.querySelector(".swiper-slide").querySelectorAll(".hero__row").length;

const slides = document.querySelectorAll(".swiper-slide");
slides.forEach((slide) => {
	let rows = slide.querySelectorAll(".hero__row");
	if (rows[9] !== undefined) {
		rows[9].style.borderBottom = "none";
	}
});
