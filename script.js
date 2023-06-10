// VARIABLES
const aboutFlashycards = document.getElementById("aboutFlashycards");
let flashyCategories = document.getElementsByClassName("setCategories");
const setOverviewContainer = document.getElementById("setOverviewContainer");
const setOverview = document.getElementById("setOverview");
const nextWordsButton = document.getElementById("nextWordsButton");
const previousWordsButton = document.getElementById("previousWordsButton");
const flashcard = document.getElementById("flashcard");
const createNewSetContainer = document.getElementById("createNewSetContainer");
const newSetStart = document.getElementById("newSetStart");
const newSetForm = document.getElementById("newSetForm");
const setWordsContainer = document.getElementById("setWordsContainer");
const nextFieldsButton = document.getElementById("nextFieldsButton");
const previousFieldsButton = document.getElementById("previousFieldsButton");
const moreFieldsButton = document.getElementById("moreFieldsButton");
let practiceWord = document.getElementById("word");
let practiceTranslation = document.getElementById("translation");
const nextDuos = document.getElementById("nextWordsButton");
const previousDuos = document.getElementById("previousWordsButton");
let setName = document.getElementById("newSetName");
let setNameError = document.getElementById("setNameError");
let incompleteDuosError = document.getElementById("incompleteDuosError");
let savedSets = document.getElementById("savedSets");
let amountOfSavedSets = 0;
let language = "spanish";
let practiceWordsArray = [],
  practiceTranslationsArray = [];
let practiceDuoIndex, duoContainerNumber, setDuoIndex, visibleSets;
let hint, translation;
let unsavedInputFields, amountOfPreviousDuos, emptyForm;
let storedDuos = [];
let uniqueStoredDuos = [];
let mySavedSets = [];
let hasSetName = false;
let incompleteDuos;
let savedSetIndex;

// LEFT SIDEBAR
function showSets() {
  for (let x = 1; x <= flashyCategories.length; x++)
    // get clicked h4 element
    if (event.target.matches(`#category_${x}_es`)) {
      // get sets belonging to category
      visibleSets = document.getElementsByClassName(`cat_${x}`);
      for (let i = 0; i < visibleSets.length; i++) {
        if (visibleSets[i].classList.contains("invisible")) {
          // open category sets
          visibleSets[i].classList.remove("invisible");
        } else {
          // close category sets
          visibleSets[i].classList.add("invisible");
        }
      }
    }
}

function openSetOverview() {
  // close other windows
  aboutFlashycards.classList.add("invisible");
  createNewSetContainer.classList.add("invisible");
  closePractice();
  // clear previous category set
  clearPreviousSet();
  // set the chosen category
  let category = event.target.innerText.toLowerCase();
  loadCategorySet(category);
  // open set overview
  showSetOverview();
}

function loadCategorySet(category) {
  fetch(`flashySets/${language}/${category}.json`)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      // create container for 8 word/translation duos
      duoContainerNumber = 1;
      let setDuoContainer = document.createElement("div");
      setDuoContainer.id = `duoContainer_${duoContainerNumber}`;
      setDuoContainer.classList.add("setDuoContainer");
      setOverview.appendChild(setDuoContainer);
      let currentContainer = document.getElementById(
        `duoContainer_${duoContainerNumber}`
      );
      // create element for each word / translation duo
      data.forEach(function (duo) {
        let wordTranslationDuo = document.createElement("div");
        wordTranslationDuo.classList.add("duo");
        wordTranslationDuo.innerHTML = `<div class="setWord">${duo.word}</div><div class="setTranslation">${duo.translation}</div></div>`;
        // append duo element to duo container
        if (currentContainer.childElementCount < 8) {
          currentContainer.appendChild(wordTranslationDuo);
          // if more than 8, create new container and append
        } else {
          // increase container number
          duoContainerNumber++;
          // create new container
          let newSetDuoContainer = document.createElement("div");
          newSetDuoContainer.id = `duoContainer_${duoContainerNumber}`;
          newSetDuoContainer.classList.add("setDuoContainer");
          // add invisible class for extra containers
          if (duoContainerNumber > 2) {
            newSetDuoContainer.classList.add("invisible");
            nextDuos.classList.remove("invisible");
          }
          // append to overview element
          setOverview.appendChild(newSetDuoContainer);
          // select new container
          currentContainer = document.getElementById(
            `duoContainer_${duoContainerNumber}`
          );
          currentContainer.appendChild(wordTranslationDuo);
        }
        setDuoIndex = 0;
      });
    });
}

