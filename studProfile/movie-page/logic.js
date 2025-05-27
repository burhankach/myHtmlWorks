//Main code to execute cards..............................

//Token from TMDB..........
const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNjYyMTlkYzgxYzQxMmYzYzA4Y2M5YTFiZjc2ZGRiMCIsIm5iZiI6MTc0NjQ1MDM5MC41MDU5OTk4LCJzdWIiOiI2ODE4YjdkNjc1NzcyMTNlNTA0NjFhMGQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.f0L5nJ2ZcZRFndbqmISGop7ugq4rHzmg4dtbN-5lm7g";


//function for printing cards.....................

function printCards(titles, images) {

    const container = document.getElementById("movie-container");
    container.innerHTML = '';

    for (let i = 0; i < titles.length; i++) {
        let div = document.createElement("div");
        div.className = "movie-card";

        let img = document.createElement("img");
        img.src = images[i];
        img.alt = titles[i];

        let title = document.createElement("h3");
        title.textContent = titles[i];

        div.appendChild(img);
        div.appendChild(title);

        //Click on card it gets big else becomes small again ...........
        div.addEventListener("click", function() {

            const allreadyClicked = div.classList.contains("clicked");

            document.querySelectorAll(".movie-card").forEach(c => {
                c.classList.remove("clicked");
            });
            if (!allreadyClicked) {
                div.classList.add("clicked");
            }
        });

        container.appendChild(div);
    }
}

// Extras...................................


const cards = document.querySelectorAll("movie-card");

//.....................................................................
// //Selection Dropdown list ............................

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