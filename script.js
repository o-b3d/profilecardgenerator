document.addEventListener("DOMContentLoaded", function () {
  //Event Listener to change banner opacity based on value of select tag
  const selectBanner = document.getElementById("selectBanner");
  selectBanner.addEventListener("change", viewBanner);

  function viewBanner() {
    const bannerSelection = document.getElementById("selectBanner");
    const bannerValue = bannerSelection.value;
    const bannerImage = document.getElementById("banner");

    if (bannerValue === "true") {
      bannerImage.style.opacity = 100;
    }
    if (bannerValue === "false") {
      bannerImage.style.opacity = 0;
    }
  }

  //Event Listener to change "Full Name" text in bio container based on value of text input
  const fullNameInput = document.getElementById("fullNameTextInput");

  fullNameInput.addEventListener("input", () => {
    const fullNameInputValue = document.getElementById("fullNameTextInput").value;
    const fullNameContainer = document.querySelector("h1");
    fullNameContainer.innerText = fullNameInputValue;
  });

  //Event Listener that changes margin-left of social media icons based on value of select tag
  const positionSelected = document.getElementById("selectPosition");

  positionSelected.addEventListener("change", () => {
    const positionValue = selectPosition.value;
    const socialMediaIconsContainer = document.querySelector(".socialMediaIconsContainer");

    if (positionValue === "position-right") {
      socialMediaIconsContainer.style.marginLeft = "1285px"; //this should be removed to avoid using margin
      //this should be .style.right = "335px" and .style.left = "auto"
    } else {
      socialMediaIconsContainer.style.marginLeft = "505px"; //this should be removed to avoid using margin
      //this should be a else if statement with .style.left = "335px" and .style.right = "auto"
    }
  });

  //Event Listener that changes "Employment" text in bio container based on value of select tag
  const employmentSelection = document.getElementById("selectEmployment");

  employmentSelection.addEventListener("change", () => {
    const employmentSelectionValue = selectEmployment.value;
    const employmentContainer = document.querySelector("h2");
    employmentContainer.innerHTML = employmentSelectionValue;
  });

  //Event Listener that changes "City" text in bio container based on value of select tag
  const citySelection = document.getElementById("selectCity");

  citySelection.addEventListener("change", () => {
    const cityValue = selectCity.value;
    const cityContainer = document.querySelector("h3");
    cityContainer.innerHTML = cityValue;
  });

  //Event Listener that changes "County" text in bio container based on value of select tag
  const countySelection = document.getElementById("selectCounty");

  countySelection.addEventListener("change", () => {
    const countyValue = selectCounty.value;
    const countyContainer = document.querySelector("h4");
    countyContainer.textContent = countyValue;
  });

  //Event Listener that changes URL of GitHub icon based on input value
const githubInput = document.getElementById("githubInput");
const githubURL = document.getElementById("githubURL");

githubInput.addEventListener("input", () => {
  githubURL.href = `https://github.com/${githubInput.value}`;
});

//
const xInput = document.getElementById("xInput");
const xURL = document.getElementById("xURL");

xInput.addEventListener("input", () => {
xURL.href = `https://x.com/${xInput.value}`;
});

//
const linkedinInput = document.getElementById("linkedinInput");
const linkedinURL = document.getElementById("linkedinURL");

linkedinInput.addEventListener("input", () => {
linkedinURL.href = `https://www.linkedin.com/in/${linkedinInput.value}`;
});

//
const instagramInput = document.getElementById("instagramInput");
const instagramURL = document.getElementById("instagramURL");

instagramInput.addEventListener("input", () => {
instagramURL.href = `https://www.instagram.com/${instagramInput.value}`;
});

})
