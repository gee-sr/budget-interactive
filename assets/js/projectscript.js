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
  Finance: "1%",
  Education: "2%",
  Defence: "3%",
  Energy: "4%",
  Transport: "5%",
};

const section2 = document.getElementById("card2");
const introResultText = document.getElementById("intro-answer-result");
const defaultResultText = introResultText.innerHTML;

function introBtnClick() {
  // For each button, add a click listener.
  introOptions.forEach((option) => {
    option.addEventListener("click", () => {
      //Add selected class to clicked button
      option.classList.add("selected");
      introOptions.forEach((option) => {
        //Remove pointer events for all buttons
        option.style.pointerEvents = "none";

        // Set checking variable to see if selected option is correct
        const clickedOptionCorrect =
          option.classList.contains("correct-option");

        // Apply the appropriate styles based on whether clicked option is correct or not
        clickedOptionCorrect
          ? option.classList.add("correct")
          : option.classList.add("incorrect");
      });

      section2.style.maxHeight = section2.scrollHeight + "px";

      //   const chosenOptionText = document.getElementById("chosen-option");
      //   const chosenOptionAllo = document.getElementById("chosen-option-allo");

      const optionCorrect = option.classList.contains("correct");
      optionCorrect
        ? (introResultText.innerHTML = "<h2>That's right</h2>")
        : defaultResultText;
    });
  });

  // When any option is clicked, make wrong options red, and correct options green, add border to selected option
  // When any option is clicked, reveal the next section
  // When any option is clicked, change result-text to a or b
  // When any option is clicked, change chosen-option span to option id and get the value of that id of allocation from a pre-made list
}
("");

const section3 = document.getElementById("card3");
const betSkip = document.getElementById("betskip");
const betSbt = document.getElementById("betsbt");
const section5 = document.getElementById("card5");
const betSelector = document.getElementById("betselector");
const betGraphics = [...document.querySelectorAll(".bet-bar-race")];
const section4 = document.getElementById("card4");
const correctSectors = ["Defence", "Agri", "Transport", "UT"];

function betHandling() {
  betSkip.addEventListener("click", () => {
    section3.style.maxHeight = section3.scrollHeight + "px";
    betSkip.style.pointerEvents = "none";
    betSbt.style.pointerEvents = "none";
    betSkip.style.backgroundColor = "darkgrey";
    betSkip.style.color = "white";
    betSbt.style.backgroundColor = "grey";
    setTimeout(() => {
      section5.style.maxHeight = section5.scrollHeight + "px";
    }, 10000);
  });

  betSbt.addEventListener("click", () => {
    const betSector = betSelector.value;
    if (!betSector) {
      betSbt.textContent = "Please choose sector first!";
      // return needed to exit the whole function so betSector can get a new value on the next click
      return;
    } else {
      betSbt.textContent = "Good luck!";
      betSkip.style.pointerEvents = "none";
      betSbt.style.pointerEvents = "none";
      betSkip.style.backgroundColor = "darkgrey";
      betSkip.style.color = "white";
      betSbt.style.backgroundColor = "grey";
      setTimeout(() => {
        section5.style.maxHeight = section5.scrollHeight + "px";
      }, 10000);
    }

    betGraphics.forEach((graphic) => {
      if (graphic.classList.contains(betSector)) {
        graphic.style.maxHeight = graphic.scrollHeight + "px";
      }
    });
    section4.style.maxHeight = section4.scrollHeight + "px";
    setTimeout(() => {
      section5.style.maxHeight = section5.scrollHeight + "px";
    }, 10000);
  });
}

document.addEventListener("DOMContentLoaded", introBtnClick());
document.addEventListener("DOMContentLoaded", betHandling());
