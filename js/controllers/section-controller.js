function State() {
  this.sectionAuthenticated = null;
  this.sectionBadCredentials = null;
}

const state = new State();

export function init() {
  state.sectionAuthenticated = document.querySelector(".authenticated-section");
  state.sectionBadCredentials = document.querySelector(
    ".bad-credentials-section"
  );
}

export function showSectionAuthenticated() {
  state.sectionAuthenticated.classList.add("visible");
  state.sectionBadCredentials.classList.remove("visible");
}

export function showSectionBadCredentials() {
  state.sectionBadCredentials.classList.add("visible");
  state.sectionAuthenticated.classList.remove("visible");
}
