var pokeApiBase = "https://pokeapi.co";
var pokeIdBase = "/api/v1/pokemon/";
var pokeName = "";
var pokeHints = [];

function initInfo(id) {
    pokeName = "";
    pokeHints = [];
    get(pokeApiBase + pokeIdBase + id + "/", getInfo);
}

function getRandomId() {
    return  Math.floor((Math.random() * 151) + 1);
}

function formatHint(hint) {
    return hint.toUpperCase()
                .replace(/\n/g, "")
                .replace("POKMON", "POKéMON")
                .replace("Pokmon", "POKéMON")
                .replace(pokeName.toUpperCase(), "THIS POKéMON")
                .replace(pokeName.toUpperCase() + "S", "THIS POKéMON'S")
                .replace("MR. MIME", "THIS POKéMON")
                .replace("NIDORAN-F", "THIS POKéMON")
                .replace("NIDORAN-M", "THIS POKéMON");
}

function get(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            var result = xhr.responseText;
            callback(JSON.parse(result));
        }
    };
    xhr.open("GET", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send();
}

function getInfo(result) {
    disableSubmit();
    pokeId = result.pkdx_id;
    pokeName = result.name.toUpperCase();
    pokeName = pokeName.replace("MR. MIME", "MRMIME")
                .replace("MR-MIME", "MRMIME")
                .replace("NIDORAN-F", "NIDORANF")
                .replace("NIDORAN-M", "NIDORANM");

    for(var i = 0; i < 5; i++) {
        get(pokeApiBase + result.descriptions[i].resource_uri, getPokeHint);
    }
}

function getPokeHint(result) {
    var hint = formatHint(result.description);
    if(!pokeHints.includes(hint)) {
        $("#questionArea").append(createP(".pokeHint", hint));
        
    }
    hideLoadingScreen();
    timer.reset;
    timer.start;
}

function displayLoadingScreen() {
    document.getElementById("loadingimg").style.visibility = "visible";
}

function hideLoadingScreen() {
    document.getElementById("loadingimg").style.visibility = "hidden";
}

var pokeList = {
    1 : "Bulbasaur",
    2 : "Ivysaur",
    3 : "Venusaur",
    4 : "Charmander",
    5 : "Charmeleon",
    6 : "Charizard",
    7 : "Squirtle",
    8 : "Wartortle",
    9 : "Blastoise",
    10 : "Caterpie",
    11 : "Metapod",
    12 : "Butterfree",
    13 : "Weedle",
    14 : "Kakuna",
    15 : "Beedrill",
    16 : "Pidgey",
    17 : "Pidgeotto",
    18 : "Pidgeot",
    19 : "Rattata",
    20 : "Raticate",
    21 : "Spearow",
    22 : "Fearow",
    23 : "Ekans",
    24 : "Arbok",
    25 : "Pikachu",
    26 : "Raichu",
    27 : "Sandshrew",
    28 : "Sandslash",
    29 : "Nidoran♀",
    30 : "Nidorina",
    31 : "Nidoqueen",
    32 : "Nidoran♂",
    33 : "Nidorino",
    34 : "Nidoking",
    35 : "Clefairy",
    36 : "Clefable",
    37 : "Vulpix",
    38 : "Ninetales",
    39 : "Jigglypuff",
    40 : "Wigglytuff",
    41 : "Zubat",
    42 : "Golbat",
    43 : "Oddish",
    44 : "Gloom",
    45 : "Vileplume",
    46 : "Paras",
    47 : "Parasect",
    48 : "Venonat",
    49 : "Venomoth",
    50 : "Diglett",
    51 : "Dugtrio",
    52 : "Meowth",
    53 : "Persian",
    54 : "Psyduck",
    55 : "Golduck",
    56 : "Mankey",
    57 : "Primeape",
    58 : "Growlithe",
    59 : "Arcanine",
    60 : "Poliwag",
    61 : "Poliwhirl",
    62 : "Poliwrath",
    63 : "Abra",
    64 : "Kadabra",
    65 : "Alakazam",
    66 : "Machop",
    67 : "Machoke",
    68 : "Machamp",
    69 : "Bellsprout",
    70 : "Weepinbell",
    71 : "Victreebel",
    72 : "Tentacool",
    73 : "Tentacruel",
    74 : "Geodude",
    75 : "Graveler",
    76 : "Golem",
    77 : "Ponyta",
    78 : "Rapidash",
    79 : "Slowpoke",
    80 : "Slowbro",
    81 : "Magnemite",
    82 : "Magneton",
    83 : "Farfetch'd",
    84 : "Doduo",
    85 : "Dodrio",
    86 : "Seel",
    87 : "Dewgong",
    88 : "Grimer",
    89 : "Muk",
    90 : "Shellder",
    91 : "Cloyster",
    92 : "Gastly",
    93 : "Haunter",
    94 : "Gengar",
    95 : "Onix",
    96 : "Drowzee",
    97 : "Hypno",
    98 : "Krabby",
    99 : "Kingler",
    100 : "Voltorb",
    101 : "Electrode",
    102 : "Exeggcute",
    103 : "Exeggutor",
    104 : "Cubone",
    105 : "Marowak",
    106 : "Hitmonlee",
    107 : "Hitmonchan",
    108 : "Lickitung",
    109 : "Koffing",
    110 : "Weezing",
    111 : "Rhyhorn",
    112 : "Rhydon",
    113 : "Chansey",
    114 : "Tangela",
    115 : "Kangaskhan",
    116 : "Horsea",
    117 : "Seadra",
    118 : "Goldeen",
    119 : "Seaking",
    120 : "Staryu",
    121 : "Starmie",
    122 : "Mr. Mime",
    123 : "Scyther",
    124 : "Jynx",
    125 : "Electabuzz",
    126 : "Magmar",
    127 : "Pinsir",
    128 : "Tauros",
    129 : "Magikarp",
    130 : "Gyarados",
    131 : "Lapras",
    132 : "Ditto",
    133 : "Eevee",
    134 : "Vaporeon",
    135 : "Jolteon",
    136 : "Flareon",
    137 : "Porygon",
    138 : "Omanyte",
    139 : "Omastar",
    140 : "Kabuto",
    141 : "Kabutops",
    142 : "Aerodactyl",
    143 : "Snorlax",
    144 : "Articuno",
    145 : "Zapdos",
    146 : "Moltres",
    147 : "Dratini",
    148 : "Dragonair",
    149 : "Dragonite",
    150 : "Mewtwo",
    151 : "Mew"
}