function clearPreviousSet() {
  setOverview.innerHTML = "<h3>Set overview</h3>";
  nextDuos.classList.add("invisible");
  previousDuos.classList.add("invisible");
  duoContainerNumber = 0;
  setDuoIndex = 0;
}

function showSetOverview() {
  if (duoContainerNumber > 2) {
    nextDuos.classList.remove("invisible");
  }
  setOverviewContainer.classList.remove("invisible");
}

// SET OVERVIEW
function showPreviousWords() {
  let duoContainerCollection =
    document.getElementsByClassName("setDuoContainer");
  // hide current set duos
  if (setDuoIndex == duoContainerNumber - 1 && setDuoIndex % 2 == 0) {
    duoContainerCollection[setDuoIndex].classList.add("invisible");
    setDuoIndex--;
  } else {
    duoContainerCollection[setDuoIndex].classList.add("invisible");
    setDuoIndex++;
    duoContainerCollection[setDuoIndex].classList.add("invisible");
    setDuoIndex--;
    setDuoIndex--;
  }
  // show previous set duos
  duoContainerCollection[setDuoIndex].classList.remove("invisible");
  setDuoIndex--;
  duoContainerCollection[setDuoIndex].classList.remove("invisible");
  // hide previous button if at first set duos
  if (setDuoIndex == 0) {
    previousDuos.classList.add("invisible");
  }
  // show next button
  nextDuos.classList.remove("invisible");
}

function showNextWords() {
  let duoContainerCollection =
    document.getElementsByClassName("setDuoContainer");
  // add invisble class to current 2 word containers
  duoContainerCollection[setDuoIndex].classList.add("invisible");
  setDuoIndex++;
  duoContainerCollection[setDuoIndex].classList.add("invisible");
  setDuoIndex++;
  // show next word containers
  if (setDuoIndex == duoContainerNumber - 1) {
    duoContainerCollection[setDuoIndex].classList.remove("invisible");
  } else {
    duoContainerCollection[setDuoIndex].classList.remove("invisible");
    setDuoIndex++;
    duoContainerCollection[setDuoIndex].classList.remove("invisible");
  }
  // hide next button or decrease index
  if (setDuoIndex == duoContainerNumber - 1) {
    nextDuos.classList.add("invisible");
  } else {
    setDuoIndex--;
  }
  previousDuos.classList.remove("invisible");
}

function startPractice() {
  setOverviewContainer.classList.add("invisible");
  flashcard.classList.remove("invisible");
  fillFlashcardPracticeArrays();
  loadFlashCardWords();
}

// RIGHT SIDEBAR
function openNewSetCreator() {
  // close other screens
  aboutFlashycards.classList.add("invisible");
  setOverviewContainer.classList.add("invisible");
  flashcard.classList.add("invisible");
  newSetForm.classList.add("invisible");
  // open create screen
  createNewSetContainer.classList.remove("invisible");
  newSetStart.classList.remove("invisible");
}

// CREATE OWN SET

//Screen
function startCreatingSet() {
  // close set start screen
  newSetStart.classList.add("invisible");
  // open the container
  newSetForm.classList.remove("invisible");
  // display correct buttons
  previousFieldsButton.classList.add("invisible");
  nextFieldsButton.classList.add("invisible");
  moreFieldsButton.classList.remove("invisible");
  // create input fields
  loadInputFields();
  // delete previous data
  emptyInputFields();
  emptySetName();
  hideSetNameError();
  hideIncompleteDuosError();
  
  // initialize variables
  amountOfPreviousDuos = 0;
  unsavedInputFields = 1;
}

function returnToCreateSetStart() {
  newSetForm.classList.add("invisible");
  newSetStart.classList.remove("invisible");
}

//Input fields
function loadInputFields() {
  let hasDuos = document.getElementsByClassName("newDuo");
  if (hasDuos.length == 0) {
    for (let i = 1; i < 11; i++) {
      let newDuo = document.createElement("div");
      newDuo.setAttribute("id", `newDuo_${i}`);
      newDuo.setAttribute("class", "newDuo");
      newDuo.innerHTML = `<input class="newWord" id="newWord_${i}" type="text" oninput="storeValue()" /><input class="newTranslation" id="newTranslation_${i}" type="text" oninput="storeValue()" />`;
      setWordsContainer.appendChild(newDuo);
    }
  }
}

