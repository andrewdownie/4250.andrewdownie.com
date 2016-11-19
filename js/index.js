$(document).ready(function(){
    LoadNavBar("top-navigation", "top-nav-home")
    SetupButtons()

    RequestDocs(RequestDocsCallback) 
    
});


function RequestDocsCallback(resultDict){


    var i = 0
    for(var key in resultDict){
        if(i == 0){
            i++
            RequestTextFile(resultDict[key]) 
        }
        //alert(key + ":  " + resultDict[key])
    }

}


function SetupButtons(){

    $("#host-dropdown a").click(function(){
        var host = $(this).attr("host")
        $("#host-input").val(host)
    });

    $("#port-dropdown a").click(function(){
        var port = $(this).attr("port")
        $("#port-input").val(port)
    });


    $("#customize-input").click(function(){
        $("#json-files button").removeClass("active")
        $(this).addClass("active")

        $("#file-contents").removeAttr("readonly")
    });

    $("#perform-request").click(function(){
        alert("perform request")
    });
}
