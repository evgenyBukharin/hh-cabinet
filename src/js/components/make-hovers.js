const names = document.querySelectorAll(".hero__text-name");
const phones = document.querySelectorAll(".hero__text-phone");
const jobs = document.querySelectorAll(".hero__text-job");
const emails = document.querySelectorAll(".hero__text-email");
const salaries = document.querySelectorAll(".hero__text-salary");
const cities = document.querySelectorAll(".hero__text-city");
const links = document.querySelectorAll(".hero__text-link");
const crms = document.querySelectorAll(".hero__text-crm");

const arrays = [names, phones, jobs, emails, salaries, cities, links, crms];

for (let i = 0; i < arrays.length; i++) {
	arrays[i].forEach((hoverElement) => {
		hoverElement.onmouseenter = () => {
			if (i !== arrays.length - 1) {
				arrays[i].forEach((el) => {
					el.classList.add("hero__text-visible");
				});
			}
			if (i !== 0) {
				arrays[i - 1].forEach((el) => {
					el.classList.add("hero__text-visible");
				});
			}
		};
		hoverElement.onmouseleave = () => {
			if (i !== arrays.length - 1) {
				arrays[i].forEach((el) => {
					el.classList.remove("hero__text-visible");
				});
			}
			if (i !== 0) {
				arrays[i - 1].forEach((el) => {
					el.classList.remove("hero__text-visible");
				});
			}
		};
	});
}
