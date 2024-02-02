const loginButton = document.getElementById("login-button");
const homeContent = document.getElementById("home-content");
const readContent = document.getElementById("read-content");
const historyContent = document.getElementById("history-content")
const packsContent = document.getElementById("packs-content")
const uploadContent = document.getElementById("upload-content");
const ppoContent = document.getElementById("ppo-content");
const packsButton = document.getElementById("packs-button")
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
  handleClick(homeButton, [readButton, historyButton, uploadButton, ppoButton, packsButton], homeContent, [readContent, historyContent, uploadContent, ppoContent, packsContent]);
}

function readClick() {
  handleClick(readButton, [homeButton, historyButton, uploadButton, ppoButton, packsButton], readContent, [homeContent, historyContent, uploadContent, ppoContent, packsContent]);
}

function historyClick() {
  handleClick(historyButton, [homeButton, readButton, uploadButton, ppoButton, packsButton], historyContent, [readContent, homeContent, uploadContent, ppoContent, packsContent]);
}
function uploadClick() {
  handleClick(uploadButton, [homeButton, readButton, historyButton, ppoButton, packsButton], uploadContent, [readContent, homeContent, historyContent, ppoContent, packsContent]);
}
function packsClick(){
  handleClick(packsButton, [homeButton, readButton, historyButton, uploadButton, ppoButton], packsContent, [readContent, homeContent, historyContent, uploadContent, ppoContent]);
}
function ppoClick() {
  handleClick(ppoButton, [homeButton, readButton, historyButton, uploadButton, packsButton], ppoContent, [readContent, homeContent, historyContent, uploadContent, packsContent]);
}
loginButton.addEventListener("click", loginFunction);
homeButton.addEventListener("click", homeClick);
readButton.addEventListener("click", readClick);
historyButton.addEventListener("click", historyClick);
uploadButton.addEventListener("click", uploadClick);
ppoButton.addEventListener("click", ppoClick);
packsButton.addEventListener("click", packsClick)

// Complex API Calls and spreadsheets displays

async function dataFromAPI() {
  try {
    const response = await fetch('https://api-jesus.fly.dev/docs');
    if (!response.ok) {
      throw new Error('Error');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
}