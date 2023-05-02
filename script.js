// VARIABLES
var aboutFlashycards = document.getElementById("aboutFlashycards");
var visibleSets;
var flashyCategories = document.getElementsByClassName("setCategories");
var setOverviewContainer = document.getElementById("setOverviewContainer");
var setOverview = document.getElementById("setOverview");
var nextWordsButton = document.getElementById("nextWordsButton");
var previousWordsButton = document.getElementById("previousWordsButton");
var flashcard = document.getElementById("flashcard");
var createNewSetContainer = document.getElementById("createNewSetContainer");
var newSetStart = document.getElementById("newSetStart");
var newSetForm = document.getElementById("newSetForm");
var nextFieldsButton = document.getElementById("nextFieldsButton");
var previousFieldsButton = document.getElementById("previousFieldsButton");
var moreFieldsButton = document.getElementById("moreFieldsButton");
var language = "spanish";
// LEFT SIDEBAR
window.onclick = function showSets(event) {
    for (var x = 1; x <= flashyCategories.length; x++)
        if (event.target.matches("#category_".concat(x, "_es"))) {
            visibleSets = document.getElementsByClassName("cat_".concat(x));
            for (var i = 0; i < visibleSets.length; i++) {
                var showSet = visibleSets[i];
                if (showSet.classList.contains("invisible")) {
                    showSet.classList.remove("invisible");
                }
                else {
                    showSet.classList.add("invisible");
                }
            }
        }
    if (event.target.classList.contains("flashySet")) {
        // first close previously opened set
        closePreviousSet();
        // set the chosen category
        var category = event.target.innerText.toLowerCase();
        loadCorrectSet(category);
        // close other windows
        aboutFlashycards.classList.add("invisible");
        createNewSetContainer.classList.add("invisible");
        flashcard.classList.add("invisible");
        // open set overview
        setOverviewContainer.classList.remove("invisible");
    }
};
function loadCorrectSet(category) {
    fetch("flashySets/".concat(language, "/").concat(category, ".json"))
        .then(function (res) {
        return res.json();
    })
        .then(function (data) {
        data.forEach(function (animal) {
            var wordTranslationDuo = document.createElement("div");
            wordTranslationDuo.classList.add("duo");
            wordTranslationDuo.innerHTML = "\n        <div class=\"setWord\">".concat(animal.word, "</div>\n        <div class=\"setTranslation\">").concat(animal.translation, "\n        </div>\n        ");
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
function showNextButton() {
    var nextButton = document.getElementById("nextButton");
    nextButton.classList.remove("invisible");
}
function hideNextButton() {
    var nextButton = document.getElementById("nextButton");
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
