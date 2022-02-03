const quizData = [
    {
        q:'В каком году утонул Титаник?',
        a:'1911',
        b:'1913',
        c:'1899',
        d:'1912',
        correct:'d',
    },
    {
        q:'Какой химический символ у серебра?',
        a:'Ag',
        b:'Sr',
        c:'Sl',
        d:'Ar',
        correct:'a',
    },
    {
        q:'В каком году сошёл с конвейера первый серийный образец ВАЗ-2121 (НИВА)?',
        a:'1954',
        b:'1988',
        c:'1977',
        d:'1981',
        correct:'c',
    },
    {
        q:'Сколько вдохов делает человеческое тело ежедневно?',
        a:'20000',
        b:'10000',
        c:'32000',
        d:'26000',
        correct:'a',
    },
    {
        q:'Кто изобрел консервную банку для консервирования в 1810 году?',
        a:'Перси Шоу',
        b:'Питер Дюран',
        c:'Кристиан Кист',
        d:'Льюис Коллинз',
        correct:'b',
    },
]

const quiz       = document.querySelector("#quiz");
const answerEl   = document.querySelectorAll('.answer');
const questionEl = document.querySelector("#question");
const a_text     = document.querySelector("#a_text");
const b_text     = document.querySelector("#b_text");
const c_text     = document.querySelector("#c_text");
const d_text     = document.querySelector("#d_text");
const submitBtn  = document.querySelector("#btn")

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {

    deselectAnswer();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.q;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {

    let answer = undefined;

    answerEl.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    });

    return answer;
}

function deselectAnswer() {
    answerEl.forEach((answerEl) => {
        answerEl.checked = false;
    })
}

submitBtn.addEventListener('click', () => {

    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>Вы звкончили квиз! Ваш результат: ${score} из ${quizData.length}!</h2> <button onclick="location.reload()">Играть заново!</button>`
        }
    }  
})
