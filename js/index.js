//CONSTANTS
var API_KEY = "AIzaSyCezOKNqrj4hqNqIanUDNeqnupvHdGge-o"
var ROOT_FOLDER_ID = '0B1esFIYXspGHM2ZvbzFFaDNKT3c'

$(document).ready(function(){
    LoadNavBar("top-navigation", "top-nav-home")
    SetupButtons()

    RequestFolderContents(RequestFolderContentsCallback, ROOT_FOLDER_ID, API_KEY)
});


function RequestFolderContentsCallback(resultList){


    var firstDocumentFound = false

    for(var i = 0; i < resultList.length; i++){
        var curItem = resultList[i]

        //AddJsonFileButton("json-files", curItem.type, curItem.name, curItem.id)
        $("#json-files").append(BuildJsonFileButton(curItem.type, curItem.name, curItem.id))

        if(firstDocumentFound == false && curItem.type == "document"){
            firstDocumentFound = true
            RequestTextFile(curItem.id, API_KEY)
            $("#current-file").text(curItem.name)
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

        $("#current-file").text("Customize Input...")
        $("#file-contents").removeAttr("readonly")
    });

    $("#perform-request").click(function(){
        alert("perform request")
    });


    $("#json-files").on('click', '.dropdown-toggle', function(){
        alert("meow")
    });

    $("#json-files").on('click', 'button:not(.dropdown-toggle, #customize-input)', function(){
        var fileName = $(this).find(".name").text()
        var fileID = this.id

        $("#file-contents").val('Loading...')
        $("#file-contents").attr("readonly", true)

        RequestTextFile(fileID, API_KEY)
        $("#current-file").text(fileName)
    });
}
