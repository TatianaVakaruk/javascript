export function clearList() {
  text = document.querySelector(".categories");
  text.innerHTML = "";
  return text;
}
console.log(clearList());
