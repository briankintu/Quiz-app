const quizData = [
    {
        question: 'How old is Tanzania ?',
        a: '50',
        b: '51',
        c: '60',
        d: '57',
        correct: 'd'
    }, 
    {
        question: 'How many lakes are in Tanzania ?',
        a: '6',
        b: '4',
        c: '10',
        d: '11',
        correct: 'b'
    },
    {

        question: 'Mountain Kiliminjaro is in which country ?',
        a: 'Kenya',
        b: 'Tanzania',
        c: 'Rwanda',
        d: 'Zambia',
        correct: 'b'

    },
    {

        question: 'Where is Tanzanite located in Tanzania ?',
        a: 'Northern Tanzania',
        b: 'Eastern Tanzania',
        c: 'Southern Tanzania',
        d: 'Western Tanzania',
        correct: 'a'
        },
    {

        question: 'Who is the President of Tanzania ?',
        a: 'Mhe. Jakaya Mrisho Kikwete',
        b: 'Mhe. Samia Suluhu Hassan',
        c: 'Mhe. John Pombe Magufuli',
        d: 'Mhe. Gwajima ',
        correct: 'b'
        },
    {

        question: 'Who is only begotten son of God ?',
        a: 'Moses',
        b: 'David',
        c: 'Paul',
        d: 'Jesus',
        correct: 'd'
        }




];

const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const quiz = document.getElementById('quiz')

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuestion = 0;

let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData
    [currentQuestion];
    questionEl.innerText = currentQuizData.question;

    a_text.innerText= currentQuizData.a;
    b_text.innerText= currentQuizData.b;
    c_text.innerText= currentQuizData.c;
    d_text.innerText= currentQuizData.d;
    


    
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        //console.log(answer.checked)
         if(answerEl.checked) {

            answer =  answerEl.id
             

        }
        //console.log(answer.value)
    });

    return answer

    
}

function deselectAnswers() {

    answerEls.forEach((answerEl) => {
         answerEl.checked = false;
    });

}

submitBtn.addEventListener("click", ()=> {
    
  //check to see the naswer
     const answer = getSelected();

     console.log(answer)
    
     if (answer) {
         if(answer === quizData[currentQuestion].correct) 
         {
             score++;
             console.log(score)
         }
         
         currentQuestion++;
    
     console.log(currentQuestion)
    if(currentQuestion < quizData.length){
        loadQuiz()
    } else{
        quiz.innerHTML = `<h2>You answered Correctly at ${score}/${quizData.length} questions.</h2>
        <button onclick="location.reload()">Reload</button>`
    }
}

});


    
