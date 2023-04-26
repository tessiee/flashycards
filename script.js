// VARIABLES
var language = "Spanish";
var visibleSets;
function handleClick(event) {
    var target = event.target;
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
function showSets(event) {
    var pickedCategory = event.target;
    //visibleSets = pickedCategory.children as HTMLCollection;
    for (var i = 0; i < visibleSets.length; i++) {
        if (visibleSets[i].classList.contains("invisible")) {
            visibleSets[i].classList.remove("invisible");
        }
        else {
            visibleSets[i].classList.add("invisible");
        }
    }
}
function openSet() {
    console.log("woorks");
}
function setLanguage() {
    var element = EventTarget;
    console.log(element);
    console.log(language);
    //showSetsForLanguage();  NOT DONE
}
function showSetsForLanguage() {
    switch (language) {
        case "Spanish":
            var dutchSets1 = document.getElementsByClassName("dutch");
            for (var i = 0; i < dutchSets1.length; i++) {
                dutchSets1[i].classList.add("invisible");
            }
            var spanishSets1 = document.getElementsByClassName("spanish");
            for (var i = 0; i < spanishSets1.length; i++) {
                spanishSets1[i].classList.remove("invisible");
            }
            break;
        case "Dutch":
            var dutchSet2 = document.getElementsByClassName("dutch");
            for (var i = 0; i < dutchSet2.length; i++) {
                dutchSet2[i].classList.remove("invisible");
            }
            var spanishSets2 = document.getElementsByClassName("spanish");
            for (var i = 0; i < spanishSets2.length; i++) {
                spanishSets2[i].classList.add("invisible");
            }
            break;
        default:
            language = "Spanish";
            break;
    }
}
// RIGHT SIDE BAR
function createNewSet() {
    console.log("works!");
}
// CARDS
function showHint() {
    var translation = document.getElementById("translation");
    translation.classList.add("hint");
}
function showTranslation() {
    var translation = document.getElementById("translation");
    translation.classList.remove("invisible");
}
function hideTranslation() {
    var translation = document.getElementById("translation");
    translation.classList.add("invisible");
}
function revealTranslation() {
    showTranslation();
    showNextButton();
}
function showNextButton() {
    var nextButton = document.getElementById("nextButton");
    nextButton.classList.remove("invisible");
}
function hideNextButton() {
    var nextButton = document.getElementById("nextButton");
    nextButton.classList.add("invisible");
}
function nextWord() {
    hideTranslation();
    hideNextButton();
}
// FOOTER
