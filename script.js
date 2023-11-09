// VARIABLES
//general
const aboutFlashycards = document.getElementById("aboutFlashycards");
let flashyCategories = document.getElementsByClassName("setCategories");
let flashySets = document.getElementsByClassName("flashySet");
let footerLink = document.getElementById("footerFirst");
let language = "spanish";
//set overview / edit set
const setOverviewContainer = document.getElementById("setOverviewContainer");
const setOverview = document.getElementById("setOverview");
const nextDuosButton = document.getElementById("nextDuosButton");
const previousDuosButton = document.getElementById("previousDuosButton");
const startPracticeButton = document.getElementById("startPractice");
const editSetButton = document.getElementById("editSetButton");
//flashcard
const flashcard = document.getElementById("flashcard");
const hintButton = document.getElementById("hintButton");
const revealButton = document.getElementById("revealButton");
const nextButton = document.getElementById("nextButton");
const restartButton = document.getElementById("restartButton");
let practiceWord = document.getElementById("word");
let practiceTranslation = document.getElementById("translation");
let hint, translation;
let practiceDuoIndex, duoContainerNumber, setDuoIndex, visibleSets;
let practiceWordsArray = [],
  practiceTranslationsArray = [];
//create new set
const createSetLink = document.getElementById("createNewSet");
const createSetButton = document.getElementById("createSetButton");
const createNewSetContainer = document.getElementById("createNewSetContainer");
const newSetStart = document.getElementById("newSetStart");
const startCreatingButton = document.getElementById("startCreating");
const newSetForm = document.getElementById("newSetForm");
const setWordsContainer = document.getElementById("setWordsContainer");
const nextFieldsButton = document.getElementById("nextFieldsButton");
const previousFieldsButton = document.getElementById("previousFieldsButton");
const moreFieldsButton = document.getElementById("moreFieldsButton");
const declineInvalidErrorButton = document.getElementById(
  "declineInvalidError"
);
const acceptInvalidErrorButton = document.getElementById("acceptInvalidError");
let setName = document.getElementById("newSetName");
let setNameError = document.getElementById("setNameError");
let invalidDuosError = document.getElementById("invalidDuosError");
let storedDuos = [];
let uniqueStoredDuos = [];
let hasSetName = false;
let unsavedInputFields, amountOfpreviousDuosButton, emptyForm;
let incompleteDuos, duplicateDuos, duplicateAccepted, emptySet;
//saved sets
const editSavedSetButton = document.getElementById("editSavedSetButton");
let savedSets = document.getElementById("savedSets");
let mySavedSets = [];
let amountOfSavedSets = 0;
let savedSetIndex;
let currentSavedSet;

// EVENT LISTENERS
//menu
function categoryEventListeners() {
  for (x = 0; x < flashyCategories.length; x++) {
    flashyCategories[x].addEventListener("click", showSets);
  }
}
categoryEventListeners();

function flashySetsEventListeners() {
  for (x = 0; x < flashySets.length; x++) {
    flashySets[x].addEventListener("click", openSetOverview);
  }
}
flashySetsEventListeners();

//set overview
previousDuosButton.addEventListener("click", showPreviousWords);
nextDuosButton.addEventListener("click", showNextWords);
editSetButton.addEventListener("click", editSet);
startPracticeButton.addEventListener("click", startPractice);

//flashcard
hintButton.addEventListener("click", showHint);
revealButton.addEventListener("click", revealTranslation);
nextButton.addEventListener("click", nextPracticeWord);
restartButton.addEventListener("click", reStartPractice);

//create set
startCreatingButton.addEventListener("click", startCreatingSet);
setName.addEventListener("input", storeValue);
previousFieldsButton.addEventListener("click", showPreviousData);
nextFieldsButton.addEventListener("click", showNextData);
moreFieldsButton.addEventListener("click", moreInputFields);
createSetButton.addEventListener("click", createNewSet);
editSavedSetButton.addEventListener("click", editSavedSet);
createSetLink.addEventListener("click", openNewSetCreator);
//error message
declineInvalidErrorButton.addEventListener("click", declineInvalidDuosError);
acceptInvalidErrorButton.addEventListener("click", acceptInvalidDuosError);

//footer
footerLink.addEventListener("click", showAboutFlashy);

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
  // reset variables
  if (currentSavedSet) {
    savedSetIndex = undefined;
    currentSavedSet = undefined;
    editSetArray = undefined;
    storedDuos = [];
  }
  closePractice();
  // clear previous category set
  clearPreviousSet();
  // set the chosen category
  let category = event.target.innerText.toLowerCase();
  loadCategorySet(category);
  // open set overview
  showSetOverview();
  // buttons
  showFlashySetButtons();
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
            nextDuosButton.classList.remove("invisible");
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
  nextDuosButton.classList.add("invisible");
  previousDuosButton.classList.add("invisible");
  duoContainerNumber = 0;
  setDuoIndex = 0;
}

