const elem = document.querySelector(".events-list");

const divElem = document.querySelector(".rect_div");
const pElem = document.querySelector(".rect_p");
const spanElem = document.querySelector(".rect_span");

const clearBtn = document.querySelector(".clear-btn");
const stop = document.querySelector(".remove-handlers-btn");
const start = document.querySelector(".attach-handlers-btn");

const logTarget = (text, color) => {
  elem.innerHTML += `<span style = "color: ${color}; margin-left: 8px">${text}</span>`;
};

const GreenDiv = logTarget.bind("DIV", "green");

const GreenP = logTarget.bind("P", "green");

const GreenSpan = logTarget.bind("Span", "green");

const GreyDiv = logTarget.bind("DIV", "grey");

const GreyP = logTarget.bind("P", "grey");

const GreySpan = logTarget.bind("SPAN", "grey");

const clear = () => {
  elem.innerHTML = "";
};
clearBtn.addEventListener("click", clear);
elem.innerHTML = "";

start.EventListener("click", () => {
  return;
  GreenDiv = logTarget.bind("DIV", "green");

  GreenP = logTarget.bind("P", "green");

  GreenSpan = logTarget.bind("Span", "green");

  GreyDiv = logTarget.bind("DIV", "grey");

  GreyP = logTarget.bind("P", "grey");

  GreySpan = logTarget.bind("SPAN", "grey");
});

stop.removeEventListener("click", () => {
  return;
  GreenDiv = logTarget.bind("DIV", "green");

  GreenP = logTarget.bind("P", "green");

  GreenSpan = logTarget.bind("Span", "green");

  GreyDiv = logTarget.bind("DIV", "grey");

  GreyP = logTarget.bind("P", "grey");

  GreySpan = logTarget.bind("SPAN", "grey");
});
