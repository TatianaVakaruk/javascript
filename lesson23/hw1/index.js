let tasks = [
  { text: "Buy milk", done: false },
  { text: "Pick up Tom from airport", done: false },
  { text: "Visit party", done: false },
  { text: "Visit doctor", done: true },
  { text: "Buy meat", done: true },
];

const listElem = document.querySelector(".list");

const renderTasks = (tasksList) => {
  let count = 1;
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }, i) => {
      const listItemElem = document.createElement("li");
      listItemElem.classList.add("list__item");
      listItemElem.dataset.id = count;
      tasksList[i].id = count;
      count++;
      console.log(i);

      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.checked = done;
      checkbox.classList.add("list__item-checkbox");
      if (done) {
        listItemElem.classList.add("list__item_done");
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

const btnEl = document.querySelector(".create-task-btn");
function addTask() {
  const taskInputEl = document.querySelector(".task-input");
  const taskText = taskInputEl.value;
  if (taskText !== "") {
    const newTask = { text: taskText, done: false };
    tasks = [...tasks, newTask];
    const ulEl = document.querySelector(".list");
    ulEl.innerHTML = "";
    renderTasks(tasks);
  }
}

btnEl.addEventListener("click", addTask);

const ulEl = document.querySelector(".list");
ulEl.addEventListener("click", function (event) {
  const target = event.target;
  if (target.type === "checkbox") {
    const a = target.closest(".list__item");
    console.log(a);

    const d = tasks.find((el) => el.id === +a.dataset.id);
    d.done = !d.done;
    target.checked = d.done;
    a.classList.toggle("list__item_done");

    console.log(tasks);
    console.log(d);
    console.log(a);
  }
});
