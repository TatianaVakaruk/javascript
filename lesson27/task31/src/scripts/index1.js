import { getItem, setItem } from "./storage";
const listElem = document.querySelector(".list");

const tasksList = [
  { text: "Buy milk", done: false, id: "1" },
  { text: "Pick up Tom from airport", done: false, id: "2" },
  { text: "Visit party", done: false, id: "3" },
  { text: "Visit doctor", done: true, id: "4" },
  { text: "Buy meat", done: true, id: "5" },
];

export const renderTasks = (tasks) => {
  listElem.innerHTML = "";
  const tasksElems = tasks
    .slice()
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement("li");
      listItemElem.classList.add("list__item");
      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.setAttribute("data-id", id);
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

renderTasks(tasksList);

export const onToggleTask = (e) => {
  const isCheckbox = e.target.classList.contains("list__item-checkbox");

  if (!isCheckbox) {
    return;
  }

  const taskData = tasksList.find((task) => task.id === e.target.dataset.id);
  Object.assign(taskData, { done: e.target.checked });
  setItem("taskList", tasksList);
  renderTasks(tasksList);
};

listElem.addEventListener("click", onToggleTask);

export const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector(".task-input");

  const text = taskTitleInputElem.value;

  if (!text) {
    return;
  }
  taskTitleInputElem.value = "";
  const taskList = getItem("taskList") || [];
  const newTaskList = taskList.concat({
    text,
    done: false,
    id: Math.random().toString(),
  });
  setItem("taskList", newTaskList);
  renderTasks(tasksList);
};

const createBtnElem = document.querySelector(".create-task-btn");
createBtnElem.addEventListener("click", onCreateTask);
