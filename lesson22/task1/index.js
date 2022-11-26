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
divElem.addEventListener("click", GreenDiv);

const GreenP = logTarget.bind("P", "green");
pElem.addEventListener("click", GreenP);

const GreenSpan = logTarget.bind("Span", "green");
spanElem.addEventListener("click", GreenSpan);

const GreyDiv = logTarget.bind("DIV", "grey");
divElem.addEventListener("click", GreyDiv, true);

const GreyP = logTarget.bind("P", "grey");
pElem.addEventListener("click", GreyP, true);

const GreySpan = logTarget.bind("SPAN", "grey");
spanElem.addEventListener("click", GreySpan, true);
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