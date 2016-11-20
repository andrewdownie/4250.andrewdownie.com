/////
///// RequestTextFile
/////
function RequestTextFile(file_id, api_key){

    var promise = $.getJSON(_BuildFileUrl(file_id, api_key), function( data, status){
        alert("Success")
    })
    .done(function( data ){
        JSON.stringify(data)

    }).fail(function(jsonError){
        //This returns an error, despite working, and I don't know why
        //alert("Google Drive File AJAX JSON Request failed, see browser log for full error.")
        //console.log(JSON.stringify(jsonError.responseText))

        var result = jsonError.responseText
        result = result.replace("________________", "")//sketchy way of removing the new page indicator

        $("#file-contents").val(result)
    });

}


/////
///// RequestFolderContents
/////
function RequestFolderContents(callback, folder_id, api_key){

    var promise = $.getJSON(_BuildFolderUrl(folder_id, api_key), function( data, status){
        //alert("Success")

    }).done(function( data ){
        callback(_PackFolderContents(data), folder_id)

    }).fail(function(jsonError){
        alert("Google Drive Folder AJAX JSON Request failed, see browser log for full error.")
        console.log(JSON.stringify(jsonError))
    });

}



//////////
//////////
////////// Helper functions
//////////
//////////

///
/// _PackFolderContents
///
function _PackFolderContents(jsonData){
    var folders = []
    var documents = []


    for(var i = 0; i < jsonData.files.length; i++){
        curItem = {}

        curItem.name = jsonData.files[i].name
        curItem.id = jsonData.files[i].id

        if(jsonData.files[i].mimeType == "application/vnd.google-apps.document"){
            curItem.type = "document"
            documents.push(curItem)
        }
        else if(jsonData.files[i].mimeType == "application/vnd.google-apps.folder"){
            curItem.type = "folder"
            folders.push(curItem)
        }


    }

    return documents.concat(folders)
}


///
/// _BuildFileUrl
///
function _BuildFileUrl(file_id, api_key){
    return "https://www.googleapis.com/drive/v2/files/" + file_id + "/export?mimeType=text%2Fplain&key=" + api_key
}



///
/// _BuildFolderUrl
///
function _BuildFolderUrl(folder_id, api_key){
    return "https://www.googleapis.com/drive/v3/files?q='" + folder_id + "'+in+parents&key=" + api_key
}
