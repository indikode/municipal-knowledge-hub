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
