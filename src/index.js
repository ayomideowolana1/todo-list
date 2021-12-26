import create from "../my_modules/create";
import { setprojects, getprojects } from "../my_modules/localProjects";
import {
  getCurrentProject,
  setCurrentProject,
} from "../my_modules/localProjects";
import Task from "../my_modules/task";
import Project from "../my_modules/project";
import header from "../my_modules/header";
import renderNav from "../my_modules/nav";
import content, { renderContent } from "../my_modules/content";
import "../src/styles.css";
import eventListeners from "../my_modules/eventListeners";

setCurrentProject();
let currentProject = getCurrentProject();
renderContent();

let task1 = new Task("walk dog");
let task2 = new Task("feed dog");
let task3 = new Task("bath dog");
let project1 = new Project("dog", [task1, task2]);

let task4 = new Task("walk cat");
let task5 = new Task("feed cat");
let task6 = new Task("bath cat");
let project2 = new Project("cat", [task4, task5]);

project1.addTask(task3);
setprojects([project1, project2]);

let body = document.querySelector("body");

let main = create("main");

main.append(renderNav(), content);

body.append(header, main);

eventListeners();

let projects = Array.from(document.querySelectorAll(".project"));
projects[0].classList.add("active");



