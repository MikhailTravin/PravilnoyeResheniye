/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Grid } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

//О нас
if (document.querySelector('.about__slider')) { // Указываем скласс нужного слайдера
	// Создаем слайдер

	var aboutSlider = null;
	var mediaQuerySize = 700;

	function sliderInit() {
		if (!aboutSlider) {
			aboutSlider = new Swiper('.about__slider', {
				// Подключаем модули слайдера
				// для конкретного случая
				modules: [Navigation, Grid],
				observer: true,
				observeParents: true,
				speed: 800,

				// Кнопки "влево/вправо"
				navigation: {
					prevEl: '.about__arrow-prev',
					nextEl: '.about__arrow-next',
				},

				// Брейкпоинты
				breakpoints: {
					0: {
						slidesPerView: 1,
						grid: {
							rows: 3,
						},
					},
					1202: {
						slidesPerView: 1,
					},
				},
			});
		}
	}

	function sliderDestroy() {
		if (aboutSlider) {
			aboutSlider.destroy();
			aboutSlider = null;
		}
	}
	window.addEventListener('resize', function (e) {
		var windowWidth = window.innerWidth;

		// Если ширина экрана меньше или равна mediaQuerySize
		if (windowWidth <= mediaQuerySize) {
			// Инициализировать слайдер если он ещё не был инициализирован
			sliderInit()
		} else {
			// Уничтожить слайдер если он был инициализирован
			sliderDestroy()
		}
	});
	window.addEventListener('load', function (e) {
		var windowWidth = window.innerWidth;

		// Если ширина экрана меньше или равна mediaQuerySize
		if (windowWidth <= mediaQuerySize) {
			// Инициализировать слайдер если он ещё не был инициализирован
			sliderInit()
		} else {
			// Уничтожить слайдер если он был инициализирован
			sliderDestroy()
		}
	});
};

//Производство
if (document.querySelector('.production__slider')) {
	new Swiper('.production__slider', {
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation],
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 20,
		speed: 800,

		// Кнопки "влево/вправо"
		navigation: {
			prevEl: '.production__arrow-prev',
			nextEl: '.production__arrow-next',
		},
	});
};

//Как мы работаем
if (document.querySelector('.how-we-work__slider')) { // Указываем скласс нужного слайдера
	// Создаем слайдер

	var worksSlider = null;
	var mediaQuerySize = 700;

	function sliderInit() {
		if (!worksSlider) {
			worksSlider = new Swiper('.how-we-work__slider', {
				// Подключаем модули слайдера
				// для конкретного случая
				modules: [Navigation],
				observer: true,
				observeParents: true,
				speed: 800,
				slidesPerView: 1,

				// Кнопки "влево/вправо"
				navigation: {
					prevEl: '.how-we-work__arrow-prev',
					nextEl: '.how-we-work__arrow-next',
				},

				// Брейкпоинты
				breakpoints: {
					0: {
						slidesPerView: 1,
					},
					550: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
				},
			});
		}
	}

	function sliderDestroy() {
		if (worksSlider) {
			worksSlider.destroy();
			worksSlider = null;
		}
	}
	window.addEventListener('resize', function (e) {
		var windowWidth = window.innerWidth;

		// Если ширина экрана меньше или равна mediaQuerySize
		if (windowWidth <= mediaQuerySize) {
			// Инициализировать слайдер если он ещё не был инициализирован
			sliderInit()
		} else {
			// Уничтожить слайдер если он был инициализирован
			sliderDestroy()
		}
	});
	window.addEventListener('load', function (e) {
		var windowWidth = window.innerWidth;

		// Если ширина экрана меньше или равна mediaQuerySize
		if (windowWidth <= mediaQuerySize) {
			// Инициализировать слайдер если он ещё не был инициализирован
			sliderInit()
		} else {
			// Уничтожить слайдер если он был инициализирован
			sliderDestroy()
		}
	});
};

//Форматы сотрудничества
if (document.querySelector('.cooperation-formats__slider')) { // Указываем скласс нужного слайдера
	// Создаем слайдер

	var cooperationFormatsSlider = null;
	var mediaQuerySize = 700;

	function sliderInit() {
		if (!cooperationFormatsSlider) {
			cooperationFormatsSlider = new Swiper('.cooperation-formats__slider', {
				// Подключаем модули слайдера
				// для конкретного случая
				modules: [Navigation],
				observer: true,
				observeParents: true,
				speed: 800,
				slidesPerView: 1,


				// Кнопки "влево/вправо"
				navigation: {
					prevEl: '.cooperation-formats__arrow-prev',
					nextEl: '.cooperation-formats__arrow-next',
				},

				// Брейкпоинты
				breakpoints: {
					0: {
						slidesPerView: 1,
						spaceBetween: 35,
					},
					550: {
						slidesPerView: 2,
						spaceBetween: 10,
					},
				},
			});
		}
	}

	function sliderDestroy() {
		if (cooperationFormatsSlider) {
			cooperationFormatsSlider.destroy();
			cooperationFormatsSlider = null;
		}
	}
	window.addEventListener('resize', function (e) {
		var windowWidth = window.innerWidth;

		// Если ширина экрана меньше или равна mediaQuerySize
		if (windowWidth <= mediaQuerySize) {
			// Инициализировать слайдер если он ещё не был инициализирован
			sliderInit()
		} else {
			// Уничтожить слайдер если он был инициализирован
			sliderDestroy()
		}
	});
	window.addEventListener('load', function (e) {
		var windowWidth = window.innerWidth;

		// Если ширина экрана меньше или равна mediaQuerySize
		if (windowWidth <= mediaQuerySize) {
			// Инициализировать слайдер если он ещё не был инициализирован
			sliderInit()
		} else {
			// Уничтожить слайдер если он был инициализирован
			sliderDestroy()
		}
	});
};

//Партнеры
if (document.querySelector('.partners__slider')) { // Указываем скласс нужного слайдера
	// Создаем слайдер

	var partnersSlider = null;
	var mediaQuerySize = 700;

	function sliderInit() {
		if (!partnersSlider) {
			partnersSlider = new Swiper('.partners__slider', {
				// Подключаем модули слайдера
				// для конкретного случая
				modules: [Navigation, Grid],
				observer: true,
				observeParents: true,
				speed: 800,

				// Кнопки "влево/вправо"
				navigation: {
					prevEl: '.partners__arrow-prev',
					nextEl: '.partners__arrow-next',
				},

				// Брейкпоинты
				breakpoints: {
					0: {
						slidesPerView: 2,
						grid: {
							rows: 2,
						},
					},
					1202: {
						slidesPerView: 1,
					},
				},
			});
		}
	}

	function sliderDestroy() {
		if (partnersSlider) {
			partnersSlider.destroy();
			partnersSlider = null;
		}
	}
	window.addEventListener('resize', function (e) {
		var windowWidth = window.innerWidth;

		// Если ширина экрана меньше или равна mediaQuerySize
		if (windowWidth <= mediaQuerySize) {
			// Инициализировать слайдер если он ещё не был инициализирован
			sliderInit()
		} else {
			// Уничтожить слайдер если он был инициализирован
			sliderDestroy()
		}
	});
	window.addEventListener('load', function (e) {
		var windowWidth = window.innerWidth;

		// Если ширина экрана меньше или равна mediaQuerySize
		if (windowWidth <= mediaQuerySize) {
			// Инициализировать слайдер если он ещё не был инициализирован
			sliderInit()
		} else {
			// Уничтожить слайдер если он был инициализирован
			sliderDestroy()
		}
	});
};