let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll (".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

  const genCompchoice = ()=>{
    const options = ["rock","paper","scissor"];
    const randidx = Math.floor (Math.random() * 3);
    return options[randidx];
 }
const drawGame = () =>{
 
     msg.innerText = "Game was Draw , Play again!";
     msg.style.backgroundColor = "blue";
};

 const showWinner = (userwin,userChoice,compChoice) =>{
    if (userwin) {
        userscore++;
        userscorepara.innerText= userscore;
        
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
                msg.style.backgroundColor = "green";
    }
    else {
    
        compscore++;
             compscorepara.innerText= compscore;
         msg.innerText = `You Lose.  ${compChoice} beats  Your ${userChoice}`;
         msg.style.backgroundColor = "red";
    }
   };
const playGame = (userChoice) => {
  console.log("user choice =", userChoice);
   const compChoice = genCompchoice ();
   console.log("comp choice =", compChoice);

   if (userChoice === compChoice){
   drawGame();
  
   } else
   {
       let userwin = true;
       if(userChoice ==="rock"){
    userwin = compChoice === "paper" ? false : true;}
     else if(userChoice ==="paper")
  {
    userwin = compChoice === "scissor" ? false : true;
  } else {
     userwin = compChoice === "rock" ? false : true;
     
  }
   showWinner(userwin,userChoice,compChoice);
  }
};
  choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
    playGame(userChoice);
    });
});
