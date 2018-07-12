//it's the same code repeted based if the id of the page is the same in the url of the page the code will retrive the data from the json file and for each element of the array will check evry single value and if the result match the propretie of the if statment it will save the information in the proprety variable in a <li> format with the link the the page that will show all the information, the name of the propretie and the price 
$(document).on("pagecontainerbeforeshow", function (e, ui) {
    var page = ui.toPage[0].id;
//    IT WILL SHOW ALL THE PROPRETIES ON THE JSON FILE
     if( page == 'all' ) {
        $.getJSON("data/accomodation.json", function(result, status) {
        var property = "";
        for (var i = 0; i < result.length; i++) {
            property += "<li><a href='accomodation.html?id=" + result[i].id +"'><img src='images/" + result[i].imgList + "'>" + result[i].name + "<p> weekly price: " + result[i].price + " &pound</p></a></li>";
        }
        $("#allsearch").html(property).listview("refresh");
        }, "json");
    }
//    FIVE STAR
    if( page == 'five' ) {
        $.getJSON("data/accomodation.json", function(result, status) {
        var property = "";
        for (var i = 0; i < result.length; i++) {
            if (result[i].rate == '5'){
                property += "<li><a href='accomodation.html?id=" + result[i].id +"'><img src='images/" + result[i].imgList + "'>" + result[i].name + "<p> weekly price: " + result[i].price + " &pound</p></a></li>";
            }
        }
        $("#fivesearch").html(property).listview("refresh");
        }, "json");
    }
//    FOUR STAR
    if( page == 'four' ) {
        $.getJSON("data/accomodation.json", function(result, status) {
        var property = "";
        for (var i = 0; i < result.length; i++) {
            if (result[i].rate == '4'){
                property += "<li><a href='accomodation.html?id=" + result[i].id +"'><img src='images/" + result[i].imgList + "'>" + result[i].name + "<p> weekly price: " + result[i].price + " &pound</p></a></li>";
            }
        }
        $("#foursearch").html(property).listview("refresh");
        }, "json");
    }
//    THREE STAR
    if( page == 'three' ) {
        $.getJSON("data/accomodation.json", function(result, status) {
        var property = "";
        for (var i = 0; i < result.length; i++) {
            if (result[i].rate == '3'){
                property += "<li><a href='accomodation.html?id=" + result[i].id +"'><img src='images/" + result[i].imgList + "'>" + result[i].name + "<p> weekly price: " + result[i].price + " &pound</p></a></li>";
            }
        }
        $("#threesearch").html(property).listview("refresh");
        }, "json");
    }
//    HIGH PRICE
    if( page == 'high' ) {
        $.getJSON("data/accomodation.json", function(result, status) {
        var property = "";
        for (var i = 0; i < result.length; i++) {
            if (result[i].level == 'high'){
                property += "<li><a href='accomodation.html?id=" + result[i].id +"'><img src='images/" + result[i].imgList + "'>" + result[i].name + "<p> weekly price: " + result[i].price + " &pound</p></a></li>";
            }
        }
        $("#highsearch").html(property).listview("refresh");
        }, "json");
    }
//    MEDIUM PRICE
    if( page == 'medium' ) {
        $.getJSON("data/accomodation.json", function(result, status) {
        var property = "";
        for (var i = 0; i < result.length; i++) {
            if (result[i].level == 'medium'){
                property += "<li><a href='accomodation.html?id=" + result[i].id +"'><img src='images/" + result[i].imgList + "'>" + result[i].name + "<p> weekly price: " + result[i].price + " &pound</p></a></li>";           }
        }
        $("#mediumsearch").html(property).listview("refresh");
        }, "json");
    }
//    LOW PRICE
    if( page == 'cheap' ) {
        $.getJSON("data/accomodation.json", function(result, status) {
        var property = "";
        for (var i = 0; i < result.length; i++) {
            if (result[i].level == 'cheap'){
                property += "<li><a href='accomodation.html?id=" + result[i].id +"'><img src='images/" + result[i].imgList + "'>" + result[i].name + "<p> weekly price: " + result[i].price + " &pound</p></a></li>";            }
        }
        $("#cheapsearch").html(property).listview("refresh");
        }, "json");
    }
//    HOUSE TYPE
    if( page == 'house' ) {
        $.getJSON("data/accomodation.json", function(result, status) {
        var property = "";
        for (var i = 0; i < result.length; i++) {
            if (result[i].type == 'House'){
                property += "<li><a href='accomodation.html?id=" + result[i].id +"'><img src='images/" + result[i].imgList + "'>" + result[i].name + "<p> weekly price: " + result[i].price + " &pound</p></a></li>";
            }
        }
        $("#housesearch").html(property).listview("refresh");
        }, "json");
    }
//    ROOM TYPE
    if( page == 'room' ) {
        $.getJSON("data/accomodation.json", function(result, status) {
        var property = "";
        for (var i = 0; i < result.length; i++) {
            if (result[i].type == 'Room'){
                property += "<li><a href='accomodation.html?id=" + result[i].id +"'><img src='images/" + result[i].imgList + "'>" + result[i].name + "<p> weekly price: " + result[i].price + " &pound</p></a></li>";
            }
        }
        $("#roomsearch").html(property).listview("refresh");
        }, "json");
    }
//    FLAT TYPE
    if( page == 'flat' ) {
        $.getJSON("data/accomodation.json", function(result, status) {
        var property = "";
        for (var i = 0; i < result.length; i++) {
            if (result[i].type == 'Flat'){
                property += "<li><a href='accomodation.html?id=" + result[i].id +"'><img src='images/" + result[i].imgList + "'>" + result[i].name + "<p> weekly price: " + result[i].price + " &pound</p></a></li>";
            }
        }
        $("#flatsearch").html(property).listview("refresh");
        }, "json");
    }
//    NORTH AREA
     if( page == 'north' ) {
        $.getJSON("data/accomodation.json", function(result, status) {
        var property = "";
        for (var i = 0; i < result.length; i++) {
            if (result[i].location == 'North'){
                property += "<li><a href='accomodation.html?id=" + result[i].id +"'><img src='images/" + result[i].imgList + "'>" + result[i].name + "<p> weekly price: " + result[i].price + " &pound</p></a></li>";
            }
        }
        $("#northsearch").html(property).listview("refresh");
        }, "json");
    }
//    SOUTH AREA
     if( page == 'south' ) {
        $.getJSON("data/accomodation.json", function(result, status) {
        var property = "";
        for (var i = 0; i < result.length; i++) {
            if (result[i].location == 'South'){
                property += "<li><a href='accomodation.html?id=" + result[i].id +"'><img src='images/" + result[i].imgList + "'>" + result[i].name + "<p> weekly price: " + result[i].price + " &pound</p></a></li>";
            }
        }
        $("#southsearch").html(property).listview("refresh");
        }, "json");
    }
//    EAST AREA
     if( page == 'east' ) {
        $.getJSON("data/accomodation.json", function(result, status) {
        var property = "";
        for (var i = 0; i < result.length; i++) {
            if (result[i].location == 'East'){
                property += "<li><a href='accomodation.html?id=" + result[i].id +"'><img src='images/" + result[i].imgList + "'>" + result[i].name + "<p> weekly price: " + result[i].price + " &pound</p></a></li>";
            }
        }
        $("#eastsearch").html(property).listview("refresh");
        }, "json");
    }
//    WEST AREA
     if( page == 'west' ) {
        $.getJSON("data/accomodation.json", function(result, status) {
        var property = "";
        for (var i = 0; i < result.length; i++) {
            if (result[i].location == 'West'){
                property += "<li><a href='accomodation.html?id=" + result[i].id +"'><img src='images/" + result[i].imgList + "'>" + result[i].name + "<p> weekly price: " + result[i].price + " &pound</p></a></li>";
            }
        }
        $("#westsearch").html(property).listview("refresh");
        }, "json");
    }
});
   