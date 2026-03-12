var link = [];
//link[0] = "./css/testing.css";

link[0] = "/xatframe/css/beato.css";
link[1] = "/xatframe/css/bern.css";
link[2] = "/xatframe/css/shannon.css";
link[3] = "/xatframe/css/beato_battle.css";
link[4] = "/xatframe/css/ange_sky.css";
link[5] = "/xatframe/css/eva_gun.css";
link[6] = "/xatframe/css/ange_maria.css";

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