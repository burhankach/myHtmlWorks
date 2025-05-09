userScore = 0;
compScore = 0;
const choices = document.querySelectorAll(".p-btn");
const msg = document.querySelector(".msg");

// SOUND used in buttons .....................................
let sound = [
    new Audio("Sounds/dry-fart.mp3"),
    new Audio("Sounds/gago-effect-by-cong-tv.mp3"),
    new Audio("Sounds/aayein-meme.mp3"),
    new Audio("Sounds/indian-song.mp3"),
    new Audio("Sounds/sound-baord-spongebob.mp3"),
    new Audio("Sounds/gta-san-andreas-ah-shit-here-we-go-again_BWv0Gvc.mp3")
]


//main game code ..............................................
const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        document.querySelector("#user-score").innerHTML = userScore;
        msg.innerHTML = "You Won!";
        userScore === 5 ? sound[3].play() : sound[1].play();
    } else {
        compScore++;
        document.querySelector("#comp-score").innerHTML = compScore;
        msg.innerHTML = "Comp Wins";
        compScore === 5 ? sound[4].play() : sound[2].play();
    }
}
const gameDraw = () => {
    msg.innerText = "A Draw";
    sound[0].play();
}

const genCompChoice = () => {
    const option = ["rock", "paper", "scissor"];
    const compIndex = Math.floor(Math.random() * 3);
    return option[compIndex];
};

choices.forEach(choice => {
    choice.addEventListener("click", function() {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const playGame = (userChoice) => {
    console.log("User Choice", userChoice);
    const compChoice = genCompChoice();
    console.log("Comp Choice", compChoice);

    if (userChoice === compChoice) {
        gameDraw();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else if (userChoice === "scissor") {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);

    }
};

document.querySelector("#rst-btn").addEventListener("click", function() {
    msg.innerHTML = "Game Restared -- Your Turn";
    userScore = 0;
    compScore = 0;
    document.querySelector("#user-score").innerHTML = userScore;
    document.querySelector("#comp-score").innerHTML = compScore;
    sound[5].play();
});