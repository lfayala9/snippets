const loginButton = document.getElementById("login-button");
const modelInput = document.getElementById("model-input");
const homeButton = document.getElementById("home-button");
const readButton = document.getElementById("read-button");
const historyButton = document.getElementById("history-button");
const uploadButton = document.getElementById("upload-button");
const ppoButton = document.getElementById("ppo-button");

function loginFunction() {
  modelInput.classList.remove("hidden");
}

function handleClick(selectedButton, otherButtons) {
  selectedButton.classList.add("selected");
  otherButtons.forEach((button) => button.classList.remove("selected"));
}

function homeClick() {
  handleClick(homeButton, [readButton, historyButton, uploadButton, ppoButton]);
}

function readClick() {
  handleClick(readButton, [homeButton, historyButton, uploadButton, ppoButton]);
}

function historyClick() {
  handleClick(historyButton, [homeButton, readButton, uploadButton, ppoButton]);
}
function uploadClick() {
  handleClick(uploadButton, [homeButton, readButton, historyButton, ppoButton]);
}
function ppoClick() {
    handleClick(ppoButton, [homeButton, readButton, historyButton, uploadButton]);
  }
loginButton.addEventListener("click", loginFunction);
homeButton.addEventListener("click", homeClick);
readButton.addEventListener("click", readClick);
historyButton.addEventListener("click", historyClick);
uploadButton.addEventListener("click", uploadClick)
ppoButton.addEventListener("click", ppoClick)