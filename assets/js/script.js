const homePageContainer = document.getElementById('home-page-container');
const quizContainer = document.getElementById('quiz-container');
const resultsContainer = document.getElementById('results-container');
const startButton = document.getElementById('start-button');
const resetButton = document.getElementById('reset-button');
const resultsButton = document.getElementById('results-button');
const quizContent = document.getElementById('quiz-content');
const questionText = document.getElementById('question-text');
const answerContainerA = document.getElementById('answer-a');
const answerContainerB = document.getElementById('answer-b');
const answerContainerC = document.getElementById('answer-c');


const firstQuestion = {
  question: 'Does your partner prefer going out or staying at home?',
  answerA: 'Staying home',
  answerB: 'Going out',
  answerC: 'pass'
}

const homeQuestion = {
  question: 'Does your partner enjoy being creative?',
  answerA: 'Yes',
  answerB: 'No',
  answerC: 'pass'
}

const creativeQuestion = {
  question: 'Which of the following activities would most interest your partner?',
  answerA: 'Arts and cratfs',
  answerB: 'Gardening',
  answerC: 'Cookery'
}

const unCreativeQuestion = {
  question: 'Which of the following is your partner most interested in?',
  answerA: 'Tech',
  answerB: 'Animals',
  answerC: 'Games'
}

const outQuestion = {
  question: 'Would your partner prefer an adventurous day out or would they rather relax?',
  answerA: 'Adventure',
  answerB: 'Relaxation',
  answerC: 'pass'
}

const adventurousQuestion = {
  question: 'Does your partner prefer to do something active?',
  answerA: 'Yes',
  answerB: 'No',
  answerC: 'pass'

}

const leisureQuestion = {
  question: 'Is your partner a bit of a foodie?',
  answerA: 'Yes',
  answerB: 'No',
  answerC: 'pass'

}

const activeQuestion = {
  question: 'Which of the following activities would your partner prefer?',
  answerA: 'Individual sports',
  answerB: 'Team sports',
  answerC: 'Travel'
}

const notActiveQuestion = {
  question: 'Which of the following activities would your partner prefer?',
  answerA: 'Go to watch a sports event',
  answerB: 'Visit a theme park',
  answerC: 'Go on an adrenaline fueled ride'
}


const foodieQuestion = {
  question: 'Would your partner rather...',
  answerA: 'Eat out',
  answerB: 'Learn to cook something new',
  answerC: 'Go for a tasting session'
}


const notFoodieQuestion = {
  question: 'Which of the following would interest your partner the most?',
  answerA: 'A visit to a museum',
  answerB: 'A pamper day at the spa',
  answerC: 'Going sightseeing'
}
// variables of each categories - empty arrays filled in by 
// findGiftsInCategory function, that fetches data from suggestions.json
var arts = []
var gardening = []
var cookery = []
var tech = []
var animals = []
var games = []
var individualSports = []
var teamSports = []
var travel = []
var sportsEvent = []
var themePark = []
var ride = []
var eatOut = []
var cook = []
var tasting = []




let currentQuestion = firstQuestion;
let category = ''

// variables for modal
const modal = document.getElementById('modal');
const modalContent = document.querySelector('.modal-content');
const closeModal = document.getElementById('modal-close');
// Variables for suggestions
const suggestionContainer = document.getElementById('suggestion-container');
let resultContent = document.querySelectorAll('.result__content');
let quizAnswers = document.querySelector('#quiz-answers').childNodes;
console.log(quizAnswers)


document.addEventListener('DOMContentLoaded', function () {
  closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
  });
  answerContainerA.addEventListener('click', checkAnswer);
  answerContainerB.addEventListener('click', checkAnswer);
  answerContainerC.addEventListener('click', checkAnswer);
  fetchData();
});


let data;
/**
 * Fetch json data
 */
async function fetchData() {
  const response = await fetch('assets/js/suggestions.json');
  data = await response.json();
  console.log(data);
  displayData(data);

}

// answerContainerA.addEventListener('click', function (e) {
//   // console.log(data);
//   data.forEach(suggestion => {
//     let categoryChosen
//     if (e.target.innerText === suggestion.category) {
//       categoryChosen = suggestion.category
//       console.log(categoryChosen)
//       newData = data.filter(suggestion => suggestion.category === categoryChosen);
//       console.log(newData);
//     }
//   })

//   categoryChosen = e.target.innerHTML;

// });
// answerContainerB.addEventListener('click', function (e) {
//   let categoryChosen
//   data.forEach(suggestion => {
//     console.log(suggestion.category)
//     console.log(e.target.innerText)
//     if (e.target.innerText === suggestion.category) {
//       categoryChosen = suggestion.category
//       console.log(categoryChosen)
//       newData = data.filter(suggestion => suggestion.category === categoryChosen);
//       console.log(newData);
//     }
//   })
// });


/**
 * Classify data
 * Display data
 * Send data to the card
 */
const displayData = function (data) {
  // checkAnswer()
  // newData = data.filter(suggestion => suggestion.category === tempVar);
  // console.log(newData);
  suggestionContainer.innerHTML = '';
  data.forEach(suggestion => {
    // if (suggestion.category === categoryChosen) {
    const suggestionCard = document.createElement('div');
    suggestionCard.classList.add('result__content');
    suggestionCard.innerHTML = `
      <h3 class="result__content--title">${suggestion.name}</h3>
      <div class="result__content--image">
        <img src="${suggestion.image}" alt="${suggestion.name}">
      </div>
      <div class="result__content--modal">learn more</div>
      `;

    suggestionCard.addEventListener('click', function () {
      console.log('clicked');
      modal.style.display = 'flex';
      // document.body.style.overflow = 'hidden';
      displayModalContent(suggestion);
    })

    suggestionContainer.appendChild(suggestionCard);
    // }

  })
}


