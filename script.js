document.addEventListener("DOMContentLoaded", function () {
  //
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

  //
  const fullNameInput = document.getElementById("fullNameTextInput");
  fullNameInput.addEventListener("input", updateHeader);

  function updateHeader() {
    const fullNameInputValue =
      document.getElementById("fullNameTextInput").value;
    const fullNameContainer = document.querySelector("h1");
    fullNameContainer.innerText = fullNameInputValue;
  }

  //
  const positionSelected = document.getElementById("selectPosition");
  positionSelected.addEventListener("change", updateSocialMediaIconsPosition);

  function updateSocialMediaIconsPosition() {
    const positionValue = selectPosition.value;
    const socialMediaIconsContainer = document.querySelector(".socialMediaIconsContainer");

    if (positionValue === "position-right") {
      socialMediaIconsContainer.style.marginLeft = "1285px";
    } else {
      socialMediaIconsContainer.style.marginLeft = "505px";
    }
  }

  //
  const employmentSelection = document.getElementById("selectEmployment");
  employmentSelection.addEventListener("change", updateEmployment);

  function updateEmployment() {
    const employmentSelectionValue = selectEmployment.value;
    const employmentContainer = document.querySelector("h2");
    employmentContainer.innerHTML = employmentSelectionValue;
  }

  //
  const citySelection = document.getElementById("selectCity");
  citySelection.addEventListener("change", updateCity);

  function updateCity() {
    const cityValue = selectCity.value;
    const cityContainer = document.querySelector("h3");
    cityContainer.innerHTML = cityValue;
  }

  //
  const countySelection = document.getElementById("selectCounty");
  countySelection.addEventListener("change", updateCounty);

  function updateCounty() {
    const countyValue = selectCounty.value;
    const countyContainer = document.querySelector("h4");
    countyContainer.textContent = countyValue;
  }

  //
  
});
