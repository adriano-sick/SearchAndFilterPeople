// Adriano Siqueira - 8/1/2021 - Search and Filter People

var app = angular.module("LeaderFilterApp", []);

app.controller("LeaderFilterController", function($scope) {
    $scope.leaders = [
        {"name" : "Catherine de Medici",  "pic" : "./assets/img/catherinedemedici.webp", },
        {"name" : "Chandragupta",         "pic" : "./assets/img/chandragupta.webp", },
        {"name" : "Cleopatra",            "pic" : "./assets/img/cleopatra.webp", },
        {"name" : "Cido",                 "pic" : "./assets/img/dido.webp", },
        {"name" : "Eleanoro Faquitaine",  "pic" : "./assets/img/eleanorofaquitaine.webp", },
        {"name" : "Frederick Barbarossa", "pic" : "./assets/img/frederickbarbarossa.webp", },
        {"name" : "Genghis Khan",         "pic" : "./assets/img/genghiskhan.webp", },
        {"name" : "Ghandi",               "pic" : "./assets/img/ghandi.webp", },
        {"name" : "Gilgamesh",            "pic" : "./assets/img/gilgamesh.webp", },
        {"name" : "Gorgo",                "pic" : "./assets/img/gorgo.webp", },
        {"name" : "Harald Hardrada",      "pic" : "./assets/img/haraldhardrada.webp", },
        {"name" : "Hojo Tokimune",        "pic" : "./assets/img/hojotokimune.webp", },
        {"name" : "Kristina",             "pic" : "./assets/img/kristina.webp", },
        {"name" : "Kupe",                 "pic" : "./assets/img/kupe.webp", },
        {"name" : "Lautaro",              "pic" : "./assets/img/lautaro.webp", },
        {"name" : "Mansa Musa",           "pic" : "./assets/img/mansamusa.webp", },
        {"name" : "Matthias Corvinus",    "pic" : "./assets/img/matthiascorvinus.webp", },
        {"name" : "Montezuma",            "pic" : "./assets/img/montezuma.webp", },
        {"name" : "Mvemba a Nzinga",      "pic" : "./assets/img/mvembaanzinga.webp", },
        {"name" : "Pachacuti",            "pic" : "./assets/img/pachacuti.webp", },
        {"name" : "Dom Pedro II",         "pic" : "./assets/img/pedro2.webp", },
        {"name" : "Franklin Roosevelt",   "pic" : "./assets/img/roosevelt.webp", },
        {"name" : "Saladin",              "pic" : "./assets/img/saladin.webp", },
        {"name" : "Suleiman",             "pic" : "./assets/img/suleiman.webp", },
        {"name" : "Victoria Queen",       "pic" : "./assets/img/victoria.webp", }
    ]
});