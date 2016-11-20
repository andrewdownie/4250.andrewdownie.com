//CONSTANTS
var API_KEY = "AIzaSyCezOKNqrj4hqNqIanUDNeqnupvHdGge-o"
var ROOT_FOLDER_ID = '0B1esFIYXspGHM2ZvbzFFaDNKT3c'

$(document).ready(function(){
    LoadNavBar("top-navigation", "top-nav-home")
    SetupButtons()

    RequestFolderContents(RequestDocsCallback, ROOT_FOLDER_ID, API_KEY)
});


function RequestDocsCallback(resultList){


    var firstDocumentFound = false

    for(var i = 0; i < resultList.length; i++){
        var curItem = resultList[i]

        AddJsonFileButton("json-files", curItem.type, curItem.name, curItem.id)

        if(firstDocumentFound == false && curItem.type == "document"){
            firstDocumentFound = true
            RequestTextFile(curItem.id, API_KEY)
            $("#" + curItem.id).addClass("active")
        }


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
