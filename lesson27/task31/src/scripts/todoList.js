import { onCreateTask, onToggleTask } from "./scripts/index1";
export const initTodoListHandles = () => {
  const createBtnElem = document.querySelector(".task-input");
  createBtnElem.addEventListener("click", onCreateTask);
  const todoListElem = document.querySelector(".list");
  todoListElem.addEventListener("click", onToggleTask);
};