function showSetOverview() {
  if (duoContainerNumber > 2) {
    nextDuosButton.classList.remove("invisible");
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
    previousDuosButton.classList.add("invisible");
  }
  // show next button
  nextDuosButton.classList.remove("invisible");
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
    nextDuosButton.classList.add("invisible");
  } else {
    setDuoIndex--;
  }
  previousDuosButton.classList.remove("invisible");
}

function startPractice() {
  setOverviewContainer.classList.add("invisible");
  flashcard.classList.remove("invisible");
  fillFlashcardPracticeArrays();
  loadFlashCardWords();
}

function showFlashySetButtons() {
  startPracticeButton.classList.remove("savedSetOverview");
  editSavedSetButton.classList.add("invisible");
}

function showSavedSetButtons() {
  startPracticeButton.classList.add("savedSetOverview");
  editSavedSetButton.classList.remove("invisible");
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
  // reset variables
  if (currentSavedSet) {
    savedSetIndex = undefined;
    currentSavedSet = undefined;
    editSetArray = undefined;
    storedDuos = [];
  }
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
  hideInvalidDuosError();

  // initialize variables
  amountOfpreviousDuosButton = 0;
  unsavedInputFields = 1;

  // buttons
  showCreateButton();
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
      newDuo.innerHTML = `<input class="newWord" id="newWord_${i}" type="text" /><input class="newTranslation" id="newTranslation_${i}" type="text" />`;
      newDuo.addEventListener("input", storeValue);
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

function fillInputFields() {
  for (let i = 1; i < storedDuos.length + 1; i++) {
    document.getElementById(`newWord_${i}`).value = storedDuos[i - 1].wordValue;
    document.getElementById(`newTranslation_${i}`).value =
      storedDuos[i - 1].wordTranslation;
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
      amountOfpreviousDuosButton++;
    }
  }
}

function updateCurrentData() {
  let duoIndex = amountOfpreviousDuosButton;
  for (let i = 1; i < 11; i++) {
    storedDuos[duoIndex] = {
      wordValue: document.getElementById(`newWord_${i}`).value,
      wordTranslation: document.getElementById(`newTranslation_${i}`).value,
    };
    duoIndex++;
  }
}

//Buttons
function showCreateButton() {
  createSetButton.classList.remove("invisible");
  editSetButton.classList.add("invisible");
}

function moreInputFields() {
  // update data if triggered from previous input
  if (unsavedInputFields == 0) {
    updateCurrentData();
    emptyInputFields();
    amountOfpreviousDuosButton += 10;
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
      amountOfpreviousDuosButton -= 10;
    }
    unsavedInputFields = 0;
  }

  emptyInputFields();

  // display previous duos in input fields
  for (let i = 10; i > 0; i--) {
    document.getElementById(`newWord_${i}`).value =
      storedDuos[amountOfpreviousDuosButton - 1].wordValue;
    document.getElementById(`newTranslation_${i}`).value =
      storedDuos[amountOfpreviousDuosButton - 1].wordTranslation;
    amountOfpreviousDuosButton--;
  }

  //buttons
  if (amountOfpreviousDuosButton == 0) {
    previousFieldsButton.classList.add("invisible");
  }
  if (!(storedDuos.length == amountOfpreviousDuosButton + 10)) {
    moreFieldsButton.classList.add("invisible");
    nextFieldsButton.classList.remove("invisible");
  }
}

