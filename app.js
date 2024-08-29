let userscore = 0;
let compscore = 0;

let choices = document.querySelectorAll(".choice");
choicesbtn = document.querySelector("button");
let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");

const gencompchoice = () => {
  let options = ["rock", "paper", "scissors"];
  let randidx = Math.floor(Math.random() * 3); //m in Math function is capital like Math not math.
  return options[randidx];
};

const gameDraw = () => {
  choicesbtn.innerText = "Game was Draw.";
  choicesbtn.style.background = "#2f6690";
};

const showwinner = (userwin, userchoice, compchoice) => {
  if (userwin) {
    userscore++;
    userScore.innerText = userscore;
    choicesbtn.innerText = `your ${userchoice} beats ${compchoice}`;
    choicesbtn.style.background = "green";
  } else {
    compscore++;
    compScore.innerText = compscore;
    choicesbtn.innerText = `computer ${compchoice} beats your ${userchoice}`;
    choicesbtn.style.background = "red";
  }
};

const playGame = (userchoice) => {
  const compchoice = gencompchoice();

  if (userchoice === compchoice) {
    gameDraw();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      // paper, scissors
      userwin = compchoice === "scissors" ? true : false;
    } else if (userchoice === "paper") {
      // rock, scissors
      userwin = compchoice === "rock" ? true : false;
    } else {
      // scissors, paper
      userwin = compchoice === "paper" ? true : false;
    }
    showwinner(userwin, userchoice, compchoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playGame(userchoice);
  });
});
