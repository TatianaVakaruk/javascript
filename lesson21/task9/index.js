export function finishList() {
  let li = document.createElement("li");
  li.textContent = "8";
  document.querySelector("ul").append(li);
  let li1 = document.createElement("li");
  li1.textContent = "1";
  document.querySelector("ul").prepend(li1);
  let li2 = document.createElement("li");
  li2.textContent = "4";
  document.querySelector(".special").before(li2);
  let li3 = document.createElement("li");
  li3.textContent = "6";
  document.querySelector(".special").after(li3);
  return li, li1, li2, li3;
}
console.log(finishList());
