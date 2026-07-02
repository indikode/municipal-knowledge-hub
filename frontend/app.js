// Get page sections
const homePage = document.getElementById("home-page");
const assistantPage = document.getElementById("assistant-page");
const quizPage = document.getElementById("quiz-page");

// Get buttons
const assistantBtn = document.getElementById("assistant-btn");
const quizBtn = document.getElementById("quiz-btn");

const homeFromAssistant = document.getElementById("home-from-assistant");
const homeFromQuiz = document.getElementById("home-from-quiz");

// Show Assistant Page
assistantBtn.addEventListener("click", () => {
    homePage.style.display = "none";
    quizPage.style.display = "none";
    assistantPage.style.display = "block";
});

// Show Quiz Page
quizBtn.addEventListener("click", () => {
    homePage.style.display = "none";
    assistantPage.style.display = "none";
    quizPage.style.display = "block";
});

// Return Home from Assistant
homeFromAssistant.addEventListener("click", () => {
    assistantPage.style.display = "none";
    homePage.style.display = "block";
});

// Return Home from Quiz
homeFromQuiz.addEventListener("click", () => {
    quizPage.style.display = "none";
    homePage.style.display = "block";
});

homeFromQuiz.addEventListener("click", () => {
    quizPage.style.display = "none";
    homePage.style.display = "block";
});


// Assistant Elements
const sendQuestionBtn = document.getElementById("send-question");
const userQuestionInput = document.getElementById("user-question");
const chatHistory = document.getElementById("chat-history");

// Assistant Responses
sendQuestionBtn.addEventListener("click", () => {

    const question = userQuestionInput.value.toLowerCase();

    let response =
        "I do not know the answer yet. This will be connected to AI later.";

    if (question.includes("idp")) {
        response =
            "IDP stands for Integrated Development Plan. It guides municipal development and service delivery.";
    }

    else if (question.includes("ward committee")) {
        response =
            "A ward committee helps communities participate in local government decision-making.";
    }

    else if (question.includes("budget")) {
        response =
            "A municipal budget outlines planned income and expenditure for a financial year.";
    }

    chatHistory.innerHTML +=
        "<p><strong>You:</strong> " + userQuestionInput.value + "</p>";

    chatHistory.innerHTML +=
        "<p><strong>Assistant:</strong> " + response + "</p>";

    userQuestionInput.value = "";
});
