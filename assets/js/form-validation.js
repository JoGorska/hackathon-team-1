// helper functions

/**
 * Function to add class
 * @param {*} className
 * @param {*} targetNode
 */
 function addClass(className, targetNode) {
    targetNode.classList.add(className);
  }

  /**
   * Function to remove class
   * @param {*} className
   * @param {*} targetNode
   */

  function removeClass(className, targetNode){
    targetNode.classList.remove(className);
  }

  /**
   * Function to set attribute
   * @param {*} className
   * @param {*} targetNode
   */

  function setAttribute(attributeName, attributeValue, targetNode) {
    targetNode.setAttribute(attributeName, attributeValue);
  }

  /**
   * Function to display Error after validation has been failed
   * makes div with help message visible and in red,
   * input's border is red and red icon
   * with exclamation mark is displayed in input field
   * @param {*} targetNodeInput
   * @param {*} targetNodeHelp
   */
  function displayErrorValidation(targetNodeInput, targetNodeHelp) {
    // input nodes
    addClass("is-invalid",targetNodeInput);
    removeClass("is-valid",targetNodeInput);
    // help nodes
    setAttribute("aria-describedby", "name-help", targetNodeInput);
    removeClass("d-none", targetNodeHelp);
    addClass("invalid-feedback", targetNodeHelp);
    removeClass("valid-feedback", targetNodeHelp);
  }


  /**
   * Function to display Error after validation has been failed
   * makes div with help message visible and in red, input's border is red
   * and red icon with exclamation mark is displayed in input field
   * @param {*} targetNodeInput
   * @param {*} targetNodeHelp
   */
   function displayPassedValidation(targetNodeInput, targetNodeHelp) {
    // input nodes
    addClass("is-valid", targetNodeInput);
    removeClass("is-invalid", targetNodeInput);
    // help nodes
    setAttribute("aria-describedby", "name-help", targetNodeInput);
    removeClass("d-none", targetNodeHelp);
    addClass("valid-feedback", targetNodeHelp);
    removeClass("invalid-feedback", targetNodeHelp);
  }

/**
 * function to validate if input is NOT empty
 * @returns true or false
 */

 function isNotEmpty(inputNode, helpNode) {

  if (inputNode.value === "") {
      helpNode.innerHTML = "This field is required";
      displayErrorValidation(inputNode, helpNode);
      return(false);
  } else {
      helpNode.innerHTML = "All ok";
      displayPassedValidation(inputNode, helpNode);
      return(true); 
  }
}
/**
 * function to check if input is matching given regex
 * returns true or false
 * @param {*} inputNode - get element by ID for input 
 * @param {*} helpNode - get element by ID for help div
 * @param {*} regex - set of signs reperesenting the required pattern
 * @param {*} errorMessage string - descriptive message for the user
 */
function isMatchingRegex(inputNode, helpNode, regex, errorMessage) {
  let value = inputNode.value;
  let result = regex.test(value)
  if (result === false) {
    helpNode.innerHTML = errorMessage;
    displayErrorValidation(inputNode, helpNode);
    return(false);
  } else {
    helpNode.innerHTML = "All ok";
    displayPassedValidation(inputNode, helpNode);
    return(true);
  }
}

/**
 * function to validate if both arguments are met: regex and not empty
 */
 function validateInput (inputNode, helpNode, regex, errorMessage) {

  if (inputNode.value === "") {
    helpNode.innerHTML = "This field is required";
    displayErrorValidation(inputNode, helpNode);
    return false;
  } else if (regex.test(inputNode.value) === false) {
      helpNode.innerHTML = errorMessage;
      displayErrorValidation(inputNode, helpNode);
      return(false);
  } else {
    helpNode.innerHTML = "All ok";
    displayPassedValidation(inputNode, helpNode);
    return true
  }
}

//   variables fetching the elements from the form

const contactForm = document.getElementsByTagName("FORM")[0];

// id strings for input
const stringIdContactName = "contact-name";
const stringIdEmail = "email";
const stringIdTelephone = "telephone";
const stringIdCategory = "input-category";
const stringIdProductName = "product-name";
const stringIdDescription = "description";
const stringIdShopName = "shop-name";
const stringIdPrice = "price";
const stringIdWebsite = "website";
const stringIdImage = "image";

