/*const elem = document.querySelector(".events-list");

const divElem = document.querySelector(".rect_div");
const pElem = document.querySelector(".rect_p");
const spanElem = document.querySelector(".rect_span");

const clearBtn = document.querySelector(".clear-btn");
const stop = document.querySelector(".remove-handlers-btn");
const start = document.querySelector(".attach-handlers-btn");

const logTarget = (text, color) => {
  elem.innerHTML += `<span style = "color: ${color}; margin-left: 8px">${text}</span>`;
};

const logGreenDiv = logTarget.bind("DIV", "green");

const logGreenP = logTarget.bind("P", "green");

const logGreenSpan = logTarget.bind("Span", "green");

const logGreyDiv = logTarget.bind("DIV", "grey");

const logGreyP = logTarget.bind("P", "grey");

const logGreySpan = logTarget.bind("SPAN", "grey");

const clear = () => {
  elem.innerHTML = "";
};
clearBtn.addEventListener("click", clear);
elem.innerHTML = "";

const attachHandlers = () => {
  divElem.addEventListener("click", logGreyDiv, true);
  divElem.addEventListener("click", logGreenDiv);
  pElem.addEventListener("click", logGreyP, true);
  pElem.addEventListener("click", logGreenP);
  spanElem.addEventListener("click", logGreySpan, true);
  spanElem.addEventListener("click", logGreenSpan);
};

const attachHandlersBtnElem = document.querySelector(".attach-handlers-btn");
attachHandlersBtnElem.addEventListener("click", attachHandlers);

/*const removeHandlers = () => {
  divElem.addEventListener("click", logGreyDiv, true);
  divElem.addEventListener("click", logGreenDiv);
  pElem.addEventListener("click", logGreyP, true);
  pElem.addEventListener("click", logGreenP);
  spanElem.addEventListener("click", logGreySpan, true);
  spanElem.addEventListener("click", logGreenSpan);
};
const removeHandlersBtnElem = document.querySelector(".remove-handlers-btn");
removeHandlersBtnElem.removeEventListener("click", attachHandlers);
*/
const divElem = document.querySelector("div");
const pElem = document.querySelector("p");
const spanElem = document.querySelector("span");
const eventsListElem = document.querySelector(".events-list");

const logEvent = (text, color) => {
  const spanElem = document.createElement("span");
  spanElem.style = `color: ${color}; margin-left: 8px;`;
  spanElem.textContent = text;
  eventsListElem.appendChild(spanElem);
};

const logGreenDiv = logEvent.bind(null, "div", "green");
const logGreyDiv = logEvent.bind(null, "div", "grey");

const logGreenP = logEvent.bind(null, "p", "green");
const logGreyP = logEvent.bind(null, "p", "grey");

const logGreenSpan = logEvent.bind(null, "span", "green");
const logGreySpan = logEvent.bind(null, "span", "grey");

const attachHandlers = () => {
  divElem.addEventListener("click", logGreyDiv, true);
  divElem.addEventListener("click", logGreenDiv);
  pElem.addEventListener("click", logGreyP, true);
  pElem.addEventListener("click", logGreenP);
  spanElem.addEventListener("click", logGreySpan, true);
  spanElem.addEventListener("click", logGreenSpan);
};

const attachHandlersBtnElem = document.querySelector(".attach-handlers-btn");
attachHandlersBtnElem.addEventListener("click", attachHandlers);

const removeHandlers = () => {
  divElem.removeEventListener("click", logGreenDiv);
  divElem.removeEventListener("click", logGreyDiv, true);
  pElem.removeEventListener("click", logGreenP);
  pElem.removeEventListener("click", logGreyP, true);
  spanElem.removeEventListener("click", logGreenSpan);
  spanElem.removeEventListener("click", logGreySpan, true);
};

const removeHandlersBtnElem = document.querySelector(".remove-handlers-btn");
removeHandlersBtnElem.addEventListener("click", removeHandlers);

const clearBoard = () => {
  eventsListElem.innerHTML = "";
};

const clearBtnElem = document.querySelector(".clear-btn");
clearBtnElem.addEventListener("click", clearBoard);

document.addEventListener("DOMContentLoaded", () => {
  attachHandlers();
});
