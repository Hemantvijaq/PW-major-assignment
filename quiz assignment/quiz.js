const quizQuestions = [
    {
        question: 'what is the capital of India',
        options: ['MUMBAI','DELHI','INDORE','RANCHI'],
        answer: 'DELHI'
    },
    {
        question:'which is the cleanest city of India',
        options: ['INDORE','UJJAIN','BHOPAL','DEWAS'],
        answer: 'INDORE'
    },
    {
        question:'what is the square root of 2',
        options: ['4','5','6','3'],
        answer: '4'
    },
    {
        question: 'what is the cube root of 3',
        options: ['27','34','36','33'],
        answer:'27'
    },
    {
        question:'CO2 full form',
        options: ['carbon','oxygen','nitrogen','carbon dioxide'],
        answer:'carbon dioxide'
    },
];

const quizcontainer = document.getElementsByClassName('quiz');
const resultcontainer = document.getElementsByClassName('result');
const submitbutton = document.getElementsByClassName('button');
const retrybutton = document.getElementById('retry');
const showAnswerbutton = document.getElementById('showAnswer');

let currentQuestion = 0;
let score = 0;
let incorrectAnswer = 0;

function shuffleArray(array){
    for (let i=array.length - 1;i > 0;i--) {
        const j = Math.floor(Math.random()*(i+1));
        [array[i],array[j] = array[j],array[i]]
        
    }
}

function displayQuestion(){
    const quizdata = quizQuestions[currentQuestion];

    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerHTML = quizdata.question;

    const optionsElement = document.createElement('div');
    optionsElement.className = 'options';

    const shuffleArrayOptions = [...quizdata.options];
   shuffleArray(shuffleArrayOptions);

    for(let i =0 ; i<shuffleArrayOptions; i++){
    const options = document.createElement('label')
    options.className = 'label';

    const radio = document.createElement('input');
    radio.type ='radio';
    radio.name = 'quiz';
    radio.value = 'shuffleArrayOptions';

    const optionText = document.createTextNode(shuffleArrayOptions[i]);

    options.appendChild(radio);
    optionText.appendChild(optionText);
    optionsElement.appendChild(options);

}
quizcontainer.innerHTML = '';
quizcontainer.appendChild(optionsElement);
quizcontainer.appendChild(questionElement);
}

function checkAnswer (){
    const selectedOptions = document.querySelector('input[}name="quiz"]:checked');
    if (selectedOptions) {
        const answer = selectedOptions.value;
        if(answer === quizdata[currentQuestion].answer){
            score++;

        }else{
            incorrectAnswer.push({
                question: quizdata[currentQuestion].question,
                incorrectAnswer: answer,
                correctAnswer:quizdata[currentQuestion].answer,
            })
        }
        currentQuestion++;
        selectedOptions.checked = false;
        if(currentQuestion < quizdata.length){
            displayQuestion();
        }else{
            displayResult();
        }
    }
}

function displayResult() {
    quizcontainer.style.display = 'none';
    submitbutton.style.display = 'none';
    retrybutton.style.display = 'inline-block';
    showAnswerbutton.style.display ='inline-block';
    resultcontainer.innerHTML = 'your score ${score} out of ${quizdata.length}';

}

function retryQuiz(){
    currentQuestion = 0;
    score = 0;
    incorrectAnswer =[];
    quizcontainer.style.display ='block';
    submitbutton.style.display = 'inline-block';
    retrybutton.style.display = 'none';
    showAnswerbutton.style.display = 'none'
    resultcontainer.innerHTML='';
    displayQuestion();

}

function showAnswer(){
    quizcontainer.style.display = 'none';
    retrybutton.style.display = 'none';
    submitbutton.style.display ='inline-block';
    showAnswerbutton.style.display ='none';

    let incorrectAnswerHtml ='';
    for(let i=0; i<incorrectAnswer.length;i++){
        incorrectAnswerHtml += `
        <p>
        <strong>Questions</strong> ${incorrectAnswer[i].question} <br>
        <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
        <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
        </p>
        `;
    }

    resultcontainer,innerHTML = `
    <p>you scored ${score} out of {quizdata.length}!</p>
    <p>incorrectAnswer:</P>
    ${incorrectAnswerHtml}
    `;

}

submitbutton.addEventListener('click',checkAnswer);
retrybutton.addEventListener('click',retryQuiz);
showAnswerbutton.addEventListener('click',showAnswer);

displayQuestion();


