var categories = {
    umineko: {
        folder: "/xatframe/css/umineko/",
        files: [
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
            "lion_will.css",
			"evil_battler.css",
			"rosa_maria.css",
			"erika.css",
			"battler_bern.css",
			"beato_battler3.css",
			"beato.css",
			"ange.css",
			"eva_beato.css",
			"kyrie.css",
			"lambda.css",
			"virgilia.css",
			"will.css"
        ]
    },
    higurashi: {
        folder: "/xatframe/css/higurashi/",
        files: [
            "rena.css",
			"rena2.css",
			"rena3.css",
			"rena_mion.css",
			"rika2.css",
			"rika3.css",
			"keiichi_rena.css",
			"young_rika.css",
			"young_rika2.css",
			"hanyuu_rika.css",
			"hanyuu_rika2.css",
			"rika_satoko.css",
			"everyone.css",
			"hanyuu.css"
        ]
    },
	    nier: {
        folder: "/xatframe/css/nier/",
        files: [
            "amusement_park.css",
			"2b_2.css",
			"city.css",
			"city5.css",
        ]
    },
	    corpse_party: {
        folder: "/xatframe/css/corpse_party/",
        files: [
            "ayumi_bath.css",
			"group.css",
			"naomi.css",
			"magari_naho.css",
			"magari_yoshiki.css",
			"naomi_yuka.css",
			"satoshi_moon.css",
			"satsuki_yuka.css",
			"magari_azusa.css",
			"yoshie_sachiko.css",
			"bath_group.css",
			"bath_group.css",
			"kuon.css",
			"azusa.css",
			"magari.css",
			"magari2.css",
			"ayumi.css",
			"school.css",
			"group2.css",
			"sachiko.css",
			"ghosts.css",
			"yuki_mayu.css",
			"kizami.css",
			"group3.css",
			"ghosts2.css",
			"naho_sayaka.css",
			"naho_sayaka2.css",
			"group4.css",
			"sayaka.css",
			"sayaka2.css",
			"sachiko2.css",
			"azusa2.css",
			"mitsuki.css",
			"ghosts3.css",
			"group5.css",
			"group6.css",
			"sachiko3.css",
			"azusa3.css",
			"naho_sayaka3.css",
			"naomi_sayaka.css",
			"group7.css",
			"group8.css",
			"tohko_satoshi.css",
			"group9.css",
			"group10.css",
			"aiko.css",
			"group11.css",
			"naho_sayaka4.css",
			"group12.css",
			"naomi_sachiko.css",
			"azusa_ayumi.css",
			"kizami2.css",
			"kizami3.css",
			"kizami4.css",
			"azusa_satoshi.css"
        ]
    },
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