// input elements:
const inputContactName = document.getElementById(stringIdContactName);
const inputEmail =  document.getElementById(stringIdEmail);
const inputTelephone = document.getElementById(stringIdTelephone);
const inputCategory = document.getElementById(stringIdCategory);
const inputProductName = document.getElementById(stringIdProductName);
const inputDescription = document.getElementById(stringIdDescription);
const inputShopName = document.getElementById(stringIdShopName);
const inputPrice = document.getElementById(stringIdPrice);
const inputWebsite = document.getElementById(stringIdWebsite);
const inputImage = document.getElementById(stringIdImage);

// help divs id strings
const stringIdContactNameHelp = stringIdContactName + "-help";
const stringIdEmailHelp =  stringIdEmail + "-help";
const stringIdTelephoneHelp = stringIdTelephone + "-help";
const stringIdCategoryHelp = stringIdCategory + "-help";
const stringIdProductNameHelp = stringIdProductName + "-help";
const stringIdDescriptionHelp = stringIdDescription + "-help";
const stringIdShopNameHelp = stringIdShopName + "-help";
const stringIdPriceHelp = stringIdPrice + "-help";
const stringIdWebsiteHelp = stringIdWebsite + "-help";
const stringIdImageHelp = stringIdImage + "-help";


// help divs elements:
const helpContactName = document.getElementById(stringIdContactNameHelp);
const helpEmail =  document.getElementById(stringIdEmailHelp);
const helpTelephone = document.getElementById(stringIdTelephoneHelp);
const helpCategory = document.getElementById(stringIdCategoryHelp);
const helpProductName = document.getElementById(stringIdProductNameHelp);
const helpDescription = document.getElementById(stringIdDescriptionHelp);
const helpShopName = document.getElementById(stringIdShopNameHelp);
const helpPrice = document.getElementById(stringIdPriceHelp);
const helpWebsite = document.getElementById(stringIdWebsiteHelp);
const helpImage = document.getElementById(stringIdImageHelp);


// regexes and validation error messages for failing the regex

// regex email copied from javascripttutorial.net/javascript-dom/javascript-form-validation
// Example: name@domain.com

const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var errorMessageEmail = "Please enter a  valid email address for examle: name@domain.com"

// regex for UK phone number in any format copied from
// https://stackoverflow.com/questions/11518035/regular-expression-for-gb-based-and-only-numeric-phone-number
// Example: 01279755875
// Second Example: +441279755875

const regexTelephone = /^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|\#)\d{3,4})?$/;
var errorMessageTelephone = "Please enter a valid UK phone number (example: 01162983749)"

// regex for Price copied from:
// https://stackoverflow.com/questions/15958808/regexp-for-validating-price
// Example: 1555,555.55

const regexPrice = /^(\d*([.,](?=\d{3}))?\d+)+((?!\2)[.,]\d\d)?$/;
var errorMessagePrice = "Please enter price in american format for example 1,234.56 without the dolar sign";

// regex for URL copied from:
// https://stackoverflow.com/questions/161738/what-is-the-best-regular-expression-to-check-if-a-string-is-a-valid-url
// Example: http://www.google.com

const regexURL = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
var errorMessageURL = "Please enter a valid URL for example: http://www.google.com"

// debounce and instant feedback on input copied from the below link
//https://www.javascripttutorial.net/javascript-dom/javascript-form-validation/

/**
 * Function to delay response
 */
 const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args);
        }, delay);
    };
  };


/**
* Gives instant feedback on input with the delay set above
* some of the input fields are validated only for empty input, 
* others are validated using regex and checked if empty
*/
contactForm.addEventListener ("input", debounce(function (e) {
    switch (e.target.id) {
        case stringIdContactName:
            isNotEmpty(inputContactName, helpContactName);
            break;
        case stringIdEmail:
            validateInput(inputEmail, helpEmail, regexEmail, errorMessageEmail)
            break;
        case stringIdTelephone:
          validateInput(inputTelephone, helpTelephone, regexTelephone, errorMessageTelephone)
          break;
        case stringIdCategory:
          isNotEmpty(inputCategory, helpCategory);
          break;
        case stringIdProductName:
          isNotEmpty(inputProductName, helpProductName);
          break;
        case stringIdDescription:
          isNotEmpty(inputDescription, helpDescription);
          break;
        case stringIdShopName:
          isNotEmpty(inputShopName, helpShopName);
          break;
        case stringIdPrice:
          validateInput(inputPrice, helpPrice, regexPrice, errorMessagePrice)
          break;
        case stringIdWebsite:
          validateInput(inputWebsite, helpWebsite, regexURL, errorMessageURL)
          break; 
        case stringIdImage:
          validateInput(inputImage, helpImage, regexURL, errorMessageURL)
          break;   

    }
}));

