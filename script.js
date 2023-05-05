// letIABLES
const aboutFlashycards = document.getElementById("aboutFlashycards");
let visibleSets;
let flashyCategories = document.getElementsByClassName("setCategories");
const setOverviewContainer = document.getElementById("setOverviewContainer");
const setOverview = document.getElementById("setOverview");
const nextWordsButton = document.getElementById("nextWordsButton");
const previousWordsButton = document.getElementById("previousWordsButton");
const flashcard = document.getElementById("flashcard");
const createNewSetContainer = document.getElementById("createNewSetContainer");
const newSetStart = document.getElementById("newSetStart");
const newSetForm = document.getElementById("newSetForm");
const nextFieldsButton = document.getElementById("nextFieldsButton");
const previousFieldsButton = document.getElementById("previousFieldsButton");
const moreFieldsButton = document.getElementById("moreFieldsButton");
let practiceWord = document.getElementById("word");
let practiceTranslation = document.getElementById("translation");
const nextDuos = document.getElementById("nextWordsButton");
const previousDuos = document.getElementById("previousWordsButton");
let language = "spanish";
let practiceDuoIndex;
let practiceWordsArray = [];
let practiceTranslationsArray = [];
let duoContainerNumber;
let setDuoIndex;

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
        wordTranslationDuo.innerHTML = `<div class="setWord">
          ${duo.word}</div>
          <div class="setTranslation">
          ${duo.translation}
        </div>
        </div>`;
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
  loadWordIntoCard();
}
// RIGHT SIDEBAR
function openNewSetCreator() {
  aboutFlashycards.classList.add("invisible");
  setOverviewContainer.classList.add("invisible");
  flashcard.classList.add("invisible");
  createNewSetContainer.classList.remove("invisible");
  newSetStart.classList.remove("invisible");
  newSetForm.classList.add("invisible");
}
// CREATE OWN SET
function startCreatingSet() {
  newSetStart.classList.add("invisible");
  newSetForm.classList.remove("invisible");
}
function showMoreFields() {
  //create new list of input fields
  previousFieldsButton.classList.remove("invisible");
}
function showPreviousFields() {
  moreFieldsButton.classList.add("invisible");
  nextFieldsButton.classList.remove("invisible");
  //go back to previous input fields
  // if statement eerste input, dan:
  previousFieldsButton.classList.add("invisible");
}
function showNextFields() {
  previousFieldsButton.classList.remove("invisible");
  //go forward to next input fields
  // if statement laatste input:
  nextFieldsButton.classList.add("invisible");
  moreFieldsButton.classList.remove("invisible");
}
function createNewSet() {
  createNewSetContainer.classList.add("invisible");
  setOverviewContainer.classList.remove("invisible");
}
// CARDS
function fillFlashcardPracticeArrays() {
  practiceWordsArray = [];
  practiceTranslationsArray = [];
  practiceWordsArray = document.getElementsByClassName("setWord");
  practiceTranslationsArray = document.getElementsByClassName("setTranslation");
  practiceDuoIndex = 0;
}
function loadWordIntoCard() {
  practiceWord.innerText = practiceWordsArray[practiceDuoIndex].innerText;
  practiceTranslation.innerText =
    practiceTranslationsArray[practiceDuoIndex].innerText;
  practiceDuoIndex++;
}
function showHint() {
  let translation = document.getElementById("translation");
  translation.classList.add("hint");
  // show first character of translation
}
function showTranslation() {
  let translation = document.getElementById("translation");
  translation.classList.remove("invisible");
}
function hideTranslation() {
  let translation = document.getElementById("translation");
  translation.classList.add("invisible");
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
  hideTranslation();
  hideNextButton();
  loadWordIntoCard();
}
function reStartPractice() {
  practiceDuoIndex = 0;
  hideTranslation();
  hideRestartButton();
  loadWordIntoCard();
}
function closePractice() {
  hideTranslation();
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
