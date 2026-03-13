var categories = {
    umineko: {
        folder: "/xatframe/css/umineko/",
		//folder: "./css/umineko/",
        files: [
			//"testing.css",
            "true_beato.css",
            "bern.css",
            "shannon.css",
            "beato_battle.css",
            "ange_sky.css",
            "eva_gun.css",
            "clair_will.css",
            "beato_battler.css",
            "beato_battler2.css",
            "bern_lambda.css",
            "erika_beato.css",
            "lion_dead.css",
            "lion_will.css"
			"evil_battler.css"
			"rosa_maria.css"
        ]
    },
    higurashi: {
        folder: "/xatframe/css/higurashi/",
        files: [
            "rena.css",
			"rena2.css",
			"rena_mion.css",
			"rika.css",
			"keiichi_rena.css"
        ]
    }
    // Add more categories here as needed, e.g.,
    // anotherCategory: {
    //     folder: "/xatframe/css/anotherCategory/",
    //     files: [...]
    // }
};

$(function() {
    var catNames = Object.keys(categories);
    var selectedCat = catNames[Math.floor(Math.random() * catNames.length)];
    var cat = categories[selectedCat];
    var file = cat.files[Math.floor(Math.random() * cat.files.length)];
    var style = cat.folder + file;
    
    if (document.createStyleSheet) {
        document.createStyleSheet(style);
    } else {
        $('<link />', {
            rel: 'stylesheet',
            type: 'text/css',
            href: style
        }).appendTo('head');
    }
});