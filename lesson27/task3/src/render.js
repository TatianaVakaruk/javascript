import { initTodoListHandlers } from "./todoList";
import { onCreateTask } from "./createTask";
import { onToggeleTask } from "./updateTask";
import { getItem, setItem } from "./storage";
const listElem = document.querySelector(".list");

const tasks = [
  { text: "Buy milk", done: false, id: "1" },
  { text: "Pick up Tom from airport", done: false, id: "2" },
  { text: "Visit party", done: false, id: "3" },
  { text: "Visit doctor", done: true, id: "4" },
  { text: "Buy meat", done: true, id: "5" },
];

export const renderTasks = (tasksList) => {
  listElem.innerHTML = "";
  const tasksElems = tasksList
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

renderTasks(tasks);