function emptyInputFields() {
  for (let i = 1; i < 11; i++) {
    document.getElementById(`newWord_${i}`).value = "";
    document.getElementById(`newTranslation_${i}`).value = "";
  }
}

function checkForEmptyForm() {
  let i = 0;
  do {
    i++;
  } while (
    i <= 10 &&
    document.getElementById(`newWord_${i}`).value == "" &&
    document.getElementById(`newTranslation_${i}`).value == ""
  );

  if (i == 11) {
    emptyForm = true;
  } else {
    emptyForm = false;
  }
}

function storeValue() {
  let field = event.target;
  let input = event.target.value;
  field.setAttribute("value", input);
}

//Data storage
function storeCurrentData() {
  if (unsavedInputFields == 1) {
    for (let i = 1; i < 11; i++) {
      let duoObj = {
        wordValue: document.getElementById(`newWord_${i}`).value,
        wordTranslation: document.getElementById(`newTranslation_${i}`).value,
      };
      storedDuos.push(duoObj);
      amountOfPreviousDuos++;
    }
  }
}

function updateCurrentData() {
  let duoIndex = amountOfPreviousDuos;
  for (let i = 1; i < 11; i++) {
    storedDuos[duoIndex] = {
      wordValue: document.getElementById(`newWord_${i}`).value,
      wordTranslation: document.getElementById(`newTranslation_${i}`).value,
    };
    duoIndex++;
  }
}

//Buttons
function moreInputFields() {
  // update data if triggered from previous input
  if (unsavedInputFields == 0) {
    updateCurrentData();
    emptyInputFields();
    amountOfPreviousDuos += 10;
    unsavedInputFields = 1;
    previousFieldsButton.classList.remove("invisible");
  }

  // store current data if new input and not completely empty
  if (unsavedInputFields == 1) {
    checkForEmptyForm();
    if (!emptyForm) {
      storeCurrentData();
      emptyInputFields();
      previousFieldsButton.classList.remove("invisible");
    }
  }
}

function showPreviousData() {
  //update array with changes to already existing data
  if (unsavedInputFields == 0) {
    updateCurrentData();
  }

  // store current data if coming from first input
  if (unsavedInputFields == 1) {
    checkForEmptyForm();
    if (!emptyForm) {
      storeCurrentData();
      amountOfPreviousDuos -= 10;
    }
    unsavedInputFields = 0;
  }

  emptyInputFields();

  // display previous duos in input fields
  for (let i = 10; i > 0; i--) {
    document.getElementById(`newWord_${i}`).value =
      storedDuos[amountOfPreviousDuos - 1].wordValue;
    document.getElementById(`newTranslation_${i}`).value =
      storedDuos[amountOfPreviousDuos - 1].wordTranslation;
    amountOfPreviousDuos--;
  }

  //buttons
  if (amountOfPreviousDuos == 0) {
    previousFieldsButton.classList.add("invisible");
  }
  if (!(storedDuos.length == amountOfPreviousDuos + 10)) {
    moreFieldsButton.classList.add("invisible");
    nextFieldsButton.classList.remove("invisible");
  }
}

function showNextData() {
  //update array with changes to data
  updateCurrentData();

  //add the currently displayed duos to the previous duos
  amountOfPreviousDuos += 10;
  emptyInputFields();

  // display next duos in input fields
  for (let i = 1; i < 11; i++) {
    document.getElementById(`newWord_${i}`).value =
      storedDuos[amountOfPreviousDuos].wordValue;
    document.getElementById(`newTranslation_${i}`).value =
      storedDuos[amountOfPreviousDuos].wordTranslation;
    amountOfPreviousDuos++;
  }

  //buttons
  if (amountOfPreviousDuos == storedDuos.length) {
    nextFieldsButton.classList.add("invisible");
    moreFieldsButton.classList.remove("invisible");
  }
  previousFieldsButton.classList.remove("invisible");

  // return to first data object of currently displayed input
  amountOfPreviousDuos -= 10;
}

