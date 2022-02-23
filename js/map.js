let myMap;

const init = () => {
   myMap = new ymaps.Map("map", {
       center: [55.750915, 37.59513],
       zoom: 14,
       controls: []
   });

   const coords = [
    [55.749643, 37.603940]
    ];
    
    const myCollection = new ymaps.GeoObjectCollection({}, {
        draggable: false,
        iconLayout: 'default#image',
        iconImageHref: "./../img/marker.png",
        iconImageSize: [58, 73]
    });

    coords.forEach(coord => {
        myCollection.add(new ymaps.Placemark(coord));
    });

    myMap.geoObjects.add(myCollection);

    myMap.behaviors.disable('scrollZoom');
}

ymaps.ready(init);