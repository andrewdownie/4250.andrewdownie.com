var documentIcon = "glyphicon-file"
var folderIcon = "glyphicon-folder-open"

function AddJsonFileButton(targetElementID, type, name, id){
    var icon

    if(type == "folder"){
        icon = folderIcon
        name = '&nbsp;' + name
    }
    else if(type == "document"){
        icon = documentIcon
    }

    var buildButton = '<button type="button" class="list-group-item" '
    buildButton += 'gd_type="' + type + '" '
    buildButton += 'id="' + id + '">'
    buildButton += '<span class="glyphicon ' + icon + '"></span>'
    buildButton += '&nbsp;' + name
    buildButton += '</button>'

    $("#" + targetElementID).append(buildButton)
}
