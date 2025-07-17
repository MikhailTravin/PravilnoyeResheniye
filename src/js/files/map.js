//Яндекс карта
const map = document.querySelector('#map');

if (map) {
	ymaps.ready(init);

	function init() {
		var myMap = new ymaps.Map('map', {
			center: [55.739255, 37.508229],
			zoom: 16,
			controls: ['zoomControl'],
			behaviors: ['drag']
		});
		var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
			latitude: 55.739255,
			longitude: 37.508229,
		});

		myMap.geoObjects.add(myPlacemark);
	};
}