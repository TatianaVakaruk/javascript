export function getTitle() {
  const titleText = document.querySelector(".title");
  const text = titleText.textContent;
  return text;
}

export function getDescription() {
  const descriptionText = document.querySelector(".about");
  const text = descriptionText.innerText;
  return text;
}

export function getPlans() {
  const plansText = document.querySelector(".plans");
  const text = plansText.innerHTML;
  return text;
}

export function getGoal() {
  const goalText = document.querySelector(".goal");
  const text = goalText.outerHTML;
  return text;
}
