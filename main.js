window.onload = () => {
const bannerSelect = document.getElementById("selectBanner");
const bannerContainer = document.getElementById("banner");

/*
window.onload () => {
if (bannerValue == "undefined") {
bannerContainer.style.opacity = "0.5"
} else if (bannerValue == "true") {
  bannerContainer.style.opacity = "100"
} else if (bannerValue == "false") {
  bannerContainer.style.opacity = "0"
}
}
*/

bannerSelect.addEventListener("changeValue", () => {
  if (bannerSelect.value === "true") {
    bannerContainer.style.opacity = "100";
  }
  if (bannerSelect.value === "false") {
    bannerContainer.style.opacity = "0";
  }
});

const fullNameInput = document.getElementById("fullNameTextInput");
const fullNameValue = fullNameTextInput.value;
const fullNameContainer = document.getElementById("fullNameTextBox");

fullNameInput.oninput = () => {
  fullNameContainer.innerHTML = fullNameValue;
};

}