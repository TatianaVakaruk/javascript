export function finishForm() {
  let input = document.createElement("input");
  input.setAttribute("name", "login");
  input.setAttribute("type", "password");
  document.querySelector(".login-form").prepend(input);
  return input;
}
finishForm();
