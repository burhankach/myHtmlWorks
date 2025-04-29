let boxes = document.querySelectorAll(".box");
let rstBtn = document.querySelector(".rst-btn");
let newBtn = document.querySelector(".new-btn");
let msgCon = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

let turn = true;

let winPtn = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn === true) { //player Os turn
            box.innerHTML = "O";
            turn = false;
        } else { //player Xs turn
            box.innerHTML = "X";
            turn = true;
        }
        box.disabled = true;
        checkWin();
    })
})

const checkWin = () => {
    for (ptn of winPtn) {
        let pos1Val = boxes[ptn[0]].innerHTML;
        let pos2Val = boxes[ptn[1]].innerHTML;
        let pos3Val = boxes[ptn[2]].innerHTML;
        if (pos1Val != "" && pos1Val != "" && pos1Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWin(pos1Val);
            }
        }
    }
}

const showWin = (winner) => {
    msg.innerHTML = `Congratulation! - Winner is Player ${winner}`;
    msgCon.classList.remove("hide");
    boxDisable();

}

const boxDisable = () => {
    for (box of boxes) {
        box.disabled = true;
    }
}
const boxEnable = () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
    }
}

const resetGame = () => {
    turn = true;
    boxEnable();
    msgContai.classList.add("hide");
}

rstBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);