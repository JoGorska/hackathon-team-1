const homePageContainer = document.getElementById('home-page-container');
const quizContainer = document.getElementById('quiz-container');
const resultsContainer = document.getElementById('results-container');
const startButton = document.getElementById('start-button');
const resetButton = document.getElementById('reset-button');
const quizContent = document.getElementById('quiz-content');
const questionText = document.getElementById('question-text');
const answerContainerA = document.getElementById('answer-a');
const answerContainerB = document.getElementById('answer-b');
const answerContainerC = document.getElementById('answer-c');
const suggestionHeader = document.getElementById('suggestion-header');
const suggestionContainer = document.getElementById('suggestion-container');
// // variables for modal
const modal = document.getElementById('modal');
const modalContent = document.querySelector('.modal-content');
const closeModal = document.getElementById('modal-close');
// // Variables for suggestions
const resultContent = document.querySelectorAll('.result__content');
const quizAnswers = document.querySelector('#quiz-answers').childNodes;


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
  answerC: 'Go for a alcohol tasting session'
}


const notFoodieQuestion = {
  question: 'Which of the following would interest your partner the most?',
  answerA: 'A visit to a museum',
  answerB: 'A pamper day at the spa',
  answerC: 'Going sightseeing'
}
// variables of each categories - empty arrays filled in by 
// findGiftsInCategory function, that fetches data from suggestions.json
var museum = []
var gardening = []
var cookery = []
var foodExperiment = []
var tech = []
var animals = []
var games = []
var individualSports = []
var teamSports = []
var travel = []
var spa = []
// var sportsEvent = [] ??? no data so far - wathcing outdoor sport Catherine
var sportsEvent = []
var themePark = []
var ride = []
// var eatOut = [] ??? no data so far sam
var eatOut = []
var picnic = []
var cookingClasses = []
var alcoholTasting = []
var handcraft = []
// var sightseeing = [] ??? no data so far Sejung
var sightseeing = []

/**
 * function to fetch data from suggestion.js and than add
 * an array to each of the variables representing a list
 * of gifts in the given category
 */

const data = fetch('assets/js/suggestions.json')
  .then(response => response.json())
  .then(data => {
    museum = findGiftsInCategory("museum", data)
    gardening = findGiftsInCategory("gardening", data)
    cookery = findGiftsInCategory("cookery", data)
    // food experiment in json file not used
    foodExperiment = findGiftsInCategory("foodExperiment", data)
    games = findGiftsInCategory("games", data)
    animals = findGiftsInCategory("animals", data)
    tech = findGiftsInCategory("technology", data)
    individualSports = findGiftsInCategory("individualSports", data)
    teamSports = findGiftsInCategory("teamSports", data)
    travel = findGiftsInCategory("travel", data)
    spa = findGiftsInCategory("spa", data)
    sportsEvent = findGiftsInCategory("sportsEvent", data)
    themePark = findGiftsInCategory("themePark", data)
    ride = findGiftsInCategory("ride", data)
    eatOut = findGiftsInCategory("eatOut", data)
    picnic = findGiftsInCategory("picnics", data)
    cookingClasses = findGiftsInCategory("cookingClasses", data)
    alcoholTasting = findGiftsInCategory("alcoholTasting", data)
    handcraft = findGiftsInCategory("handcraft", data)
    sightseeing = findGiftsInCategory("sightseeing", data)
  });

/**
 * function to create a list of objects that have the same category
 * the objects come from suggestions.json file that is fetched in the
 * data variable
 * takes a string (category) and array (data) as variables
 */

function findGiftsInCategory(category, data) {
  let listOfGifts = []
  for (let i = 0; i < data.length; ++i) {

    if (data[i].category === category) {
      listOfGifts.push(data[i]);
    }
  }
  return listOfGifts
}

let currentQuestion = firstQuestion;
let category = ''

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

function startTheQuiz() {
  displayQuestion(currentQuestion);
  startButton.classList.add('hide');
  resetButton.classList.remove('hide');
  quizContent.classList.remove('hide');
  answerContainerA.classList.remove('hide');
  answerContainerB.classList.remove('hide');
}

function displayResults(category) {
  quizContainer.classList.add('hide');
  resultsContainer.classList.remove('hide')
  suggestionHeader.classList.remove('hide')
  category.forEach(suggestion => {
    const suggestionCard = document.createElement('div');
    suggestionCard.classList.add('result__content');
    suggestionCard.innerHTML = `
    <h3 class="result__content--title">${suggestion.name}</h3>
    <div class="result__content--image">
      <img src="${suggestion.image}" alt="${suggestion.name}">
    </div>
    <div class="result__content--modal result__content--btn">learn more</div>
    `;
    suggestionCard.addEventListener('click', function () {
      console.log('clicked');
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden';
      displayModalContent(suggestion);
    })

    suggestionContainer.appendChild(suggestionCard);
  })
}

/**
 * function to check answers, gives next questions or
 * gives suggested categories to display gift ideas
 * 
 */

function checkAnswer(e) {
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
  } else if (currentQuestion === creativeQuestion) {
    if (e.target.id === 'answer-a') {
      category = handcraft
    } else if (e.target.id === 'answer-b') {
      category = gardening
    } else {
      category = cookery
    }
    displayResults(category)
  } else if (currentQuestion === unCreativeQuestion) {
    if (e.target.id === 'answer-a') {
      category = tech
    } else if (e.target.id === 'answer-b') {
      category = animals
    } else {
      category = games
    }
    displayResults(category)
  } else if (currentQuestion === activeQuestion) {
    if (e.target.id === 'answer-a') {
      category = individualSports
    } else if (e.target.id === 'answer-b') {
      category = teamSports
    } else {
      category = travel
    }
    displayResults(category)
  } else if (currentQuestion === notActiveQuestion) {
    if (e.target.id === 'answer-a') {
      category = sportsEvent
    } else if (e.target.id === 'answer-b') {
      category = themePark
    } else {
      category = ride
    }
    displayResults(category)
  } else if (currentQuestion === foodieQuestion) {
    if (e.target.id === 'answer-a') {
      // category = eatOut
      category = picnic
    } else if (e.target.id === 'answer-b') {
      category = cookingClasses
    } else {
      category = alcoholTasting
    }
    displayResults(category)
  } else if (currentQuestion === notFoodieQuestion) {
    if (e.target.id === 'answer-a') {
      category = museum
    } else if (e.target.id === 'answer-b') {
      category = spa
    } else {
      category = sightseeing
    }
    displayResults(category)
  }
}

//event listeners
startButton.addEventListener('click', startTheQuiz)
answerContainerA.addEventListener('click', checkAnswer);
answerContainerB.addEventListener('click', checkAnswer);
answerContainerC.addEventListener('click', checkAnswer);


/// displays modal 
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

// Close modal
closeModal.addEventListener('click', function () {
  modal.style.display = 'none';
  document.body.style.overflow = 'visible';
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && modal.style.display !== 'none') {
    modal.style.display = 'none';
    document.body.style.overflow = 'visible';
  }
});