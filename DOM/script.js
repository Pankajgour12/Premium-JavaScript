// JavaScript Interview Questions

const interviewQuestions = [
    "What is JavaScript?",
    "What are the differences between var, let, and const?",
    "What is a closure in JavaScript?",
    "What are promises in JavaScript?",
    "What is a callback function?",
    "What is event bubbling?",
    "What is the difference between == and ===?",
    "What is the Document Object Model (DOM)?"
];


function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * interviewQuestions.length);
    return interviewQuestions[randomIndex];
}

function getQuestionById(id) {
    if (id < 0 || id >= interviewQuestions.length) {
        return null;
    }
    return interviewQuestions[id];
}

function getAllQuestions() {
    return interviewQuestions;
}

