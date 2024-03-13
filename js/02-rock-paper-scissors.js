let userInput;
// while user input is not rock, paper, or scissors reprompt them
do {
    userInput = prompt("Please select either rock, paper, or scissors.").toLowerCase();
} while (userInput !== "rock" && userInput !== "paper" && userInput !== "scissors");

// random choice of 0 or 1 multiplied by 2 and rounded gives us
// either 0, 1, or 2 as an output
let computerChoice = Math.round(2 * Math.random());

switch (computerChoice) {
    case 0:
        computerChoice = "rock";
        break;
    case 1:
        computerChoice = "paper";
        break;
    case 2:
        computerChoice = "scissors";
        break;
    default:
        break;
};

console.log(computerChoice);
console.log(userInput);

// if input are equal we tied alert and exit.
if (computerChoice === userInput) {
    window.alert(`You tied! The computer chose ${computerChoice} and you chose ${userInput}.`);
} else {
    switch (userInput) {
        case "rock":
            if (computerChoice === "paper") {
                window.alert(`You Lost! The computer chose ${computerChoice} and you chose ${userInput}.`);
            } else if (computerChoice === "scissors") {
                window.alert(`You Won! The computer chose ${computerChoice} and you chose ${userInput}.`);
            }
            break;
        case "paper":
            if (computerChoice === "scissors") {
                window.alert(`You Lost! The computer chose ${computerChoice} and you chose ${userInput}.`);
            } else if (computerChoice === "rock") {
                window.alert(`You Won! The computer chose ${computerChoice} and you chose ${userInput}.`);
            }
            break;
        case "scissors":
            if (computerChoice === "rock") {
                window.alert(`You Lost! The computer chose ${computerChoice} and you chose ${userInput}.`);
            } else if (computerChoice === "paper") {
                window.alert(`You Won! The computer chose ${computerChoice} and you chose ${userInput}.`);
            }
            break;
        default:
            window.alert("An error has occured, please reload to try again.");
            break;
    }
}