//we start by getting the usual url and page to check that the page is the favourite one and we start to retrive information from the local storage but if the local strorage has no propreties saved a no propreties saved message will be shown. the function getFavDetails will retrive all the data from the local stroage about the accomadtion that we saved and then the function displayFavDetails will loop true the favDetails that are all the id and name of the propreties and insert the data in a <li> element, the id will become the link to an accomodation page with the id retrived from the local storage by this the accomodationshow.js will be triggred so it will show all the data of the propretie and the name saved in the local storage will be used to help the student to find the propretie that saved more easly in the list
$(document).on("pagecontainerbeforeshow", function (e, ui) {
	var page = ui.toPage[0].id;
    var favData = JSON.parse(localStorage.getItem('accomodation'));
	if( page == 'favourites' ) {
		if (typeof(Storage) != "undefined") {
			displayFavDetails(getFavDetails());
		} if (favData.length == 0){
            $("#noMessage").html("<p>No Propreties Saved</p>");
        }
	}
});

function getFavDetails() {
	var favDetails = JSON.parse(localStorage.getItem('accomodation'));
	return favDetails;
}

function displayFavDetails(favDetails) {
	var favList = "";
	if(favDetails !== null){
		for (var i = 0; i < favDetails.length; i++) {
			favList += "<li><a href=accomodation.html?id=" + 
			favDetails[i].propId + 
			" class='ui-btn ui-corner-all ui-icon-arrow-r ui-btn-icon-right'>" + 
			favDetails[i].propName + 
			"</a></li>";
			}
		$("#favList").html(favList).listview("refresh");	
	}
}  

