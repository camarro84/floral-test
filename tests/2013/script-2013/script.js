(function() {
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  
  const myQuestions = [
    {
      question: "Organem dekoracyjnym Lunaria annua, decydującym o przydatności tej rośliny w suchej florystyce, są:",
      answers: {
        a: "Srebrzyste liście.",
        b: "Fioletowe kwiaty.",
        c: "Suche okrywy kwiatostanów.",
        d: "Blaszkowate przegrody áuszczyn."
      },
      correctAnswer: "d"
    },
    {
      question: "Strelitzia reginae to roślina",
      answers: {
        a: "o charakterze dominującym.",
        b: "o charakterze spółecznym.",
        c: "o średniej wartości.",
        d: "o niskiej wartości."
      },
      correctAnswer: "a"
    },
    {
      question: "Kwiaty barwy niebieskiej są charakterystyczne dla:",
      answers: {
        a: "Lunaria annua.",
        b: "Echinops ritro.",
        c: "Alchemilla mollis.",
        d: "Begonia semperflorens."
      },
      correctAnswer: "b"
    }
  ];

  function buildQuiz() {
    const output = [];
    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answers = [];
      for (letter in currentQuestion.answers) {
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    });
    quizContainer.innerHTML = output.join('');
  }

  function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;
    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      if (userAnswer === currentQuestion.correctAnswer) {
        numCorrect++;
        answerContainers[questionNumber].style.color = 'lightgreen';
      } else {
        answerContainers[questionNumber].style.color = 'red';
      }
    });
    resultsContainer.innerHTML = `${numCorrect} з ${myQuestions.length}`;
  }

  buildQuiz();
  submitButton.addEventListener('click', showResults);
})();