function showNextData() {
  //update array with changes to data
  updateCurrentData();

  //add the currently displayed duos to the previous duos
  amountOfpreviousDuosButton += 10;
  emptyInputFields();

  // display next duos in input fields
  for (let i = 1; i < 11; i++) {
    document.getElementById(`newWord_${i}`).value =
      storedDuos[amountOfpreviousDuosButton].wordValue;
    document.getElementById(`newTranslation_${i}`).value =
      storedDuos[amountOfpreviousDuosButton].wordTranslation;
    amountOfpreviousDuosButton++;
  }

  //buttons
  if (amountOfpreviousDuosButton == storedDuos.length) {
    nextFieldsButton.classList.add("invisible");
    moreFieldsButton.classList.remove("invisible");
  }
  previousFieldsButton.classList.remove("invisible");

  // return to first data object of currently displayed input
  amountOfpreviousDuosButton -= 10;
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

//Invalid duos check
function checkForIncompleteDuos() {
  for (i = 0; i < storedDuos.length - 1; i++) {
    if (storedDuos[i].wordValue == "" && !storedDuos[i].wordTranslation == "") {
      incompleteDuos = true;
    } else if (
      storedDuos[i].wordTranslation == "" &&
      !storedDuos[i].wordValue == ""
    ) {
      incompleteDuos = true;
    }
  }
}

function checkForDuplicateDuos() {
  if (!duplicateAccepted) {
    for (i = 0; i < storedDuos.length - 1; i++) {
      for (let x = 0; x < storedDuos.length - 1; x++) {
        if (x === i) {
          x++;
        }
        if (
          !storedDuos[i].wordValue == "" &&
          !storedDuos[i].wordTranslation == ""
        ) {
          if (
            storedDuos[i].wordValue === storedDuos[x].wordValue &&
            storedDuos[i].wordTranslation === storedDuos[x].wordTranslation
          ) {
            duplicateDuos = true;
          }
        }
      }
    }
  }
}

function displayInvalidDuosError() {
  invalidDuosError.classList.remove("invisible");
}

function hideInvalidDuosError() {
  invalidDuosError.classList.add("invisible");
}

function acceptInvalidDuosError() {
  hideInvalidDuosError();
  removeIncompleteDuos();
  duplicateAccepted = true;
  duplicateDuos = false;
  createNewSet();
}

function declineInvalidDuosError() {
  hideInvalidDuosError();
  incompleteDuos = undefined;
  duplicateDuos = undefined;
  duplicateAccepted = false;
}

function removeIncompleteDuos() {
  for (i = 0; i < storedDuos.length; i++) {
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
  for (i = 0; i < storedDuos.length; i++) {
    if (storedDuos[i].wordValue == "" && storedDuos[i].wordTranslation == "") {
      storedDuos.splice(i, 1);
      i--;
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
  duplicateAccepted = undefined;
  duplicateDuos = undefined;

  //check for empty set
  if (uniqueStoredDuos.length === 0) {
    emptySet = true;
  }
}

//Create set
function createNewSet() {
  // save or update current data
  if (unsavedInputFields == 1) {
    storeCurrentData();
    unsavedInputFields = 0;
    // return to 0 in case of a setname/incompletes error
    amountOfpreviousDuosButton -= 10;
  } else if (unsavedInputFields == 0) {
    updateCurrentData();
  }

  // check if set has a name
  checkForSetName();
  if (hasSetName) {
    // check if duos are incomplete or duplicate
    hideSetNameError();
    checkForIncompleteDuos();
    checkForDuplicateDuos();
    if (incompleteDuos || duplicateDuos) {
      displayInvalidDuosError();
    } else {
      // filter set
      removeEmptyInput();
      filterDuplicateDuos();
      //store set if not empty
      if (!emptySet) {
        if (currentSavedSet) {
          savedSetIndex = undefined;
          currentSavedSet = undefined;
          editSetArray = undefined;
        } else {
          storeSetInMySetsArray();
          addLinkToSavedSets();
        }
      }
      // clear screen + initial values
      returnToCreateSetStart();
      clearStoredDuosArrays();
      emptySet = undefined;
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
  newSavedSet.addEventListener("click", openMySetOverview);
  // add set name
  newSavedSet.innerText = setName.value;
  // append to sidebar
  savedSets.appendChild(newSavedSet);
  // increase amount
  amountOfSavedSets++;
}

function updateSavedSetLink() {
  // locate current element
  let currentSetLink = document.getElementById(`savedSet${savedSetIndex}`);
  currentSetLink.innerText = setName.value;
}

// SAVED SETS (MY SETS)

function retrieveCorrectSetIndex() {
  for (let x = 0; x < mySavedSets.length; x++)
    // find clicked saved set
    if (event.target.matches(`#savedSet${x}`)) {
      // assign index variable
      savedSetIndex = x;
      // store current saved set
      currentSavedSet = event.target.innerText;
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
        nextDuosButton.classList.remove("invisible");
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
  // initialize variables
  setDuoIndex = 0;

  // disply correct buttons
  showSavedSetButtons();
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

// EDIT SAVED SET

function editSavedSet() {
  // close set overview screen
  setOverviewContainer.classList.add("invisible");
  // open the container
  createNewSetContainer.classList.remove("invisible");
  newSetStart.classList.add("invisible");
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
  hideInvalidDuosError();
  // load saved set data
  setName.value = currentSavedSet;
  let editSetArray = mySavedSets[savedSetIndex];
  storedDuos = editSetArray;
  fillInputFields();

  // initialize variables
  amountOfpreviousDuosButton = 0;
  unsavedInputFields = 0;

  // buttons
  showEditButton();
}

function editSet() {
  updateSavedSetLink();
  createNewSet();
}

function showEditButton() {
  createSetButton.classList.add("invisible");
  editSetButton.classList.remove("invisible");
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
