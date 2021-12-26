import { appendNavItems } from "./nav";
import renderNav from "../my_modules/nav";
import { renderContent } from "./content";

export function setprojects(projects) {
  localStorage.projects = JSON.stringify(projects);
}

export function getprojects() {
  let projects = JSON.parse(localStorage.projects);
  setProjectIds(projects);
  setprojects(projects);
  return projects;
}

export function setCurrentProject(i = 0) {
  localStorage.currentProject = i;
}

export function setCurentTask(task) {
  localStorage.currentTask = task;
  // console.log(localStorage.currentTask)
}

export function getCurrentTask() {
  return localStorage.currentTask;
}

export function getCurrentProject() {
  return localStorage.currentProject;
}

export function addNewProject() {
  let projects = getprojects();
  let input = document.querySelector("#projectInput");
  if (input.value) {
    projects.push({ title: input.value, taskList: [] });
    setProjectIds(projects);
    setTaskIds();
    appendNavItems(projects);
    setprojects(projects);
    input.value = "";
  } else {
    alert("project must have a title");
  }
}

function setProjectIds(projects) {
  for (let i = 0; i < projects.length; i++) {
    projects[i].id = i;
    for (let j = 0; j < projects[i].taskList.length; j++) {
      projects[i].taskList[j].id = j;
    }
  }
}

export function deleteProject() {
  let projects = getprojects();
  let currentProject = getCurrentProject();
  projects.splice(currentProject, 1);
  setprojects(projects);
  renderNav();
  setCurrentProject();
  renderContent();
}

export function setTaskIds() {
  let projects = getprojects();
  projects.forEach((project) => {
    for (let i = 0; i < project.taskList.length; i++) {
      project.taskList[i].id = i;
    }
  });
  setprojects(projects);
}
