const loginButton = document.getElementById('login-button');
const modelInput = document.getElementById('model-input')

// aquí se supone que se ejecute un script

function loginFunction(){
    return modelInput.classList.remove('hidden')
}

loginButton.addEventListener("click", loginFunction)