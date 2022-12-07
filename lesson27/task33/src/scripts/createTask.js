import { renderTask } from "./render.js";
import { getItem, setItem } from "./storage.js";
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
    createData: newData().toISOString(),
    id: Math.random().toString(),
  });
  setItem("taskList", newTaskList);
  renderTask();
};
