var DOCUMENT_ICON = "glyphicon-file"
var FOLDER_ICON = "glyphicon-folder-open"



function BuildJsonFileButton(type, name, id){
    if(type == "document"){
        return _BuildJsonFileButton(name, id, DOCUMENT_ICON)
    }

    var buttonGroup = ""

    buttonGroup += '<div class="btn-group" role="group" id=' + id + '>'
    buttonGroup += '    <button type="button" class="list-group-item dropdown-toggle" data-toggle="dropdown">'
    buttonGroup += '        <span class="glyphicon ' + FOLDER_ICON + '"></span>&nbsp;&nbsp;'
    buttonGroup += '        <span class="name">' + name + '</span>'
    buttonGroup += '        <span class="caret"></span>'
    buttonGroup += '    </button>'
    buttonGroup += '    <ul class="dropdown-menu"></li>'
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
