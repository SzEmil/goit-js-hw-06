"use strict";

const loginForm = document.querySelector(".login-form");

const loginBtn = loginForm.querySelector("button");
console.log(loginBtn);

const formHandler = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("dzbanie jak ty chcesz sie zalogować bez maila czy hasła");
  } else {
    const loginData = {
      email: email.value,
      password: password.value,
    };
    console.log(loginData);
    event.currentTarget.reset();
  }
};

loginBtn.addEventListener("submit", formHandler);
