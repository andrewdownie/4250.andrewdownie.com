$(document).ready(function(){


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
});



