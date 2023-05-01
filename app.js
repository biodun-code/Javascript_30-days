const form = document.querySelector('form');
const locationInput = document.querySelector('#location-input');
const mapDiv = document.querySelector('#map');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const location = locationInput.value;

  const geocoder = new google.maps.Geocoder();
  geocoder.geocode({address: location}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      const latitude = results[0].geometry.location.lat();
      const longitude = results[0].geometry.location.lng();
      
      const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
      mapDiv.innerHTML = `<iframe width="100%" height="300" frameborder="0" style="border:0" src="${url}"></iframe>`;
    } else {
      alert(`Could not find location "${location}" on Google Maps. Please try again.`);
    }
  });
});

