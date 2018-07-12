// took example for this geolocation code from session 5 and addapted form my mobile apllication.  as always i put the id of the property in the id so i retrive the id and go true the json file to find the matching one, the i extract from the array the latitude and longitude an insert them on the propPosition variable, before that we first of all check that the device has geolocation and then we retrive the current position. then we just create the icon on the map and an infowindow that will show the name of the propretie and some basic information. the infowindow will pop out just if the costumer will click on the property icon if not will stay hiden.
$(document).on("pagecontainershow", function (e, ui) {
	var page = ui.toPage[0].id;
	if( page == 'map-page' ) {
		if (navigator.geolocation) {
		  navigator.geolocation.getCurrentPosition(initialize);
		} else {
		  documentgetElementById("nogeolocation").innerHTML = "Geolocation is not supported by this browser.";
		}
	}
}); 

function initialize(position) {
    var page = window.location.href;
    var id = page.substring(page.lastIndexOf('=') + 1);
	var lat = position.coords.latitude;
	var lon = position.coords.longitude;
    var currentPosition = new google.maps.LatLng(lat, lon);
    $.getJSON("data/accomodation.json", function(result, status) {
            for (var i = 0; i < result.length; i++){
                if (result[i].id == id){
                    var latitu = result[i].lat;
                    var longitu = result[i].lon;
                    var nameProp = result[i].name;
                    var postcodeProp = result[i].postcode;
                    var priceProp = result[i].price;
                    var propPosition = new google.maps.LatLng(latitu, longitu);

                    var mapOptions = {
                        zoom: 12,
                        center: propPosition,
                        mapTypeControl: true,
                        mapTypeControlOptions: {
                            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
                        }
                    }

                    var hotelMap = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

                    var currentPositionImage ='https://titan.dcs.bbk.ac.uk/lo/mad/madexamples/session5/classactivities/zedlandhotels/icons/currentlocation.png';
                    var userPosition  = new google.maps.Marker({
                        position: currentPosition,
                        map: hotelMap,
                        icon: currentPositionImage,
                        title: 'You are here'
                    });

                    var propPositionImage = 'https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=A|FF0000|000000';
                    var iconPosition = new google.maps.Marker({
                        position: propPosition,
                        map: hotelMap,
                        icon: propPositionImage,
                        title: nameProp
                    });
                    var propPostionInfo ='<div id="mappopup">'+'<h4>' + nameProp + '</h4>'+
                        '<p>' + postcodeProp + '</p><p> MONTLY PRICE: ' + priceProp + '</p>' +
                        '</div>'; 

                    var propPositionInfoWindow = new google.maps.InfoWindow({
                        content: propPostionInfo
                    });

                    google.maps.event.addListener(iconPosition, 'click', function() {
                        propPositionInfoWindow.open(hotelMap, iconPosition);
                    });
                
                }
            }
    });
}