//Set name
function checkForSetName() {
  if (setName.value == "") {
    hasSetName = false;
  } else {
    hasSetName = true;
  }
}

function emptySetName() {
  setName.value = "";
}

function displaySetNameError() {
  setNameError.classList.remove("invisible");
}

function hideSetNameError() {
  setNameError.classList.add("invisible");
}

//Incomplete duos check
function checkForIncompleteDuos() {
  for (i = 0; i < storedDuos.length - 1; i++) {
    if (storedDuos[i].wordValue == "" && !storedDuos[i].wordTranslation == "") {
      incompleteDuos = true;
    } else if (storedDuos[i].wordTranslation == "" && !storedDuos[i].wordValue == "") {
      incompleteDuos = true;
    }
  }
}

function displayIncompleteDuosError() {
  incompleteDuosError.classList.remove("invisible");
}

function hideIncompleteDuosError() {
  incompleteDuosError.classList.add("invisible");
}

function acceptIncompleteDuosError() {
  incompleteDuosError.classList.add("invisible");
  removeIncompleteDuos();
  createNewSet();
}

function declineIncompleteDuosError() {
  incompleteDuosError.classList.add("invisible");
  incompleteDuos = undefined;
}

function removeIncompleteDuos() {
  for (i = 0; i < storedDuos.length - 1; i++) {
    if (storedDuos[i].wordValue == "") {
      storedDuos.splice(i, 1);
      i--;
    } else if (storedDuos[i].wordTranslation == "") {
      storedDuos.splice(i, 1);
      i--;
    } 
  }
  incompleteDuos = false;
  unsavedInputFields = undefined;
}

//Input validation
function removeEmptyInput() {
  console.log(storedDuos, storedDuos.length);
  for (i = 0; i < storedDuos.length - 1; i++) {
    console.log(storedDuos[i]);
    if (storedDuos[i].wordValue == "" && storedDuos[i].wordTranslation == "") {
      storedDuos.splice(i, 1);
      i--;
      console.log("splice", i);
      console.log(storedDuos, storedDuos.length);
    }
  }
}

function filterDuplicateDuos() {
  uniqueStoredDuos = storedDuos.reduce(function (total, currentValue) {
    if (
      !total.some(function (el) {
        return (
          el.wordValue === currentValue.wordValue &&
          el.wordTranslation === currentValue.wordTranslation
        );
      })
    )
      total.push(currentValue);
    return total;
  }, []);
}

//Create set
function createNewSet() {
  // save or update current data
  if (unsavedInputFields == 1) {
    storeCurrentData();
    unsavedInputFields = 0;
    // return to 0 in case of a setname/incompletes error
    amountOfPreviousDuos -=10;
  } else if (unsavedInputFields == 0) {
    updateCurrentData();
  }

  // check if set has a name
  checkForSetName();
  if (hasSetName) {
    // check if duos are complete
    hideSetNameError();
    checkForIncompleteDuos();
    if (incompleteDuos) {
      displayIncompleteDuosError();
    } else {
      // filter set and store set
      removeEmptyInput();
      filterDuplicateDuos();
      storeSetInMySetsArray();
      addLinkToSavedSets();
      // clear screen + initial array
      returnToCreateSetStart();
      clearStoredDuosArrays();
    }
  } else {
    displaySetNameError();
  }
}

//Reset arrays
function clearStoredDuosArrays() {
storedDuos = [];
uniqueStoredDuos = [];
}

//Add to Saved Sets
function storeSetInMySetsArray() {
  mySavedSets.push(uniqueStoredDuos);
}

function addLinkToSavedSets() {
  // create element
  let newSavedSet = document.createElement("li");
  // set attributes
  newSavedSet.setAttribute("id", `savedSet${amountOfSavedSets}`);
  newSavedSet.setAttribute("class", "savedSet");
  newSavedSet.setAttribute("onclick", "openMySetOverview()");
  // add set name
  newSavedSet.innerText = setName.value;
  // append to sidebar
  savedSets.appendChild(newSavedSet);
  // increase amount
  amountOfSavedSets++;
}

// SAVED SETS (MY SETS)

function retrieveCorrectSetIndex() {
  for (let x = 0; x < mySavedSets.length; x++)
  // find clicked saved set
  if (event.target.matches(`#savedSet${x}`)) {
    // assign index variable
    savedSetIndex = x;
}
}

