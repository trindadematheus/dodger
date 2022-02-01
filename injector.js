function toggleDodgerStyle() {
  const dodgeStyle = document.getElementById("dodger-style");

  if (dodgeStyle) {
    dodgeStyle.remove();
  } else {
    injectDodgerStyle();
  }
}

function injectDodgerButton() {
  const link = document.createElement("link");
  const buttonEl = document.createElement('button');

  link.href = chrome.runtime.getURL("dodger-button.css");
  link.type = "text/css";
  link.rel = "stylesheet";

  buttonEl.className = 'dodger-button';
  buttonEl.addEventListener('click', toggleDodgerStyle);
  buttonEl.innerText = 'TOOGLE';

  document.getElementsByTagName("head")[0].appendChild(link);
  document.querySelector('#app').appendChild(buttonEl);
}

function injectDodgerStyle() {
  const link = document.createElement("link");

  link.href = chrome.runtime.getURL("dodger.css");
  link.type = "text/css";
  link.rel = "stylesheet";
  link.id = "dodger-style"

  document.getElementsByTagName("head")[0].appendChild(link);
}

injectDodgerStyle();
injectDodgerButton();