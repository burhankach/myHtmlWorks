//Extras.......................
let darkMod = document.getElementById("dark-mod");
let dark01 = document.getElementsByClassName("dark01");
let dark02 = document.getElementsByClassName("dark02");

//array section ...........

// ............2025...................
const title2025 = [
    "Costao",
    "Good Bad Ugly",
    "Hit 3rd Case",
    "Jaat",
    "Retro",
    "Shastra",
    "Thunderbolts",
    "Valiant One",
    "The Bayou",
    "Raid 2",
    "Pyar Mat Karna",
    "Jewel Theif",
    "Ground Zero",
    "Counteraatack",
    "Bullet Train Explosion",
    "Bhootni",
    "Akaal",
    "Veera Dheera Souran 2",
    "Until Dawn",
]
const img2025 = [
    "img/img25/Costao.jpg",
    "img/img25/GoodBadUgly.jpg",
    "img/img25/Hit3rdCase.jpg",
    "img/img25/Jaat.jpg",
    "img/img25/Retro.jpg",
    "img/img25/Shastra.jpg",
    "img/img25/Thunderbolts.jpg",
    "img/img25/ValiantOne.jpg",
    "img/img25/theBayou.jpg",
    "img/img25/raid2.jpg",
    "img/img25/pyarMatKarna.jpg",
    "img/img25/jewelTheif.jpg",
    "img/img25/groundZero.jpg",
    "img/img25/counteraatack.jpg",
    "img/img25/bulletTrainExplosion.jpg",
    "img/img25/bhootni.jpg",
    "img/img25/akaal.jpg",
    "img/img25/veeraDheeraSouran2.jpg",
    "img/img25/untilDawn.jpg",
]

// ............2024...................
const title2024 = ["abc"]
const img2024 = []

// ............2023...................
const title2023 = []
const img2023 = []

// ............Web Series...................
const titleWeb = []
const imgWeb = []

// ............Animated...................
const titleAni = []
const imgAni = []



// ............2025...................
document.getElementById("btn2025").addEventListener("click", function() {
    printCards(title2025, img2025);
});

// ............2024...................
document.getElementById("btn2024").addEventListener("click", function() {
    printCards(title2024, img2024);
});

// ............2023...................
document.getElementById("btn2023").addEventListener("click", function() {
    printCards(title2023, img2023);
});

// ............Web series...................
document.getElementById("btn-web").addEventListener("click", function() {
    printCards(titleWeb, imgWeb);
});

// ............Animated...................
document.getElementById("btn-ani").addEventListener("click", function() {
    printCards(titleAni, imgAni);
});

//function for printing cards.....................
function printCards(titles, images) {

    const container = document.getElementById("movie-container");
    container.innerHTML = "";
    const cards = document.querySelectorAll("movie-card");

    for (let i = titles.length - 1; i >= 0; i--) {
        let div = document.createElement("div");
        div.className = "movie-card";

        let img = document.createElement("img");
        img.src = images[i];
        img.alt = titles[i];

        let title = document.createElement("h3");
        title.textContent = titles[i];

        div.appendChild(img);
        div.appendChild(title);
        container.appendChild(div);

        // this is made when i click on card it gets big else becomes small again ...........
        div.addEventListener("click", function() {
            document.querySelectorAll(".movie-card").forEach(c => {
                c.classList.remove("clicked");
            });
            div.classList.add("clicked");
        });
    };
};

// Extras...................................