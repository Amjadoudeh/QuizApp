console.log("Dom");

// arrya of the questions Objects - you can put ur data here:
const quizData = [
  {
    question: 'How old am I?',
    a: '10',
    b: '29',
    c: '33',
    d: '31',
    correct: 'd'
  },
  {
    question: 'How old is Elise?',
    a: '10',
    b: '29',
    c: '32',
    d: '31',
    correct: 'c'
  },
  {
    question: 'How old is Ahmad?',
    a: '103',
    b: '25',
    c: '33',
    d: '31',
    correct: 'b'
  },
  {
    question: 'How old is Iyad?',
    a: '21',
    b: '29',
    c: '33',
    d: '31',
    correct: 'a'
  },
  {
    question: 'How old is Arij?',
    a: '10',
    b: '29',
    c: '34',
    d: '31',
    correct: 'c'
  }
]

let currentQuestion = 0;
const  quizEl= document.getElementById('quiz');
const questionEl = document.getElementById('question');

const aText = document.getElementById('aText');
const bText = document.getElementById('bText');
const cText = document.getElementById('cText');
const dText = document.getElementById('dText');
//const submit = document.getElementById('submit');

let currentQuiz = 0;
let answer = undefined;
let score = 0;
// function to load the questions and replace it
function loadQuiz() {
  deselectAnswer();
  const currentQuizData = quizData[currentQuiz];
  //console.log(quizData[currentQuiz].question);

  questionEl.innerText = currentQuizData.question;
  aText.innerText = currentQuizData.a;
  bText.innerText = currentQuizData.b;
  cText.innerText = currentQuizData.c;
  dText.innerText = currentQuizData.d;
  currentQuestion++;
}
// function to check if the user select an answer
function getSelected(){
 //console.log("1"); // testing the code until this line
const answerEls= document.querySelectorAll(".answer");

let  answer = undefined;

answerEls.forEach((answerEl) => {
  //console.log("2"); // testing the code until this line
    if(answerEl.checked){
      answer =  answerEl.id;
    // console.log("3"); // testing the code until this line
    }

});
  return answer;
}



// a function to clean the radio for the next question.
function deselectAnswer()
{
  const answerEls= document.querySelectorAll(".answer");
  //let  answer = undefined;

    answerEls.forEach((answerEl) => {
    //console.log("5"); // testing the code until this line
    
     answerEl.checked = false;
     //console.log("6"); // testing the code until this line
  

});
}


// function to save the answer and move to the next question
function submitButton() {
  // check if there is an answer
  const answer = getSelected();
  if (answer){
    console.log(answer);
    if(answer === quizData[currentQuiz].correct) 
    {
      score++;
      
    }
    console.log(score);
    //console.log(answer); // testing the code until this line
    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    }
  else {
    quiz.innerHTML =  `<h2>You have got ${score} from ${quizData.length} Points </h2> <button onclick= "location.reload()">ReLoad</button`;

    }
  }
}
  

loadQuiz();


// TO DO :
// not allow the user to submit if he didn't gave an answer. // done
// cleaning the radio((Answer)) for the next question.  // done 
// check if the Answer is right and give 1 ponit for that. // done 
// comput  the point and show it to the user. // done
// reload the quiz . // 