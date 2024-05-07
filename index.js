let images = [
	{
		url: "images/image1.png",
		description: "Only a small part of the work performed by our company is presented on the site. For 14 years on in the construction market we have made happy more than 1000 families",
		city: "Rostov-on-Don \n LCD admiral",
		area: "81 m2",
		time: "3.5 months",
		cost: "Upon request"
	},

	{
		url: "images/image2.png",
		description: "Only a small part of the work performed by our company is presented on the site. For 14 years on in the construction market we have made happy more than 1000 families",
		city: "Sochi \n Thieves",
		area: "105 m2",
		time: "4 months",
		cost: "Upon request"
	},

	{
		url: "images/image3.png",
		description: "Only a small part of the work performed by our company is presented on the site. For 14 years on in the construction market we have made happy more than 1000 families",
		city: "Rostov-on-Don \n Patriotic",
		area: "93 m2",
		time: "3 months",
		cost: "Upon request"
	},
];

function initSlider(options) {
	if (!images || !images.length) return;
	options = options || {
		description: true,
		category: true,
		dots: true
	};

	let sliderImages = document.querySelector(".slider__images");
	let sliderArrows = document.querySelector(".slider__arrows");
	let sliderDots = document.querySelector(".slider__dots");
	let sliderTitles = document.querySelector(".slider_info-title");

	let sliderCategory = document.querySelectorAll(".slider__description");
	let sliderCitys = document.querySelector(".slider_info-category-description-city");
	let sliderApartmentArea = document.querySelector(".slider_info-category-description-area");
	let sliderRepairTime = document.querySelector(".slider_info-category-description-time");
	let sliderRepairCost = document.querySelector(".slider_info-category-description-cost");


	initImages();
	initArrows();

	if (options.dots) {
		initDots();
	}

	if (options.description) {
		initTitles();
	}

	if (options.category) {
		initCity();
		initArea();
		initRepairTime();
		initRepairCost();
	}

	function initImages() {
		images.forEach((image, index) => {
			let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
			sliderImages.innerHTML += imageDiv;
		});
	}

	function initArrows() {
		sliderArrows.querySelectorAll(".slider__arrow").forEach(arrow => {
			arrow.addEventListener("click", function() {
				let curNumber = +sliderImages.querySelector(".active").dataset.index;
				let nextNumber;
				if (arrow.classList.contains("left")) {
					nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
				} else {
					nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
				}
				moveSlider(nextNumber);
			});
		});
	}

	function initDots() {
		images.forEach((image, index) => {
			let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
			sliderDots.innerHTML += dot;
		});
		sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
			dot.addEventListener("click", function() {
				moveSlider(this.dataset.index);
			})
		})
	}

	function moveSlider(num) {
		sliderImages.querySelector(".active").classList.remove("active");
		sliderImages.querySelector(".n" + num).classList.add("active");
		if (options.dots) {
			sliderDots.querySelector(".active").classList.remove("active");
			sliderDots.querySelector(".n" + num).classList.add("active");
		}
		if (options.description) changeTitle(num);
		if (options.category) {
			changeCity(num);
			changeArea(num);
			changeRepairTime(num);
			changeRepairCost(num);
		}
	}

	function initTitles() {
		let titleDiv = `<p class="description">${images[0].description}</p>`;
		sliderTitles.innerHTML += titleDiv;
	}

	function changeTitle(num) {
		if (!images[num].description) return;
		let sliderDescription = sliderTitles.querySelector(".description");
		sliderDescription.innerText = images[num].description;
	}

	function initCity() {
		let cityDiv = `<p class="city">${images[0].city}</p>`;
		sliderCitys.innerHTML += cityDiv;
	}
	
	function changeCity(num) {
		if (!images[num].city) return;
		let sliderCity = sliderCitys.querySelector(".city");
		sliderCity.innerText = images[num].city;
	}

	function initArea() {
		let areaDiv = `<p class="area">${images[0].area}</p>`;
		sliderApartmentArea.innerHTML += areaDiv;
	}
	
	function changeArea(num) {
		if (!images[num].area) return;
		let sliderArea = sliderApartmentArea.querySelector(".area");
		sliderArea.innerText = images[num].area;
	}

	function initRepairTime() {
		let repairTimeDiv = `<p class="time">${images[0].time}</p>`;
		sliderRepairTime.innerHTML += repairTimeDiv;
	}
	
	function changeRepairTime(num) {
		if (!images[num].time) return;
		let sliderTime = sliderRepairTime.querySelector(".time");
		sliderTime.innerText = images[num].time;
	}

	function initRepairCost() {
		let repairCostDiv = `<p class="cost">${images[0].cost}</p>`;
		sliderRepairCost.innerHTML += repairCostDiv;
	}
	
	function changeRepairCost(num) {
		if (!images[num].cost) return;
		let sliderCost = sliderRepairCost.querySelector(".cost");
		sliderCost.innerText = images[num].cost;
	}
}

let sliderOptions = {
	description: true,
	category: true,
	dots: true
};

document.addEventListener("DOMContentLoaded", function() {
	initSlider(sliderOptions);
});