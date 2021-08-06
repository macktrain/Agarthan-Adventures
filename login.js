const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-button");
// const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", () => {
    preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "web_dev") {
        alert("You have successfully logged in.");
        location.reload();
    // } else {
    //     loginErrorMsg.style.opacity = 1;
    // }
    }
})