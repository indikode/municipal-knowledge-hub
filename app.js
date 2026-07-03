// =====================
// PAGE NAVIGATION
// =====================

const homePage = document.getElementById("home-page");
const assistantPage = document.getElementById("assistant-page");
const quizPage = document.getElementById("quiz-page");

const assistantBtn = document.getElementById("assistant-btn");
const quizBtn = document.getElementById("quiz-btn");

const homeFromAssistant = document.getElementById("home-from-assistant");
const homeFromQuiz = document.getElementById("home-from-quiz");

// Show Assistant
assistantBtn.addEventListener("click", () => {
    homePage.style.display = "none";
    quizPage.style.display = "none";
    assistantPage.style.display = "block";
});

// Show Quiz
quizBtn.addEventListener("click", () => {
    homePage.style.display = "none";
    assistantPage.style.display = "none";
    quizPage.style.display = "block";
});

// Home from Assistant
homeFromAssistant.addEventListener("click", () => {
    assistantPage.style.display = "none";
    homePage.style.display = "block";
});

// Home from Quiz
homeFromQuiz.addEventListener("click", () => {
    quizPage.style.display = "none";
    homePage.style.display = "block";
});


// =====================
// MUNICIPAL ASSISTANT
// =====================

const sendQuestionBtn = document.getElementById("send-question");
const userQuestionInput = document.getElementById("user-question");
const chatHistory = document.getElementById("chat-history");

sendQuestionBtn.addEventListener("click", () => {

    const question = userQuestionInput.value.toLowerCase();

    let response =
        "I do not know the answer yet. This will be connected to AI later.";

    if (question.includes("idp")) {
        response =
            "IDP stands for Integrated Development Plan. It guides municipal planning, budgeting and development priorities.";
    }

    else if (question.includes("ward committee")) {
        response =
            "A ward committee promotes community participation and communication between residents and their ward councillor.";
    }

    else if (question.includes("budget")) {
        response =
            "A municipal budget outlines planned revenue and expenditure for a financial year.";
    }

    chatHistory.innerHTML +=
        "<p><strong>You:</strong> " +
        userQuestionInput.value +
        "</p>";

    chatHistory.innerHTML +=
        "<p><strong>Assistant:</strong> " +
        response +
        "</p>";

    userQuestionInput.value = "";
});


// =====================
// MUNICIPAL GOVERNANCE QUIZ
// =====================

const governanceBtn = document.getElementById("governance-btn");

const quizCategories =
    document.getElementById("quiz-categories");

const quizContainer =
    document.getElementById("quiz-container");

const questionNumber =
    document.getElementById("question-number");

const questionText =
    document.getElementById("question-text");

const answerOptions =
    document.getElementById("answer-options");

const submitAnswer =
    document.getElementById("submit-answer");

const feedback =
    document.getElementById("feedback");

const backToCategories =
    document.getElementById("back-to-categories");

const quizResults =
    document.getElementById("quiz-results");
const nextQuestion =
    document.getElementById("next-question");

const answerExplanation =
    document.getElementById("answer-explanation");

const governanceQuestions = [
{
    question: "What does IDP stand for?",
    options: [
        "Internal Development Process",
        "Infrastructure Delivery Plan",
        "Integrated Development Plan",
        "Integrated Delivery Process"
    ],
    answer: "Integrated Development Plan",
    explanation:
        "The Integrated Development Plan (IDP) is the municipality's principal strategic planning document. It guides development priorities, budgeting and service delivery."
},
{
    question: "What is the primary purpose of a ward committee?",
    options: [
        "Collect taxes",
        "Support community participation",
        "Approve municipal budgets",
        "Hire municipal staff"
    ],
    answer: "Support community participation",
    explanation:
        "Ward committees help communities participate in municipal decision-making and communicate local needs to councillors."
},
{
    question: "Which sphere of government includes municipalities?",
    options: [
        "Local Government",
        "Provincial Government",
        "National Government",
        "Judicial Government"
    ],
    answer: "Local Government",
    explanation:
        "Municipalities form part of Local Government, which is one of South Africa's three spheres of government."
},
{
    question: "Which document guides municipal planning and development?",
    options: [
        "Constitution",
        "IDP",
        "Annual Report",
        "Procurement Plan"
    ],
    answer: "IDP",
    explanation:
        "The IDP is the municipality's main planning instrument and helps align projects, budgets and development priorities."
},
{
    question: "Community participation is important because it helps municipalities:",
    options: [
        "Ignore residents",
        "Increase traffic fines",
        "Understand community needs",
        "Reduce staff"
    ],
    answer: "Understand community needs",
    explanation:
        "Community participation helps municipalities understand the priorities, concerns and needs of residents."
}
];

let currentQuestion = 0;
let score = 0;


// Start Quiz
governanceBtn.addEventListener("click", () => {

    quizCategories.style.display = "none";
    quizContainer.style.display = "block";

    currentQuestion = 0;
    score = 0;

    quizResults.innerHTML = "";
    feedback.innerHTML = "";

    submitAnswer.style.display = "inline-block";

    loadQuestion();
});


// Back To Categories
backToCategories.addEventListener("click", () => {

    quizContainer.style.display = "none";
    quizCategories.style.display = "block";

    questionNumber.innerHTML = "";
    questionText.innerHTML = "";
    answerOptions.innerHTML = "";
    feedback.innerHTML = "";
    quizResults.innerHTML = "";

    submitAnswer.style.display = "inline-block";

    currentQuestion = 0;
    score = 0;
});


// Load Question
function loadQuestion() {

    feedback.innerHTML = "";

answerExplanation.innerHTML = "";

nextQuestion.style.display = "none";

submitAnswer.style.display = "inline-block";

    const q = governanceQuestions[currentQuestion];

    questionNumber.innerHTML =
        "Question " +
        (currentQuestion + 1) +
        " of " +
        governanceQuestions.length;

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


// Submit Answer
submitAnswer.addEventListener("click", () => {

    const selected =
        document.querySelector(
            'input[name="answer"]:checked'
        );

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
        answerExplanation.innerHTML =
    "<strong>Explanation:</strong><br>" +
    governanceQuestions[currentQuestion].explanation;
    }

    else {

        feedback.innerHTML =
            "❌ Incorrect. Correct answer: " +
            governanceQuestions[currentQuestion].answer;
        answerExplanation.innerHTML =
    "<strong>Explanation:</strong><br>" +
    governanceQuestions[currentQuestion].explanation;
    }
submitAnswer.style.display = "none";

nextQuestion.style.display = "inline-block";
    
nextQuestion.addEventListener("click", () => {

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

        questionText.innerHTML = "";

        answerOptions.innerHTML = "";

        feedback.innerHTML = "";

        answerExplanation.innerHTML = "";

        submitAnswer.style.display = "none";
        nextQuestion.style.display = "none";

        let message = "";

        if (score <= 2) {

            message = `
                <h3>Your Score: ${score}/${governanceQuestions.length}</h3>

                <p>
                Every expert starts somewhere.

                Keep learning about local government
                and try again.
                </p>
            `;
        }

        else if (score <= 4) {

            message = `
                <h3>Your Score: ${score}/${governanceQuestions.length}</h3>

                <p>
                Good effort.

                You have a solid foundation and can
                continue building your knowledge.
                </p>
            `;
        }

        else {

            message = `
                <h3>Your Score: ${score}/${governanceQuestions.length}</h3>

                <p>
                Excellent work.

                You demonstrated strong municipal
                governance knowledge.
                </p>
            `;
        }

        quizResults.innerHTML = message;
    }
});});
