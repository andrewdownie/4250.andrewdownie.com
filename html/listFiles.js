var api_key = "AIzaSyCezOKNqrj4hqNqIanUDNeqnupvHdGge-o";
var folderId = '0B1esFIYXspGHM2ZvbzFFaDNKT3c';
var url = "https://www.googleapis.com/drive/v3/files?q='" + folderId + "'+in+parents&key=" + api_key;





$(document).ready(function() {

    RequestTextFiles() 

});

/////
///// ListTextFiles
/////
function ListTextFiles(textFiles){
    for(key in textFiles){
        alert("Key: " + key + "\nid: " + textFiles[key])
    }
}

/////
///// RequestTextFiles
/////
function RequestTextFiles(){

    var promise = $.getJSON( url, function( data, status){
        //alert("Success")
    });

    promise.done(function( data ){
        ListTextFiles(PackTextFiles(data))

    }).fail(function(jsonError){
        alert("Google Drive AJAX JSON Request failed, see browser log for full error.") 
        console.log(JSON.stringify(jsonError))
    });

}


/////
///// PackTextFiles
/////
function PackTextFiles(jsonData){
    
    textFiles = {}

    for(var i = 0; i < jsonData.files.length; i++){
        if(jsonData.files[i].mimeType == "text/plain"){
           file_name = jsonData.files[i].name
           file_id = jsonData.files[i].id

           textFiles[file_name] = file_id
        }
    }

    return textFiles
}
