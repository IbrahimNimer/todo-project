// Function to ask a Yes/No question and return the user's answer
function askYesNoQuestion(question) {
    let answer = prompt(question + " (Yes/No)").trim().toLowerCase();
    if (answer !== "yes" && answer !== "no") {
        console.log("Invalid input. Please answer with Yes or No.");
        return askYesNoQuestion(question); // Recursive call
    }
    return answer;
}

// Function to store answers in an array and print them to the console
function storeAnswers() {
    const questions = [
        "Question 1",
        "Question 2",
        "Question 3",
        "Question 4",
        "Question 5"
    ];
    const answers = questions.map(question => askYesNoQuestion(question));
    console.log("Answers:");
    answers.forEach((answer, index) => {
        console.log(questions[index] + ": " + (answer === "yes" ? "Yes" : "No"));  //? means if : means else 
    });
}

// Call the function to store answers
storeAnswers();
