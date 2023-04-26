// VARIABLES
let language: String = "Spanish";
let visibleSets: any;

// INTERFACES
interface HTMLEvent extends Event {
  target: HTMLElement;
}

type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
}

function handleClick(event: HTMLElementEvent<HTMLElement>) {
  const { target } = event
  console.log(target.innerHTML);
}

// LOG IN BUTTON
function showLoginWindow() {
  console.log("works!");
}
// REGISTRATION BUTTON
function showRegistrationForm() {
  console.log("works too!");
}

// LEFT SIDE BAR

function showSets(event: HTMLEvent) {
  const pickedCategory = event.target;
  //visibleSets = pickedCategory.children as HTMLCollection;
  for (let i = 0; i < visibleSets.length; i++) {
    if (visibleSets[i].classList.contains("invisible")) {
      visibleSets[i].classList.remove("invisible");
    } else {
      visibleSets[i].classList.add("invisible");
    }
  }
}

function openSet() {
  console.log("woorks");
}

function setLanguage() {
  let element = EventTarget;
  console.log(element);
  console.log(language);
  //showSetsForLanguage();  NOT DONE
}

function showSetsForLanguage() {
  switch (language) {
    case "Spanish":
      let dutchSets1: HTMLCollectionOf<Element> = document.getElementsByClassName("dutch");
      for (let i = 0; i < dutchSets1.length; i++) {
      dutchSets1[i].classList.add("invisible");
      }
      let spanishSets1: HTMLCollectionOf<Element> = document.getElementsByClassName("spanish");
      for (let i = 0; i < spanishSets1.length; i++) {
      spanishSets1[i].classList.remove("invisible");
      }
      break;
    case "Dutch":
      let dutchSet2: HTMLCollectionOf<Element> = document.getElementsByClassName("dutch");
      for (let i = 0; i < dutchSet2.length; i++) {
      dutchSet2[i].classList.remove("invisible");
      }
      let spanishSets2: HTMLCollectionOf<Element> = document.getElementsByClassName("spanish");
      for (let i = 0; i < spanishSets2.length; i++) {
      spanishSets2[i].classList.add("invisible");
      }
      break;
      default:
        language = "Spanish"
        break;
  }
}

// RIGHT SIDE BAR
function createNewSet() {
  console.log("works!");
}
// CARDS

function showHint() {
  let translation: HTMLElement = document.getElementById("translation") as HTMLInputElement;
  translation.classList.add("hint");
}

function showTranslation() {
  let translation: HTMLElement = document.getElementById("translation") as HTMLInputElement;
  translation.classList.remove("invisible");
}

function hideTranslation() {
  let translation: HTMLElement = document.getElementById("translation") as HTMLInputElement;
  translation.classList.add("invisible");
}

function revealTranslation() {
  showTranslation();
  showNextButton();
}

function showNextButton() {
  let nextButton: HTMLElement = document.getElementById("nextButton") as HTMLInputElement;
  nextButton.classList.remove("invisible");
}

function hideNextButton() {
  let nextButton: HTMLElement = document.getElementById("nextButton") as HTMLInputElement;
  nextButton.classList.add("invisible");
}

function nextWord() {
  hideTranslation();
  hideNextButton();
}
// FOOTER

