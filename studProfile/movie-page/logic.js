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

//.......................................................................