export { onCreateTask } from "./createTask.js";
export { onToggeleTask } from "./updateTask.js";
export const initTodoListHandlers = () => {
  const createBtnElem = document.querySelector(".create-task-btn");
  createBtnElem.addEventListener("click", onCreateTask);
  const todoListElem = document.querySelector(".list");
  todoListElem.addEventListener("click", onToggeleTask);
};
