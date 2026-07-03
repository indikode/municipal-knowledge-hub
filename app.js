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

            questionText.innerHTML = "";

            answerOptions.innerHTML = "";

            feedback.innerHTML = "";

            submitAnswer.style.display =
                "none";

            let message = "";

            if (score <= 2) {

                message = `
                    <h3>Your Score: ${score}/${governanceQuestions.length}</h3>

                    <p>
                    Every expert starts somewhere.

                    Municipal governance affects
                    communities every day.

                    Consider reviewing this topic
                    and trying again.

                    The more you learn, the better
                    equipped you are to participate
                    in local government matters.
                    </p>

                    <h4>Recommended Next Step</h4>

                    <p>
                    📖 Understanding Local Government
                    (Coming Soon)
                    </p>
                `;
            }

            else if (score <= 4) {

                message = `
                    <h3>Your Score: ${score}/${governanceQuestions.length}</h3>

                    <p>
                    Good effort.

                    You have a solid understanding
                    of municipal governance but
                    there is still room to grow.

                    Keep learning and strengthening
                    your knowledge.
                    </p>

                    <h4>Recommended Next Step</h4>

                    <p>
                    📖 Understanding Local Government
                    (Coming Soon)
                    </p>
                `;
            }

            else {

                message = `
                    <h3>Your Score: ${score}/${governanceQuestions.length}</h3>

                    <p>
                    Excellent work.

                    You demonstrated a strong
                    understanding of municipal
                    governance.

                    Informed citizens help build
                    stronger communities and
                    support meaningful public
                    participation.
                    </p>

                    <h4>Recommended Next Step</h4>

                    <p>
                    📖 Try the Comprehension
                    Challenge when available.
                    </p>
                `;
            }

            quizResults.innerHTML = message;
        }

    }, 1500);
});});

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
