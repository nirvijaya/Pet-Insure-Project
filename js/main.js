
    $(document).ready(function(){
        var width = $(window).width();
        if(width<=360){
           $("#breadcrumbs-one li:first a").html("You and your pet");
        }
        else {
           $("#breadcrumbs-one li:first-child a").html("About you and your pet");
        }
        //console.log(width);   
    });
 