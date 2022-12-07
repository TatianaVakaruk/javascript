import { initTodoListHandlers } from "./todoList.js";
import { renderTasks } from "./render.js";
document.addEventListener("DOMContentLoaded", () => {
  renderTask();
  initTodoListHandlers();
});
const onStorageChange = (e) => {
  if (e.key === "tasksList") {
    renderTask();
  }
};
window.addEventListener("storage", onStorageChange);
