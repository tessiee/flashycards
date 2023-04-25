// LOG IN BUTTON
function showLoginWindow() {
    console.log("works!");
}
// REGISTRATION BUTTON
function showRegistrationForm() {
    console.log("works too!");
}
// LEFT SIDE BAR
let visibleSets = [];

function pickCategory() {
    const pickedCategory = event.target.parentElement.parentElement.parentElement;
visibleSets = pickedCategory.secondChild;
console.log(pickedCategory);
console.log(visibleSets);
}

function hideSets() {
    for (let i = 0; i < visibleSets.length; i++) {
        visibleSets[i].classList.add("invisible");
    }
}
function showSets() {
    pickCategory();
    for (var i = 0; i < visibleSets.length; i++) {
        if (visibleSets[i].classList.contains("invisible")) {
            visibleSets[i].classList.remove("invisible");
        }
        else {
            hideSets();
        }
    }
    console.log(visibleSets);
}
// RIGHT SIDE BAR
function createNewSet() {
    console.log("works!");
}
// CARDS
function showTranslation() {
    console.log("works!");
}
function nextWord() {
    console.log("works!");
}
// FOOTER
