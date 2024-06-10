window.onload = function () {
    "use strict";

    let formHandle = document.forms.loginForm;

    formHandle.onsubmit = processForm;

    function processForm() {
        const userNameInput = formHandle.username.value;
        const passwordInput = formHandle.password.value;

        const checkLoginResult = checkLogin(userNameInput, passwordInput);

        const outputDiv = document.querySelector(".output");
        outputDiv.innerHTML = checkLoginResult === true ? 'Welcome Back!' : checkLoginResult;
        outputDiv.style.display = 'block';
        return false;
    }
};