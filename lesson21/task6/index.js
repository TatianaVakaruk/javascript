export function setButton(buttonText) {
  buttonText = "text button";
  const button1 = document.querySelector("body");
  button1.innerHTML = "<button>" + buttonText + "</button>";
  const button2 = document.querySelector("body");
  button2.textContent = "<button>" + buttonText + "</button>";
  return button1, button2;
}
console.log(setButton("text button"));
