export function finishForm() {
  let input = document.createElement("input");
  input.setAttribute("name", "login");
  input.setAttribute("type", "password");
  input.querySelector(".login-form").prepend(input);
  return input;
}
