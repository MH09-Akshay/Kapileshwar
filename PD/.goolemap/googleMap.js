
var _initMap = function (){
	var map;
	var myLocation = {lat : 16.44, lng : 74.10};
	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 16,
		center: myLocation
	});
	
	var createMarker = function(){
		var m = {};
		m.position = myLocation;
		m.map = map;
		m.icon = {
			url: 'images/marker.svg',
			size: new google.maps.Size(35, 67),
			scaledSize: new google.maps.Size(35, 67),
		}
		
		return new google.maps.Marker(m);
	}();
	
	var infoWindow = new google.maps.InfoWindow({
		content: '<div id="divContent">My store! Please Visit!</div>'
	});
	
	createMarker.addListener('click', function(){
		infoWindow.open(map, createMarker);
	});
}