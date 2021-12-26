import create from "./create";
import {
  getCurrentTask,
  getprojects,
  setCurentTask,
  setprojects,
} from "./localProjects";
import {
  getCurrentProject,
  setCurrentProject,
} from "../my_modules/localProjects";
import { deleteTask, taskEvents } from "./eventListeners";

let content = create("div");
content.id = "content";

let header = create("h2");
header.innerHTML = "Tasks";

let tasks = create("div");
tasks.id = "tasks";

let message = create("p");

let inputSection = create("input");
inputSection.id = "taskInput";
inputSection.classList.add("projectInput");
inputSection.placeholder = "Enter task";

let addTaskButton = create("button");
addTaskButton.id = "addTaskButton";
addTaskButton.innerHTML = "Add new task";

let deleteTaskButton = create("button");
deleteTaskButton.id = "deleteTaskButton";
deleteTaskButton.innerHTML = "Delete task";
deleteTaskButton.addEventListener("click",deleteTask)

let buttonsContainer = create("div");
buttonsContainer.classList.add("buttonContainer");
buttonsContainer.append(addTaskButton, deleteTaskButton);

content.append(header, inputSection, buttonsContainer, message, tasks);

export function renderContent() {
  let projects = getprojects();
  if (projects.length < 1) {
    tasks.innerHTML = "";
  } else {
    let currentProject = getCurrentProject();
    let taskList = projects[currentProject].taskList;
    tasks.innerHTML = "";
    if (taskList) {
      if (taskList.length < 1) {
        // if empty taskList show message
        message.innerHTML = "Sorry you have no tasks here";
      } else {
        // if not empty taksList show tasks
        message.innerHTML = "";

        for (let i = 0; i < taskList.length; i++) {
          let item = create("div");
          item.innerHTML = taskList[i].title;
          item.id = taskList[i].id;
          item.classList.add("task");
          // add active task class to task clicked
          item.addEventListener("click", (e) => {
            setCurentTask(e.target.id);
            let items = Array.from(tasks.querySelectorAll(".task"));
            items.forEach((item) => {
              let currentTask = getCurrentTask();
              item.classList.remove("activeTask");
              if (item.id == currentTask) {
                item.classList.add("activeTask");
              }
            });
          });
          tasks.append(item);
        }
      }
    } else {
      taskList = [];
    }
  }
}
export default content;

// add delete task functionality/
