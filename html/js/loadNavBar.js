var NAV_FILE_PATH = "nav.html"


function LoadNavBar(insertionElement_ID, navLink_ID){
    $("#" + insertionElement_ID).load(NAV_FILE_PATH, function(){

        var navLink = document.getElementById(navLink_ID)
        navLink.className += " active"

    });
}

