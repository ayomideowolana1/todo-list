import { renderContent } from "./content";
import { getCurrentTask, getprojects, setprojects } from "./localProjects";
import {
  setCurrentProject,
  getCurrentProject,
  deleteProject,
} from "./localProjects";
import { addNewProject } from "./localProjects";
import Task from "./task";

export default function eventListeners() {
  projectEvents();
  let addTaskButton = document.querySelector("#addTaskButton");
  let taskInput = document.querySelector("#taskInput");
  addTaskButton.addEventListener("click", () => {
    if (taskInput.value) {
      let projects = getprojects();
      let currentProject = getCurrentProject();
      let task = new Task(taskInput.value);
      taskInput.value = "";
      projects[currentProject].taskList.push(task);
      setprojects(projects);
      renderContent();
    } else {
      alert("cannot add empty task");
    }
  });
}

export function projectEvents() {
  let projects = Array.from(document.querySelectorAll(".project"));
  projects.forEach((project) => {
    project.addEventListener("click", (e) => {
      projects.forEach((project) => {
        project.classList.remove("active");
      });
      setCurrentProject("");
      setCurrentProject(e.target.id);
      e.target.classList.add("active");
      renderContent();
    });
  });
}

export function taskCompleted(task) {
  let projects = getprojects();
  let currentProject = getCurrentProject();
  if (projects[currentProject].taskList[task].done) {
    projects[currentProject].taskList[task].done = false;
  } else {
    projects[currentProject].taskList[task].done = true;
  }
  return projects;
}

export function deleteTask() {
  let projects = getprojects();
  let currentProject = getCurrentProject();
  let currentTask = getCurrentTask();
  projects[currentProject].taskList.splice(currentTask, 1);
  setprojects(projects);
  renderContent();
}
