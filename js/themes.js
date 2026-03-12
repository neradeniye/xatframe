var link = [];
link[0] = "/xatframe/css/aerith.css";
link[1] = "/xatframe/css/aerith.css";

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