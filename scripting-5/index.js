const quizData = [
	{
		question: "What was the most used programming language in 2019?",
		a: "Java",
		b: "C",
		c: "Python",
		d: "Javascript",
		correct: "d"
	},
	{
		question: "Who is the President of US?",
		a: "Donald Trump",
		b: "Joe Biden",
		c: "Hillary Clinton",
		d: "Bernie Sanders",
		correct: "b"
	},
	{
		question: "What does HTML stand for?",
		a: "Hypertext Markup Language",
		b: "Cascading Style Sheet",
		c: "Jason Object Notation",
		d: "none of the above",
		correct: "a"
	},
	{
		question: "What year was JavaScript launched?",
		a: "1993",
		b: "1994",
		c: "1995",
		d: "1996",
		correct: "c"
	}
];

const answerEl = document.querySelector(".answers");
const submitBtn = document.getElementById("submit-btn");
const scoreElement = document.getElementById('score');
const questionEl = document.querySelector(".question");


let currQuestion = 0;
let score = 0;

function loadQuiz() {
    
    unselectAnswer();
    

    let currtQuizData = quizData[currQuestion];
	questionEl.innerText = currtQuizData.question;
    answerEl.innerHTML =
    `
    <div class="answer"> <input type="radio" name="answer" value="a"/> <p>${currtQuizData.a}</p> </div>
    <div class="answer"> <input type="radio" name="answer" value="b"/> <p>${currtQuizData.b}</p> </div>
    <div class="answer"> <input type="radio" name="answer" value="c"/> <p>${currtQuizData.c}</p> </div>
    <div class="answer"> <input type="radio" name="answer" value="d"/> <p>${currtQuizData.d}</p> </div>
    `  
}

function selectAnswer() {
    const answers = document.getElementsByName('answer');
    let selectedAnswer = '';
    answers.forEach((answer) => {
        if (answer.checked) {
            selectedAnswer = answer.value;
        }
    });
    return selectedAnswer;
    
}

function unselectAnswer() {
    const answers = document.getElementsByName('answer');
    answers.forEach((answer) => { answer.checked = false;
    });
}

loadQuiz();

submitBtn.addEventListener('click',() => {
    const answer = selectAnswer();
    if(answer){
        if (answer === quizData[currQuestion].correct){
            score++;
        }
            
        currQuestion++;
        if(currQuestion < quizData.length) {
            loadQuiz();
        } else {
            questionEl.innerText=`You've answered ${score}/4 correctly.`;
            answerEl.style.display = "none";
            submitBtn.addEventListener('click', () => {
                window.location.reload();
            });
        
        }
       
    } else {
        alert("Please select at least one answer from the given options!");
    }
});

