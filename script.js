const loginButton = document.getElementById("login-button");
const homeContent = document.getElementById("home-content");
const readContent = document.getElementById("read-content");
const historyContent = document.getElementById("history-content")
const uploadContent = document.getElementById("upload-content");
const ppoContent = document.getElementById("ppo-content");
const homeButton = document.getElementById("home-button");
const readButton = document.getElementById("read-button");
const historyButton = document.getElementById("history-button");
const uploadButton = document.getElementById("upload-button");
const ppoButton = document.getElementById("ppo-button");

// Basic screen-display functions

function loginFunction() {
  homeContent.classList.remove("hidden");
}

function handleClick(
  selectedButton,
  otherButtons,
  selectedContent,
  otherContent
) {
  selectedButton.classList.add("selected");
  otherButtons.forEach((button) => button.classList.remove("selected"));

  selectedContent.classList.remove("hidden");
  otherContent.forEach((content) => content.classList.add("hidden"));
}

function homeClick() {
  handleClick(homeButton, [readButton, historyButton, uploadButton, ppoButton], homeContent, [readContent, historyContent, uploadContent, ppoContent]);
}

function readClick() {
  handleClick(readButton, [homeButton, historyButton, uploadButton, ppoButton], readContent, [homeContent, historyContent, uploadContent, ppoContent]);
}

function historyClick() {
  handleClick(historyButton, [homeButton, readButton, uploadButton, ppoButton], historyContent, [readContent, homeContent, uploadContent, ppoContent]);
}
function uploadClick() {
  handleClick(uploadButton, [homeButton, readButton, historyButton, ppoButton], uploadContent, [readContent, homeContent, historyContent, ppoContent]);
}
function ppoClick() {
  handleClick(ppoButton, [homeButton, readButton, historyButton, uploadButton], ppoContent, [readContent, homeContent, historyContent, uploadContent]);
}
loginButton.addEventListener("click", loginFunction);
homeButton.addEventListener("click", homeClick);
readButton.addEventListener("click", readClick);
historyButton.addEventListener("click", historyClick);
uploadButton.addEventListener("click", uploadClick);
ppoButton.addEventListener("click", ppoClick);


// Complex API Calls and spreadsheets displays