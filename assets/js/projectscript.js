const dropdown = document.querySelector(".intro-dropdown");
const dropdownText = document.querySelector(".intro-dropdown-text");
const arrow = document.querySelector(".dropdown-arrow");

dropdown.addEventListener("click", () => {
  const isOpen = dropdownText.style.maxHeight;

  dropdownText.style.maxHeight = isOpen
    ? null
    : dropdownText.scrollHeight + "px";

  arrow.classList.toggle("rotate", !isOpen);
});

const introOptions = [...document.querySelectorAll(".intro-options")];

const introOptionsAnswers = {
    "Finance":"1%",
    "Education":"2%",
    "Defence":"3%",
    "Energy":"4%",
    "Transport":"5%"
}

function introBtnClick(){
    // For each button, add a click listener.
    introOptions.forEach(option => {
        option.addEventListener("click", () => {
            option.classList.add("selected");

            

    })})
    // When any option is clicked, make wrong options red, and correct options green, add border to selected option
    // When any option is clicked, reveal the next section
    // When any option is clicked, change result-text to a or b
    // When any option is clicked, change chosen-option span to option id and get the value of that id of allocation from a pre-made list
};

