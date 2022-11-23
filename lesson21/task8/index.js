export function createButton(buttonText) {
  const button1 = document.createElement("button");
  button1.textContent = buttonText;
  document.body.append(button1);
  return button1;
}
