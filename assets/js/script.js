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

// const arts = [{
//   "category": "",
//   "name": "Arts and Crafts",
//   "description": "",
//   "websites": [
//     "https://www...",
//     "https://www..."
//   ],
//   "price": "...-...",
//   "image": "assets/images/suggestions/.../image_name_lower_snake_case.jpg"
// }];
// const gardening = [{
//   "category": "",
//   "name": "Gardening",
//   "description": "",
//   "websites": [
//     "https://www...",
//     "https://www..."
//   ],
//   "price": "...-...",
//   "image": "assets/images/suggestions/.../image_name_lower_snake_case.jpg"
// }];
// const cookery = [{
//   "category": "",
//   "name": "Cookery",
//   "description": "",
//   "websites": [
//     "https://www...",
//     "https://www..."
//   ],
//   "price": "...-...",
//   "image": "assets/images/suggestions/.../image_name_lower_snake_case.jpg"
// }]
// const tech = [{
//   "category": "",
//   "name": "Tech",
//   "description": "",
//   "websites": [
//     "https://www...",
//     "https://www..."
//   ],
//   "price": "...-...",
//   "image": "assets/images/suggestions/.../image_name_lower_snake_case.jpg"
// }]
// const animals = [{
//     "name": "butterfly",
//     "description": "These majestic creatures will definitely surprise your partner. Butterflies inspire all people and bring the beauty to the world, and that’s why it would be a perfect idea to chose them to share with your loved ones. Everyone loves butterflies flying around, especially if there flying right in your apartment!",
//     "websites": [
//       "https://www.butterflynursery.com/",
//       "https://www.amazon.com/Live-Butterflies/s?k=Live+Butterflies",
//       "https://monarchbutterflies.ca/"
//     ],
//     "price": "19-120",
//     "image": "assets/images/suggestions/animals/butterfly.jpg"
//   },
//   {
//     "name": "spider",
//     "description": "To most people, spiders are super creepy. However, there are still wonderful creatures to many people! There calm, silent, and there are only fewer species which are dangerous to humans! If you want to really surprise your partner, go for spiders!",
//     "websites": [
//       "https://www.evolutionreptiles.co.uk/animals/spiders/",
//       "https://www.joshsfrogs.com/live-insects-feeders/spiders.html",
//       "https://www.backwaterreptiles.com/tarantulas-for-sale.html"
//     ],
//     "price": "32-150",
//     "image": "assets/images/suggestions/animals/spider.jpg"
//   },
//   {
//     "name": "cockatoo parrot",
//     "description": "If your half really loves to talk, this bird will be an amazing gift in this case! Cockatoo parrots are highly sociable and just have to be around people. Cockatoos are often described as intelligent and emotional birds and many describe life with a cockatoo as living with a perpetual 2-year-old child, capable of temper tantrums as well as complete silliness.",
//     "websites": [
//       "https://megabirdstore.com/bird/buy-cockatoo/",
//       "https://caliparrotsforsale.com/product-category/cockatoo-parrots/",
//       "https://www.birdbreeders.com/birds/category/cockatoos"
//     ],
//     "price": "700-6000",
//     "image": "assets/images/suggestions/animals/parrot.jpg"
//   },
//   {
//     "name": "snake",
//     "description": "Would you like to make a gift really memorable in this Valentine’s Day? Purchasing a snake may really help you. First of all, it is unusual and beautiful!.And don’t forget that snakes are eary to handle and are they are not aggressive! And if you partner doesn’t like to care about about feeding an animal every now and then, a snake can be a great choice! They may not eat for wiiks to month! If you want to learn more: https://vcahospitals.com/know-your-pet/snakes-owning",
//     "websites": [
//       "https://www.backwaterreptiles.com/snakes/snakes-for-sale.html",
//       "https://www.xyzreptiles.com/reptiles/animals/snakes-for-sale/"
//     ],
//     "price": "40-500",
//     "image": "assets/images/suggestions/animals/snake.jpg"
//   },
//   {
//     "name": "hedgehog",
//     "description": "Hedgehog is a cute pocket pet, which will definitely bring lots of joy to your partner! Moreover, hedgehogs are easy to take care of, ",
//     "websites": [
//       "https://www.exoticanimalsforsale.net/hedgehogs-for-sale.asp",
//       "https://www.dragonstoneranch.com/hedgehogs"
//     ],
//     "price": "50-600",
//     "image": "assets/images/suggestions/animals/hedgehog.jpg"
//   },
// ]

// const games = [{
//   "category": "",
//   "name": "Games",
//   "description": "",
//   "websites": [
//     "https://www...",
//     "https://www..."
//   ],
//   "price": "...-...",
//   "image": "assets/images/suggestions/.../image_name_lower_snake_case.jpg"
// }]

// const individualSports = [{
//   "category": "",
//   "name": "Individual Sports",
//   "description": "",
//   "websites": [
//     "https://www...",
//     "https://www..."
//   ],
//   "price": "...-...",
//   "image": "assets/images/suggestions/.../image_name_lower_snake_case.jpg"
// }]

// const teamSports = [{
//   "category": "",
//   "name": "Team Sports",
//   "description": "",
//   "websites": [
//     "https://www...",
//     "https://www..."
//   ],
//   "price": "...-...",
//   "image": "assets/images/suggestions/.../image_name_lower_snake_case.jpg"
// }]

// const travel = [{
//   "category": "",
//   "name": "Travel",
//   "description": "",
//   "websites": [
//     "https://www...",
//     "https://www..."
//   ],
//   "price": "...-...",
//   "image": "assets/images/suggestions/.../image_name_lower_snake_case.jpg"
// }]

// const sportsEvent = [{
//   "category": "",
//   "name": "Sports Event",
//   "description": "",
//   "websites": [
//     "https://www...",
//     "https://www..."
//   ],
//   "price": "...-...",
//   "image": "assets/images/suggestions/.../image_name_lower_snake_case.jpg"
// }]
// const themePark = [{
//   "category": "",
//   "name": "Theme Park",
//   "description": "",
//   "websites": [
//     "https://www...",
//     "https://www..."
//   ],
//   "price": "...-...",
//   "image": "assets/images/suggestions/.../image_name_lower_snake_case.jpg"
// }]
// const ride = [{
//   "category": "",
//   "name": "Rides",
//   "description": "",
//   "websites": [
//     "https://www...",
//     "https://www..."
//   ],
//   "price": "...-...",
//   "image": "assets/images/suggestions/.../image_name_lower_snake_case.jpg"
// }]
// const eatOut = [{
//   "category": "",
//   "name": "Eat Out",
//   "description": "",
//   "websites": [
//     "https://www...",
//     "https://www..."
//   ],
//   "price": "...-...",
//   "image": "assets/images/suggestions/.../image_name_lower_snake_case.jpg"
// }]
// const cook = [{
//   "category": "",
//   "name": "cook",
//   "description": "",
//   "websites": [
//     "https://www...",
//     "https://www..."
//   ],
//   "price": "...-...",
//   "image": "assets/images/suggestions/.../image_name_lower_snake_case.jpg"
// }]

// const tasting = [{
//   "category": "",
//   "name": "tasting",
//   "description": "",
//   "websites": [
//     "https://www...",
//     "https://www..."
//   ],
//   "price": "...-...",
//   "image": "assets/images/suggestions/.../image_name_lower_snake_case.jpg"
// }]

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