import User from "../models/user.js";
import * as authenticateService from "../services/authenticate-service.js";
import * as sectionController from "./section-controller.js";

function State() {
  this.user = new User();

  this.btnLogar = null;

  this.inputUsername = null;
  this.inputPassword = null;
}

const state = new State();

export function init() {
  state.inputUsername = document.querySelector("#username");
  state.inputPassword = document.querySelector("#password");

  state.buttonAuthenticate = document.querySelector("#authenticate");

  state.buttonAuthenticate.addEventListener(
    "click",
    handleButtonAuthenticateClick
  );
  state.inputUsername.addEventListener("keyup", handleInputUsernameKeyup);
  state.inputPassword.addEventListener("keyup", handleInputPasswordKeyup);
}

function handleInputUsernameKeyup(event) {
  state.user.username = event.target.value;
}

function handleInputPasswordKeyup(event) {
  state.user.password = event.target.value;
}

function handleButtonAuthenticateClick(event) {
  event.preventDefault();

  saveFakeUserInLocalStorage();

  if (authenticateService.userAuthentication(state.user)) {
    sectionController.showSectionAuthenticated();
  } else {
    sectionController.showSectionBadCredentials();
  }
}

function saveFakeUserInLocalStorage() {
  localStorage.clear();
  localStorage.setItem("user", "douglas-vidal");
  localStorage.setItem("password", "123");
}
