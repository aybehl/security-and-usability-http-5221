window.onload = function () {
    "use strict";

    let formHandle = document.forms.loginForm;

    formHandle.onsubmit = processForm;

    function processForm() {
        // const usernameInput = formHandle.username;
        // const passwordInput = formHandle.password;

        const usernameInput = document.querySelector(".login__username");
        const passwordInput = document.querySelector(".login__password");

        if (usernameInput.value === "") {
            usernameInput.classList.add("login__txtbox_error");
            usernameInput.focus();
            // usernameInput.style.background = 'red';
            return false;
        }

        if (passwordInput.value === "") {
            passwordInput.classList.add("login__txtbox_error");
            passwordInput.focus();
            //passwordInput.style.background = 'red';
            return false;
        }

        const outputDiv = document.querySelector(".output");
        outputDiv.style.display = "block";

        const outputUser = document.querySelector(".output__user");
        outputUser.innerHTML = usernameInput.value;

        const outputPass = document.querySelector(".output__pass");
        outputPass.innerHTML = passwordInput.value;

        return false;
    }
};