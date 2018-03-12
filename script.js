$(document).ready(function(){
    var i = 1
    $(".dynamic-text").click(function(){
        i = i + 1
        if(i % 2 === 0){
            $("#wrapper").css('padding-left', '200px');
            $("#sidebar-wrapper").css('left', '200px');
            $("#sidebar-wrapper").css('margin-left', '-200px;');
            $("#sidebar-wrapper").css('width', '200px;');
            $(".darken").css('background-color', 'rgba(67,67,67,.49)')
        }
        else{
            $("#wrapper").css('padding-left', '0px');
            $("#sidebar-wrapper").css('left', '0px');
            $("#sidebar-wrapper").css('margin-left', '200px;');
            $("#sidebar-wrapper").css('width', '0px;');
        }
    });
});


// switch case, case sets the 