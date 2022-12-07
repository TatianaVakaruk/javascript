import { initTodoListHandles } from "./todoList";
import { renderTasks } from "./index1";
document.addEventListener("DOMContentLoaded", () => {
  renderTasks();
  initTodoListHandles();
});
const onStorageChange = (e) => {
  if (e.key === "taskList") {
    renderTasks();
  }
};
window.addEventListener("storage", onStorageChange);
