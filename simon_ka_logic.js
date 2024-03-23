let started = false;
let level = 0;
let max = 0;

let btns = ["yellow", "red", "green", "blue"];

let gameSeq = [];
let userSeq = [];


let h3 = document.querySelector('h3');

document.addEventListener("keypress", function () {
    if (started == false) {
        started = true;
        console.log("Game is started");

        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 100);
}

function UserbtnFlash(btn) {
    btn.classList.add("flashUser");
    setTimeout(function () {
        btn.classList.remove("flashUser");
    }, 100);
}

function levelUp() {
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;

    let randIndex = Math.floor( Math.random() * 4);
    let randColor = btns[randIndex];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randbtn);
}

function checkAns(idx) {
    if (userSeq[idx] == gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp(), 1000);
        }
    } else {
        h3.innerHTML = `Game Over! Your score was <b>${level-1}</b> <br> Press any key to start again.`;
        
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector('body').style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnPress () {
    let btn = this;
    UserbtnFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".box");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset () {
    if (max < level - 1) {
        max = level - 1;
    }
    console.log(max);

    highscore();
    
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

function highscore () {
    let highscoredisp=document.querySelector(".highscoredisp");
    highscoredisp.innerText= "Highest Score : " + max;
}



