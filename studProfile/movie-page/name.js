//movie set.................................

const movieSets = {

    // ............2025...................
    "2025": [
        575265, //mission imposible
        1454405, //akaal
        1482176, //Lovedale
        1482085, //Romeo S3
        574475, //Final Destination Bloodlines
        774370, //Dog Man
        , //Demonte Colony
        , //Bet S1
        , //A Working Man
        , //Vaamana
        , //Maranmass
    ],

    // ............2024...................
    "2024": [
        559, //Spider-man
        634649 //Shazam
    ],

    // ............2023...................
    "2023": [
        157336, //Intersteller
        122 //Lord of the Rings
    ],

    // ............Web Series...................
    "web": [
        1, ///Dear Hongrang S1
        , //Bet S1
    ],

    // ............Animated...................
    "ani": [
        508943, //Luca
        400160 //The Grinch
    ]
};

//Selection Dropdown list ............................

const selector = document.getElementById("year-btn");

selector.addEventListener("change", function() {
    const selected = this.value;
    const ids = movieSets[selected];
    if (ids) {
        loadMovies(ids);
    }
});


async function loadMovies(ids) {
    const titles = [];
    const images = [];

    for (const id of ids) {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });
        const movie = await res.json();
        titles.push(movie.title);
        images.push(movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` :
            "https://via.placeholder.com/200x300?text=No+Image");

        printCards(titles, images);

    };
}