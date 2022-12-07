import { renderTask } from "./render.js";
import { getItem, setItem } from "./scripts/storage.js";

export const onToggeleTask = (e) => {
  const isCheckbox = e.target.classList.contains("list__item-checkbox");

  if (!isCheckbox) {
    return;
  }
  const taskList = getItem("taskList");
  const newTaskList = taskList.map((tasks) => {
    if (taskList.id === e.target.dataset.id) {
      const done = e.target.checked;
      return {
        ...tasks,
        done,
        finishtData: done ? newData().toISOString() : null,
      };
    }
    return tasks;
  });
  setItem("taskList", newTaskList);
  renderTask();
};
