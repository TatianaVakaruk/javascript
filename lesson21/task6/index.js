export function setButton(buttonText) {
  buttonText = "text button";
  const button1 = document.querySelector("body");
  button1.innerHTML = "<button>" + buttonText + "</button>";

  return button1;
}
console.log(setButton("text button"));
