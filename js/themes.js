var link = [];
link[0] = "./css/testing.css";
/*
link[0] = "/xatframe/css/beato.css";
link[1] = "/xatframe/css/bern.css";
*/

$(function() {
    var style = link[Math.floor(Math.random() * link.length )];
    if (document.createStyleSheet){
        document.createStyleSheet(style);
    }else{
        $('<link />',{
            rel :'stylesheet',
            type:'text/css',
            href: style
        }).appendTo('head');
    }
});