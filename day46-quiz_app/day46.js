const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer') //get all choice elm 
const questionEl = document.getElementById('question') //get text of question
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuizIndex = 0
let score = 0

loadQuiz()



function loadQuiz() {
    //unchecking all answer
    answerEls.forEach(ans => { ans.checked = false })

    //get the current question. First question by default on first load
    currentQuiz = quizData[currentQuizIndex]
    questionEl.innerText = currentQuiz.question
    a_text.innerText = currentQuiz.a
    b_text.innerText = currentQuiz.b
    c_text.innerText = currentQuiz.c
    d_text.innerText = currentQuiz.d
}

/**
 * 
 * originally set this to return id and end loop directly;
 * did not work well
 */
function getSelectedAnswer() {
    let answer
    answerEls.forEach(ans => {
        if (ans.checked){
            answer = ans.id
        }   
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const choice = getSelectedAnswer()

    if (choice) {
        if (choice === quizData[currentQuizIndex].correct) {
            score++
        }


        //continue till went through all of quiz data
        currentQuizIndex++

        if (currentQuizIndex < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})
