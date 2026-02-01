const config = {
  defaultYear: "2026-2027",
  sectors: {
    education: {
      percent: "19%",
      amt: "2000 crores",
      isHighest: false,
    },
    defence: {
      percent: "10%",
      amt: "3000 crores",
      isHighest: false,
    },
    energy: {
      percent: "6%",
      amt: "4000 crores",
      isHighest: false,
    },
    transport: {
      percent: "19%",
      amt: "2000 crores",
      isHighest: false,
    },
    finance: {
      percent: "36%",
      amt: "8000 crores",
      isHighest: true,
    },
  },
};

const sectorPerc = document.getElementById("chosen-option-allo-perc");
const sectorAmt = document.getElementById("chosen-option-allo-amt");
const chosenOption = document.querySelectorAll(".chosen-option");
const highestSec = document.getElementById("highest-sec");
const highestSecPerc = document.getElementById("highest-allo-perc");

const defaultYears = document.querySelectorAll(".default-year");
defaultYears.forEach((year) => {
  year.textContent = config.defaultYear;
});

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
const introLineCharts = [...document.getElementsByClassName("intro-line")];

function introBtnClick() {
  // For each button, add a click listener.
  introOptions.forEach((option) => {
    option.addEventListener("click", () => {
      //Add selected class to clicked button
      option.classList.add("selected");
      const selectedValue = option.innerHTML;

      chosenOption.forEach((chosen) => {
        chosen.textContent = selectedValue;
      });

      console.log(config);
      console.log(selectedValue.toLowerCase());
      sectorPerc.textContent =
        config.sectors[selectedValue.toLowerCase()].percent;
      sectorAmt.textContent = config.sectors[selectedValue.toLowerCase()].amt;

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

      const idForChart = selectedValue.toLowerCase();
      console.log(idForChart);
      introLineCharts.forEach((chart) => {
        if (chart.id === `${idForChart}-intro`) {
          chart.style.maxHeight = chart.scrollHeight + "px";
          return;
        }
      });

      const optionCorrect = option.classList.contains("correct");
      optionCorrect
        ? (introResultText.innerHTML = "<h2>That's right</h2>")
        : defaultResultText;

      optionCorrect
        ? (document.getElementById("option-detail-container").style.display =
            "none")
        : "";

      optionCorrect
        ? (document.getElementById("correct-option-detail").style.display =
            "none")
        : "";

      section2.style.maxHeight = section2.scrollHeight + "px";
      section2.addEventListener(
        "transitionend",
        () => {
          section2.style.maxHeight = "none";
        },
        { once: true },
      );
    });
  });

  // When any option is clicked, make wrong options red, and correct options green, add border to selected option
  // When any option is clicked, reveal the next section
  // When any option is clicked, change result-text to a or b
  // When any option is clicked, change chosen-option span to option id and get the value of that id of allocation from a pre-made list
}

const section3 = document.getElementById("card3");
const betSkip = document.getElementById("betskip");
const betSbt = document.getElementById("betsbt");
const section5 = document.getElementById("card5");
const betSelector = document.getElementById("betselector");
const betGraphics = [...document.querySelectorAll(".bet-bar-race")];
const section4 = document.getElementById("card4");
const section6 = document.getElementById("end-credits");
const racingOptionsContainer = document.getElementById(
  "racing-chart-options-container",
);

// function betResbt(betSbtClicks) {
//   const betSector=betSelector.value;
//   if (betSector) {
//     if (betSbtClicks > 0) {
//       betSbt.textContent = "Submit";
//     }
//   }
// };


function betHandling() {
  betSkip.addEventListener("click", () => {
    betSkip.style.display = "none";
    betSbt.style.color = "black";
    betSbt.style.fontWeight = "bold";
    betSbt.textContent =
      "Bet skipped. Here's how sector allocations changed for the top 10 after 2014";
    betSbt.style.textAlign = "left";
    betSbt.style.backgroundColor = "transparent";

    setTimeout(() => {
      section3.style.maxHeight = section3.scrollHeight + "px";
    }, 1000);

    setTimeout(() => {
      section5.style.maxHeight = section5.scrollHeight + "px";
    }, 10000);
    setTimeout(() => {
      section6.style.maxHeight = section6.scrollHeight + "px";
    }, 11000);
  });

  betSbt.addEventListener("click", () => {
    const betSector = betSelector.value;
    if (!betSector) {
      betSbt.textContent = "Please choose sector first!";
      return
    } else {
      betSbt.textContent = "Good luck!";
      betSkip.style.pointerEvents = "none";
      betSbt.style.pointerEvents = "none";
      betSkip.style.display = "none";
      betSbt.style.backgroundColor = "transparent";
      betSbt.style.color = "black";
      betSbt.style.fontWeight = "bold";
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
    setTimeout(() => {
      section6.style.maxHeight = section6.scrollHeight + "px";
    }, 11000);
  });
  betSelector.addEventListener("change", () => {
  if (betSelector.value) {
    betSbt.textContent = "Submit";
  }
});
}

document.addEventListener("DOMContentLoaded", introBtnClick());
document.addEventListener("DOMContentLoaded", betHandling());
