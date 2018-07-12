//we start by checking that the page is the right one (accomodation) if yes the createImageSliderPopup function will trigger by the usual splitting the url and find the id to retrive the information needed in the json file then when the match is found it will serch for the images data and create some img elemnt where it will display just the first one and will hide the rest. it will put those in a popup div created in the accomodation page that will be trigered when the first image will be clicked. then we create the slider events for the popup. we start by getting the element in the imgContent class and putting them in a variable and when a swipe action will be detected it will hide the current image and show the next one or the previous one 
$(document).on("pagecontainerbeforeshow", function (e, ui) {
    // get current page's id
    var page = ui.toPage[0].id;
    if( page == 'accomodation' ) {
        createImageSliderPopup();
    }
});

function createImageSliderPopup() {
    var gallery = $("#accomodation .imgContent");
    var thisUrl = $(location).attr('search');
    var thisId = thisUrl.split("=")[1];
    $.getJSON("data/accomodation.json", function(result, status) {
        for (var i = 0; i < result.length; i++){
            if (result[i].id == thisId){
                $('<img/>', {
                'src': "images/" + result[i].image1
                }).appendTo(gallery);
                $('<img/>', {
                'src': "images/" + result[i].image2,
                'style': 'display: none;' }).appendTo(gallery);
                $('<img/>', {
                'src': "images/" + result[i].image3,
                'style': 'display: none;' }).appendTo(gallery);
            }
        }sliderEvents();
    }, "json");
}


function sliderEvents() {
    $("#accomodation .imgContent img").on("swipeleft", function(e) {
        var tgt = $(e.target);
        if(tgt.next("img").length > 0) {
            tgt.hide().fadeOut(3000);
            tgt.next("img").show().fadeIn(3000);
        }
    });
    $("#accomodation .imgContent img").on("swiperight", function(e) {
        var tgt = $(e.target);
        if(tgt.prev("img").length > 0) {
            tgt.hide().fadeOut(3000);
            tgt.prev("img").show().fadeIn(3000);
        }
    });
}