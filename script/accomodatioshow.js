//first we start by checking that the page is the accomodation then we get page directory, the we get the url of the page and we split it to have the number that we will use to find the proprety id in the json file and retrive the data that we will nedd to display. no we start to retrive the json file and loop inside it until we find the matching id. we the id will match it will start retrive evry single information and disply it in the appropriate place thanks to the id in the accomodation page
$(document).on("pagecontainerbeforeshow", function (e, ui) {
    var page = ui.toPage[0].id;
    if( page == 'accomodation' ) {
        var thisPage = "#" + page;
        var thisUrl = $(location).attr('search');
        var thisId = thisUrl.split("=")[1];
        $.getJSON("data/accomodation.json", function(result, status) {
            for (var i = 0; i < result.length; i++){
                if (result[i].id == thisId){
                    $("#propID",thisPage).html(result[i].id);
                    $("#propertytitle",thisPage).html(result[i].name);
                    var prevImage = result[i].prevImage;
                    $("#prevImage", thisPage).html(prevImage);
                    var postcode = "<p>"+result[i].postcode+"</p>";
                    $("#address", thisPage).html(postcode);
                    var area = "<p>"+result[i].location+"</p>";
                    $("#zone", thisPage).html(area);
                    var price = "<p>The monthly price is "+result[i].price+" &pound</p>";
                    $("#money", thisPage).html(price);
                    var desc = "<p>"+result[i].description+"</p>";
                    $("#desc", thisPage).html(desc);
                    var rate = "<p>This property is rated <img src='images/" + result[i].ratePNG + "' class='imgRate'> stars</p>";
                    $("#rate", thisPage).html(rate);
                }
            }

        }, "json");
        var mapButtonHref = $("#mapButt").attr("href");
        $("#mapButt").attr("href", mapButtonHref +  thisId);
    }
});