const displayModalContent = function (suggestion) {
  console.log(suggestion.websites[0]);
  const modalImage = document.querySelector('#suggestion-image');
  const modalInfo = document.querySelector('#suggestion-info');
  modalImage.innerHTML = `
  <img src="${suggestion.image}" alt="${suggestion.name}">
  `;
  let websitesList = suggestion.websites.map(website => `
    <li class="modal__content--link">
      <img src="assets/images/heart-svgrepo-com.svg" alt="" class="hearts" style="width:1.2rem; height:1.2rem;">
      <a href='${website[1]}' target="_blank" rel="noopener"
      aria-label="Visit ${website[0]}">
        ${website[0]}
      </a>
    </li>
  `).join('');
  console.log(websitesList);
  modalInfo.innerHTML = `
      <h3 class="modal__content--title">${suggestion.name}</h3>
      <p class="modal__content--description">
        ${suggestion.description}
      </p>
      <h4 class="modal__content--websites">Were to find:</h4>
      <ul class="modal__content--links">${websitesList}</ul>
      <div class="modal__content--price">
        <h4 class="modal__content--price-title">Price:</h4>
        <div>$ ${suggestion.price} </div>
      </div>
  `;
}


//sets the text of the questions and answers. hides button C if there are only 2 options
function displayQuestion(currentQuestion) {
  questionText.innerText = currentQuestion.question;
  answerContainerA.innerText = currentQuestion.answerA;
  answerContainerB.innerText = currentQuestion.answerB;
  if (currentQuestion.answerC === 'pass') {
    answerContainerC.classList.add('hide');
  } else {
    answerContainerC.classList.remove('hide');
    answerContainerC.innerText = currentQuestion.answerC;
  }
}

displayQuestion(currentQuestion)

// function displayResults(category) {
//   quizContainer.classList.add('hide');
//   resultsContainer.classList.remove('hide')
//   category.forEach(suggestion => {
//     const suggestionCard = document.createElement('div');
//     suggestionCard.classList.add('result__content');
//     suggestionCard.innerHTML = `
//     <h3 class="result__content--title">${suggestion.name}</h3>
//     <div class="result__content--image">
//       <img src="${suggestion.image}" alt="${suggestion.name}">
//     </div>
//     <div class="result__content--modal">learn more</div>
//     `;

//     suggestionCard.addEventListener('click', function () {
//       console.log('clicked');
//       modal.style.display = 'flex';
//       displayModalContent(suggestion);
//     })

//     suggestionContainer.appendChild(suggestionCard);
//   })
// }

const checkAnswer = function (e) {

  let tempVar = e.target.innerText;
  // console.log(tempVar);
  if (currentQuestion === firstQuestion) {
    if (e.target.id === 'answer-a') {
      currentQuestion = homeQuestion;
    } else {
      currentQuestion = outQuestion;
    }
    displayQuestion(currentQuestion);
  } else if (currentQuestion === homeQuestion) {
    if (e.target.id === 'answer-a') {
      currentQuestion = creativeQuestion;
    } else {
      currentQuestion = unCreativeQuestion;
    }
    displayQuestion(currentQuestion)
  } else if (currentQuestion === outQuestion) {
    if (e.target.id === 'answer-a') {
      currentQuestion = adventurousQuestion;
    } else {
      currentQuestion = leisureQuestion;
    }
    displayQuestion(currentQuestion)
  } else if (currentQuestion === adventurousQuestion) {
    if (e.target.id === 'answer-a') {
      currentQuestion = activeQuestion;
    } else {
      currentQuestion = notActiveQuestion;
    }
    displayQuestion(currentQuestion)
  } else if (currentQuestion === leisureQuestion) {
    if (e.target.id === 'answer-a') {
      currentQuestion = foodieQuestion;
    } else {
      currentQuestion = notFoodieQuestion;
    }
    displayQuestion(currentQuestion)
  } else {

    console.log(tempVar);
    return tempVar;
  }

  // else if (currentQuestion === unCreativeQuestion) {
  //   if (e.target.id === 'answer-a') {
  //     category = tech
  //   } else if (e.target.id === 'answer-b') {
  //     category = 'animals'
  //   } else {
  //     category = games
  //   }
  //   displayData(category)
  // } else if (currentQuestion === activeQuestion) {
  //   if (e.target.id === 'answer-a') {
  //     category = individualSports
  //   } else if (e.target.id === 'answer-b') {
  //     category = teamSports
  //   } else {
  //     category = travel
  //   }
  //   displayResults(category)
  // } else if (currentQuestion === notActiveQuestion) {
  //   if (e.target.id === 'answer-a') {
  //     category = sportsEvent
  //   } else if (e.target.id === 'answer-b') {
  //     category = themePark
  //   } else {
  //     suggestion = ride
  //   }
  //   displayResults(category)
  // } else if (currentQuestion === foodieQuestion) {
  //   if (e.target.id === 'answer-a') {
  //     suggestion = eatOut
  //   } else if (e.target.id === 'answer-b') {
  //     suggestion = cook
  //   } else {
  //     suggestion = tasting
  //   }
  //   displayResults(category)
  // } else if (currentQuestion === notFoodieQuestion) {
  //   if (e.target.id === 'answer-a') {
  //     suggestion = museum
  //   } else if (e.target.id === 'answer-b') {
  //     suggestion = spa
  //   } else {
  //     suggestion = sightseeing
  //   }
  //   displayResults(category)
  // }
}

//event listeners
// answerContainerA.addEventListener('click', checkAnswer);
// answerContainerB.addEventListener('click', checkAnswer);
// answerContainerC.addEventListener('click', checkAnswer);


/// displays modal 