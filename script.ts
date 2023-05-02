// VARIABLES
let aboutFlashycards: HTMLElement = document.getElementById(
  "aboutFlashycards"
) as HTMLInputElement;
let visibleSets: any;
let flashyCategories: HTMLCollection =
  document.getElementsByClassName("setCategories");
let setOverviewContainer: HTMLElement = document.getElementById(
  "setOverviewContainer"
) as HTMLInputElement;
let setOverview: HTMLElement = document.getElementById(
  "setOverview"
) as HTMLInputElement;
let nextWordsButton: HTMLElement = document.getElementById(
  "nextWordsButton"
) as HTMLInputElement;
let previousWordsButton: HTMLElement = document.getElementById(
  "previousWordsButton"
) as HTMLInputElement;
let flashcard: HTMLElement = document.getElementById(
  "flashcard"
) as HTMLInputElement;
let createNewSetContainer: HTMLElement = document.getElementById(
  "createNewSetContainer"
) as HTMLInputElement;
let newSetStart: HTMLElement = document.getElementById(
  "newSetStart"
) as HTMLInputElement;
let newSetForm: HTMLElement = document.getElementById(
  "newSetForm"
) as HTMLInputElement;
let nextFieldsButton: HTMLElement = document.getElementById(
  "nextFieldsButton"
) as HTMLInputElement;
let previousFieldsButton: HTMLElement = document.getElementById(
  "previousFieldsButton"
) as HTMLInputElement;
let moreFieldsButton: HTMLElement = document.getElementById(
  "moreFieldsButton"
) as HTMLInputElement;
let language: String = "spanish";

// LEFT SIDEBAR

window.onclick = function showSets(event) {
  for (let x = 1; x <= flashyCategories.length; x++)
    if ((<HTMLElement>event.target).matches(`#category_${x}_es`)) {
      visibleSets = document.getElementsByClassName(`cat_${x}`);
      for (let i = 0; i < visibleSets.length; i++) {
        let showSet = visibleSets[i];
        if (showSet.classList.contains("invisible")) {
          showSet.classList.remove("invisible");
        } else {
          showSet.classList.add("invisible");
        }
      }
    }
  if ((<HTMLElement>event.target).classList.contains("flashySet")) {
    // first close previously opened set
    closePreviousSet();
    // set the chosen category
    let category: String = (<HTMLElement>event.target).innerText.toLowerCase();
    loadCorrectSet(category);
    // close other windows
    aboutFlashycards.classList.add("invisible");
    createNewSetContainer.classList.add("invisible");
    flashcard.classList.add("invisible");
    // open set overview
    setOverviewContainer.classList.remove("invisible");
  }
};

function loadCorrectSet(category: String) {
  fetch(`flashySets/${language}/${category}.json`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data.forEach((animal: { word: any; translation: any }) => {
        const wordTranslationDuo = document.createElement("div");
        wordTranslationDuo.classList.add("duo");
        wordTranslationDuo.innerHTML = `
        <div class="setWord">${animal.word}</div>
        <div class="setTranslation">${animal.translation}
        </div>
        `;
        setOverview.appendChild(wordTranslationDuo);
      });
    });
}

function closePreviousSet() {
  setOverview.innerHTML = "";
}

// SET OVERVIEW

function showPreviousWords() {
  // if statement eerste input, dan:
  //previousWordsButton.classList.add("invisible")
}

function showNextWords() {
  // if statement laatste input:
  //nextWordsButton.classList.add("invisible")
}

function startPractice() {
  flashcard.classList.remove("invisible");
  setOverviewContainer.classList.add("invisible");
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

function showHint() {
  let translation: HTMLElement = document.getElementById(
    "translation"
  ) as HTMLInputElement;
  translation.classList.add("hint");
}

function showTranslation() {
  let translation: HTMLElement = document.getElementById(
    "translation"
  ) as HTMLInputElement;
  translation.classList.remove("invisible");
}

function hideTranslation() {
  let translation: HTMLElement = document.getElementById(
    "translation"
  ) as HTMLInputElement;
  translation.classList.add("invisible");
}

function showNextButton() {
  let nextButton: HTMLElement = document.getElementById(
    "nextButton"
  ) as HTMLInputElement;
  nextButton.classList.remove("invisible");
}

function hideNextButton() {
  let nextButton: HTMLElement = document.getElementById(
    "nextButton"
  ) as HTMLInputElement;
  nextButton.classList.add("invisible");
}

function revealTranslation() {
  showTranslation();
  showNextButton();
}

function nextWord() {
  hideTranslation();
  hideNextButton();
}

function reStartPractice() {
  //reload current set
}

// FOOTER

function showAboutFlashy() {
  aboutFlashycards.classList.remove("invisible");
  setOverviewContainer.classList.add("invisible");
  flashcard.classList.add("invisible");
  createNewSetContainer.classList.add("invisible");
}
