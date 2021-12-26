import create from "./create";
import { setprojects, getprojects, deleteProject, addNewProject } from "../my_modules/localProjects";
import eventListeners, { projectEvents } from "./eventListeners";

let projects = getprojects();

// nav elements
let nav = create("div");
let navItems = create("div");
navItems.id = "navItems";

// render nav function
export default function renderNav() {
  nav.innerHTML = "";
  let projects = getprojects();
  let inputSection = create("input");
  inputSection.id = "projectInput";
  inputSection.placeholder = "Enter project title";

  let header = create("h2");

  let buttonContainer = create("div");
  buttonContainer.classList.add("buttonContainer");
  let createButton = create("button");
  createButton.innerHTML = "Add new project";
  createButton.id = "addNewProject";
  createButton.addEventListener("click",addNewProject)
  let deleteButton = create("button");
  deleteButton.innerHTML = "Delete project";
  deleteButton.id = "deleteProject";
  deleteButton.addEventListener("click",deleteProject)
  buttonContainer.append(createButton, deleteButton);

  header.innerHTML = "Projects";
  nav.id = "nav";
  nav.append(header, inputSection, buttonContainer, navItems);
  appendNavItems(projects);

  return nav;
}

export function appendNavItems(projects) {
  if(projects.length > 0){
    navItems.innerHTML = "";
    for (let i = 0; i < projects.length; i++) {
      let item = create("div");
      item.innerHTML = projects[i].title;
      item.classList.add("project");
      item.id = projects[i].id;
      navItems.append(item);
    }
    projectEvents();
  }else{
    navItems.innerHTML = "Sorry you have no projects";

  }
}
