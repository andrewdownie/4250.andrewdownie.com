var DOCUMENT_ICON = "glyphicon-file"
var FOLDER_ICON = "glyphicon-folder-open"


function BuildJsonFileLink(name, id){
    var fileLink = ""

    fileLink += '<li>'
    fileLink += '    <a id="' + id + '">'
    fileLink += '        <span class="glyphicon ' + DOCUMENT_ICON + '"></span>&nbsp;'
    fileLink += '         <span class="name">' + name + '</span>'
    fileLink += '    </a>'
    fileLink += '</li>'


    return fileLink
}


function BuildJsonFileButton(type, name, id){
    if(type == "document"){
        return _BuildJsonFileButton(name, id, DOCUMENT_ICON)
    }

    var buttonGroup = ""

    buttonGroup += '<div class="btn-group" role="group">'
    buttonGroup += '    <button type="button" class="list-group-item dropdown-toggle" data-toggle="dropdown" id="' + id + '">'
    buttonGroup += '        <span class="glyphicon ' + FOLDER_ICON + '"></span>&nbsp;&nbsp;'
    buttonGroup += '        <span class="name">' + name + '</span>'
    buttonGroup += '        <span class="caret"></span>'
    buttonGroup += '    </button>'
    buttonGroup += '    <ul class="dropdown-menu"><li><a>Loading...</a></li></ul>'
    buttonGroup += '</div>'


    return buttonGroup
}



function _BuildJsonFileButton(name, id, icon){
    var buildButton = ""

    buildButton = '<button type="button" class="list-group-item" '
    buildButton += 'id="' + id + '">'
    buildButton += '    <span class="glyphicon ' + icon + '"></span>&nbsp;'
    buildButton += '    <span class="name">' + name + '</span>'
    buildButton += '</button>'

    return buildButton

}
