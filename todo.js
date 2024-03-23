let name = prompt("Enter your name:");

let gender = prompt("Enter your gender (male or female):");

let age = prompt("Enter your age:");
if (age <= 0) {
    alert("Age should be greater than zero.");
}

// Function to ask a Yes/No question and return the user's answer
function YesOrNoQuestion(question) {
    let answer = prompt(question + " (Yes/No)").trim().toLowerCase();
    if (answer !== "yes" && answer !== "no") {
        console.log("Invalid input. Please answer with Yes or No.");
        return YesOrNoQuestion(question); // Recursive call
    }
    return answer;
}




// Function to store answers in an array and print them to the console
function storeAnswers() {
    const questions = [
        "Do you like Programming?",
        "Do you always work with to-do list's?",
        "Q3?",
    ];
    const answers = questions.map(question => YesOrNoQuestion(question)); //arrow function
    console.log("Answers:");
    answers.forEach((answer, index) => {
        console.log(questions[index] + ": " + (answer === "yes" ? "Yes" : "No"));  //? means if : means else 
    });
}

storeAnswers();

