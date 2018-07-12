//we start with pagecreate where we will recreate the accomodation page that we saved before, so when the #addbutton will be clickt it will first check if local storage is aviable in the device, if positive it will retrive the id from the page so it will help to recreate the page by simply serch again the id in the json file an repeat the accomodationshow function. but we will need to store them in the local storage so we the storeDetails function we will create an array and store id and name inside, but if those information are already in there the second part of the if function will loop inside the details array and if we already saved the propretie in the local storage an alert message will notifie that the propretie is already in there, if not it will push the propretie id and name in the array and notifie you with a propretie saved message and then create an accomodation.json file in the local storage and push the details inside it
$(document).on("pagecreate", "#accomodation", function() {
	$( "#addbtn" ).click(function() {
		if (typeof(Storage) != "undefined") {
			storeDetails(getId(), getName());
		} else {
            $("#alert").text("The browser does not support local storage");
		}
	});
});  

function getId() {
	var propId = $("#propID").text();
	return propId;
}

function getName() {
	var propName = $("#propertytitle").text();
	return propName;
}

function storeDetails(id, title) {
    var details = [];
    var data = {propId: id, propName: title};
    var currentID = $("#propID").text();
    if(localStorage.getItem('accomodation') === null){
        alert("Propeties saved on your favourites!");
        details.push(data);
    }else{
        details = JSON.parse(localStorage.getItem('accomodation'));
        for(var i = 0; i < details.length; i++){
           if (details[i].propId == currentID){
               alert("Propreties already saved on the favourites");
               return false;
            }
       }details.push(data);
    }alert("Propetie saved on your favourites!");
    localStorage.setItem("accomodation",JSON.stringify(details));
}

