const link = document.createElement("link");

link.href = chrome.runtime.getURL("dodger.css");
link.type = "text/css";
link.rel = "stylesheet";

document.getElementsByTagName("head")[0].appendChild(link);