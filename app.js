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

// =====================
// MUNICIPAL GOVERNANCE QUIZ
// =====================

const governanceBtn = document.getElementById("governance-btn");
const quizCategories = document.getElementById("quiz-categories");
const quizContainer = document.getElementById("quiz-container");

const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question-text");
const answerOptions = document.getElementById("answer-options");
const submitAnswer = document.getElementById("submit-answer");
const feedback = document.getElementById("feedback");

const governanceQuestions = [
    {
        question: "What does IDP stand for?",
        options: [
            "Internal Development Process",
            "Infrastructure Delivery Plan",
            "Integrated Development Plan",
            "Integrated Delivery Process"
        ],
        answer: "Integrated Development Plan"
    },
    {
        question: "What is the primary purpose of a ward committee?",
        options: [
            "Collect taxes",
            "Support community participation",
            "Approve municipal budgets",
            "Hire municipal staff"
        ],
        answer: "Support community participation"
    },
    {
        question: "Which sphere of government includes municipalities?",
        options: [
            "Local Government",
            "Provincial Government",
            "National Government",
            "Judicial Government"
        ],
        answer: "Local Government"
    },
    {
        question: "Which document guides municipal planning and development?",
        options: [
            "Constitution",
            "IDP",
            "Annual Report",
            "Procurement Plan"
        ],
        answer: "IDP"
    },
    {
        question: "Community participation is important because it helps municipalities:",
        options: [
            "Ignore residents",
            "Increase traffic fines",
            "Understand community needs",
            "Reduce staff"
        ],
        answer: "Understand community needs"
    }
];

let currentQuestion = 0;
governanceBtn.addEventListener("click", () => {

    quizCategories.style.display = "none";
    quizContainer.style.display = "block";

    currentQuestion = 0;
    score = 0;

    quizResults.innerHTML = "";

    submitAnswer.style.display = "inline-block";

    loadQuestion();
});

function loadQuestion() {

    feedback.innerHTML = "";

    const q = governanceQuestions[currentQuestion];

    questionNumber.innerHTML =
        "Question " + (currentQuestion + 1) +
        " of " + governanceQuestions.length;

    questionText.innerHTML = q.question;

    answerOptions.innerHTML = "";

    q.options.forEach(option => {

        answerOptions.innerHTML += `
            <label>
                <input
                    type="radio"
                    name="answer"
                    value="${option}">
                ${option}
            </label>
            <br><br>
        `;
    });
}

submitAnswer.addEventListener("click", () => {

    const selected =
        document.querySelector('input[name="answer"]:checked');

    if (!selected) {
        feedback.innerHTML =
            "Please select an answer.";
        return;
    }

    const chosenAnswer = selected.value;

    if (
        chosenAnswer ===
        governanceQuestions[currentQuestion].answer
    ) {
        score++;

        feedback.innerHTML =
            "✅ Correct!";
    }
    else {

        feedback.innerHTML =
            "❌ Incorrect. Correct answer: " +
            governanceQuestions[currentQuestion].answer;
    }

    setTimeout(() => {

        currentQuestion++;

        if (
            currentQuestion <
            governanceQuestions.length
        ) {
            loadQuestion();
        }
        else {

            questionNumber.innerHTML =
                "Quiz Complete";

            questionText.innerHTML =
                "Your Score: " +
                score +
                "/" +
                governanceQuestions.length;

            answerOptions.innerHTML = "";

            feedback.innerHTML = "";
        }

    }, 1500);
});