function openSavedSet() {
  // find set index
  retrieveCorrectSetIndex();
  let setArray = mySavedSets[savedSetIndex];
  // create container for 8 word/translation duos
  duoContainerNumber = 1;
  let setDuoContainer = document.createElement("div");
  setDuoContainer.id = `duoContainer_${duoContainerNumber}`;
  setDuoContainer.classList.add("setDuoContainer");
  setOverview.appendChild(setDuoContainer);
  let currentContainer = document.getElementById(
    `duoContainer_${duoContainerNumber}`
  );

  // create element for each word / translation duo
  for (let i = 0; i < setArray.length; i++) {
    let wordTranslationDuo = document.createElement("div");
    wordTranslationDuo.classList.add("duo");
    wordTranslationDuo.innerHTML = `<div class="setWord">${setArray[i].wordValue}</div><div class="setTranslation">${setArray[i].wordTranslation}</div></div>`;

    // append duo element to duo container
    if (currentContainer.childElementCount < 8) {
      currentContainer.appendChild(wordTranslationDuo);
      // if more than 8, create new container and append
    } else {
      // create new container
      duoContainerNumber++;
      let newSetDuoContainer = document.createElement("div");
      newSetDuoContainer.id = `duoContainer_${duoContainerNumber}`;
      newSetDuoContainer.classList.add("setDuoContainer");
      // add invisible class for extra containers
      if (duoContainerNumber > 2) {
        newSetDuoContainer.classList.add("invisible");
        nextDuos.classList.remove("invisible");
      }

      // append to overview element
      setOverview.appendChild(newSetDuoContainer);
      // select new container
      currentContainer = document.getElementById(
        `duoContainer_${duoContainerNumber}`
      );
      currentContainer.appendChild(wordTranslationDuo);
    }
  }
  setDuoIndex = 0;
}

function openMySetOverview() {
  // close other windows
  aboutFlashycards.classList.add("invisible");
  createNewSetContainer.classList.add("invisible");
  closePractice();
  // clear previous category set
  clearPreviousSet();
  // set the chosen category
  openSavedSet();
  // open set overview
  showSetOverview();
}

// CARDS
function fillFlashcardPracticeArrays() {
  practiceWordsArray = [];
  practiceTranslationsArray = [];
  practiceWordsArray = document.getElementsByClassName("setWord");
  practiceTranslationsArray = document.getElementsByClassName("setTranslation");
  practiceDuoIndex = 0;
}

function loadFlashCardWords() {
  practiceTranslation.innerText = "";
  practiceWord.innerText = practiceWordsArray[practiceDuoIndex].innerText;
  hint = practiceTranslationsArray[practiceDuoIndex].innerText.slice(0, 1);
  translation =
    practiceTranslationsArray[practiceDuoIndex].innerText.substring(1);
  practiceDuoIndex++;
}

function showHint() {
  practiceTranslation.innerText = hint;
}

function showTranslation() {
  practiceTranslation.innerText = hint + translation;
}

function showNextButton() {
  let nextButton = document.getElementById("nextButton");
  nextButton.classList.remove("invisible");
}

function hideNextButton() {
  let nextButton = document.getElementById("nextButton");
  nextButton.classList.add("invisible");
}

function showRestartButton() {
  let restartButton = document.getElementById("restartButton");
  restartButton.classList.remove("invisible");
}

function hideRestartButton() {
  let restartButton = document.getElementById("restartButton");
  restartButton.classList.add("invisible");
}

function revealTranslation() {
  showTranslation();
  if (practiceDuoIndex == practiceWordsArray.length) {
    showRestartButton();
  } else {
    showNextButton();
  }
}

function nextPracticeWord() {
  hideNextButton();
  loadFlashCardWords();
}

function reStartPractice() {
  practiceDuoIndex = 0;
  hideRestartButton();
  loadFlashCardWords();
}

function closePractice() {
  hideNextButton();
  hideRestartButton();
  flashcard.classList.add("invisible");
  practiceDuoIndex = 0;
}

// FOOTER
function showAboutFlashy() {
  aboutFlashycards.classList.remove("invisible");
  setOverviewContainer.classList.add("invisible");
  flashcard.classList.add("invisible");
  createNewSetContainer.classList.add("invisible");
}
