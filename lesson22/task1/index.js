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
  return (
    divElem.addEventListener("click", GreenDiv),
    pElem.addEventListener("click", GreenP),
    spanElem.addEventListener("click", GreenSpan),
    divElem.addEventListener("click", GreyDiv, true),
    pElem.addEventListener("click", GreyP, true),
    spanElem.addEventListener("click", GreySpan, true)
  );
});

stop.removeEventListener("click", () => {
  return (
    divElem.addEventListener("click", GreenDiv),
    pElem.addEventListener("click", GreenP),
    spanElem.addEventListener("click", GreenSpan),
    divElem.addEventListener("click", GreyDiv, true),
    pElem.addEventListener("click", GreyP, true),
    spanElem.addEventListener("click", GreySpan, true)
  );
});
