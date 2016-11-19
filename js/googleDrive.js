//CONSTANTS
var API_KEY = "AIzaSyCezOKNqrj4hqNqIanUDNeqnupvHdGge-o"
var FOLDER_ID = '0B1esFIYXspGHM2ZvbzFFaDNKT3c'





$(document).ready(function() {

    RequestTextFiles() 

});

/////
///// RequestTextFile: gets the contents of the google doc in plaintext
/////
function RequestTextFile(file_id){

    var promise = $.getJSON(BuildFileUrl(file_id, API_KEY), function( data, status){
        alert("Success")
    });

    promise.done(function( data ){
        JSON.stringify(data)
        
    }).fail(function(jsonError){
        //This returns an error, despite working, and I don't know why
        //alert("Google Drive File AJAX JSON Request failed, see browser log for full error.") 
        //console.log(JSON.stringify(jsonError.responseText))

        var result = jsonError.responseText
        //sketchy way of removing the new page indicator
        result = result.replace("________________", "")
        $("#file-contents").html(result)
    });

}



/////
///// ListTextFiles: Appends dictionary of file names to the webpage
/////
function ListTextFiles(textFiles){

    var i = 0
    for(key in textFiles){
        if( i == 0){
            RequestTextFile(textFiles[key])
            i++
        }
        //alert("Key: " + key + "\nid: " + textFiles[key])
        $("#insertion-point").after("<div>" + key + ": " + textFiles[key] + "</div>")
    }
}



/////
///// RequestTextFiles: Sends an api request for all the files in a google drive folder
/////
function RequestTextFiles(){

    var promise = $.getJSON(BuildFolderUrl(FOLDER_ID, API_KEY), function( data, status){
        //alert("Success")
    });

    promise.done(function( data ){
        ListTextFiles(PackTextFiles(data))

    }).fail(function(jsonError){
        alert("Google Drive Folder AJAX JSON Request failed, see browser log for full error.") 
        console.log(JSON.stringify(jsonError))
    });

}



/////
///// PackTextFiles: Puts found google doc files into a dictionary of form: {"fileName": "fileID", ...}
/////
function PackTextFiles(jsonData){
    
    textFiles = {}

    for(var i = 0; i < jsonData.files.length; i++){
        if(jsonData.files[i].mimeType == "application/vnd.google-apps.document"){
           file_name = jsonData.files[i].name
           file_id = jsonData.files[i].id

           textFiles[file_name] = file_id
        }
    }

    return textFiles
}



/////
///// BuildFileUrl
/////
function BuildFileUrl(file_id, api_key){
    return "https://www.googleapis.com/drive/v2/files/" + file_id + "/export?mimeType=text%2Fplain&key=" + api_key  
}



/////
///// BuildFolderUrl
/////
function BuildFolderUrl(folder_id, api_key){
    return "https://www.googleapis.com/drive/v3/files?q='" + folder_id + "'+in+parents&key=" + api_key 
}
