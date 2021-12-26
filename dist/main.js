/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./my_modules/content.js":
/*!*******************************!*\
  !*** ./my_modules/content.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderContent\": () => (/* binding */ renderContent),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ \"./my_modules/create.js\");\n/* harmony import */ var _localProjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../my_modules/localProjects */ \"./my_modules/localProjects.js\");\n/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventListeners */ \"./my_modules/eventListeners.js\");\n\n\n\n\n\nlet content = (0,_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\");\ncontent.id = \"content\";\n\nlet header = (0,_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"h2\");\nheader.innerHTML = \"Tasks\";\n\nlet tasks = (0,_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\");\ntasks.id = \"tasks\";\n\nlet message = (0,_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"p\");\n\nlet inputSection = (0,_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"input\");\ninputSection.id = \"taskInput\";\ninputSection.classList.add(\"projectInput\");\ninputSection.placeholder = \"Enter task\";\n\nlet addTaskButton = (0,_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"button\");\naddTaskButton.id = \"addTaskButton\";\naddTaskButton.innerHTML = \"Add new task\";\n\nlet deleteTaskButton = (0,_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"button\");\ndeleteTaskButton.id = \"deleteTaskButton\";\ndeleteTaskButton.innerHTML = \"Delete task\";\ndeleteTaskButton.addEventListener(\"click\",_eventListeners__WEBPACK_IMPORTED_MODULE_2__.deleteTask)\n\nlet buttonsContainer = (0,_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\");\nbuttonsContainer.classList.add(\"buttonContainer\");\nbuttonsContainer.append(addTaskButton, deleteTaskButton);\n\ncontent.append(header, inputSection, buttonsContainer, message, tasks);\n\nfunction renderContent() {\n  let projects = (0,_localProjects__WEBPACK_IMPORTED_MODULE_1__.getprojects)();\n  if (projects.length < 1) {\n    tasks.innerHTML = \"\";\n  } else {\n    let currentProject = (0,_localProjects__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject)();\n    let taskList = projects[currentProject].taskList;\n    tasks.innerHTML = \"\";\n    if (taskList) {\n      if (taskList.length < 1) {\n        // if empty taskList show message\n        message.innerHTML = \"Sorry you have no tasks here\";\n      } else {\n        // if not empty taksList show tasks\n        message.innerHTML = \"\";\n\n        for (let i = 0; i < taskList.length; i++) {\n          let item = (0,_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\");\n          item.innerHTML = taskList[i].title;\n          item.id = taskList[i].id;\n          item.classList.add(\"task\");\n          // add active task class to task clicked\n          item.addEventListener(\"click\", (e) => {\n            (0,_localProjects__WEBPACK_IMPORTED_MODULE_1__.setCurentTask)(e.target.id);\n            let items = Array.from(tasks.querySelectorAll(\".task\"));\n            items.forEach((item) => {\n              let currentTask = (0,_localProjects__WEBPACK_IMPORTED_MODULE_1__.getCurrentTask)();\n              item.classList.remove(\"activeTask\");\n              if (item.id == currentTask) {\n                item.classList.add(\"activeTask\");\n              }\n            });\n          });\n          tasks.append(item);\n        }\n      }\n    } else {\n      taskList = [];\n    }\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (content);\n\n// add delete task functionality/\n\n\n//# sourceURL=webpack://todo-list/./my_modules/content.js?");

/***/ }),

/***/ "./my_modules/create.js":
/*!******************************!*\
  !*** ./my_modules/create.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ create)\n/* harmony export */ });\nfunction create(elem){\n    return document.createElement(elem)\n}\n\n//# sourceURL=webpack://todo-list/./my_modules/create.js?");

/***/ }),

/***/ "./my_modules/eventListeners.js":
/*!**************************************!*\
  !*** ./my_modules/eventListeners.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ eventListeners),\n/* harmony export */   \"projectEvents\": () => (/* binding */ projectEvents),\n/* harmony export */   \"taskCompleted\": () => (/* binding */ taskCompleted),\n/* harmony export */   \"deleteTask\": () => (/* binding */ deleteTask)\n/* harmony export */ });\n/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content */ \"./my_modules/content.js\");\n/* harmony import */ var _localProjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localProjects */ \"./my_modules/localProjects.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ \"./my_modules/task.js\");\n\n\n\n\n\n\nfunction eventListeners() {\n  projectEvents();\n  let addTaskButton = document.querySelector(\"#addTaskButton\");\n  let taskInput = document.querySelector(\"#taskInput\");\n  addTaskButton.addEventListener(\"click\", () => {\n    if (taskInput.value) {\n      let projects = (0,_localProjects__WEBPACK_IMPORTED_MODULE_1__.getprojects)();\n      let currentProject = (0,_localProjects__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject)();\n      let task = new _task__WEBPACK_IMPORTED_MODULE_2__[\"default\"](taskInput.value);\n      taskInput.value = \"\";\n      projects[currentProject].taskList.push(task);\n      (0,_localProjects__WEBPACK_IMPORTED_MODULE_1__.setprojects)(projects);\n      (0,_content__WEBPACK_IMPORTED_MODULE_0__.renderContent)();\n    } else {\n      alert(\"cannot add empty task\");\n    }\n  });\n}\n\nfunction projectEvents() {\n  let projects = Array.from(document.querySelectorAll(\".project\"));\n  projects.forEach((project) => {\n    project.addEventListener(\"click\", (e) => {\n      projects.forEach((project) => {\n        project.classList.remove(\"active\");\n      });\n      (0,_localProjects__WEBPACK_IMPORTED_MODULE_1__.setCurrentProject)(\"\");\n      (0,_localProjects__WEBPACK_IMPORTED_MODULE_1__.setCurrentProject)(e.target.id);\n      e.target.classList.add(\"active\");\n      (0,_content__WEBPACK_IMPORTED_MODULE_0__.renderContent)();\n    });\n  });\n}\n\nfunction taskCompleted(task) {\n  let projects = (0,_localProjects__WEBPACK_IMPORTED_MODULE_1__.getprojects)();\n  let currentProject = (0,_localProjects__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject)();\n  if (projects[currentProject].taskList[task].done) {\n    projects[currentProject].taskList[task].done = false;\n  } else {\n    projects[currentProject].taskList[task].done = true;\n  }\n  return projects;\n}\n\nfunction deleteTask() {\n  let projects = (0,_localProjects__WEBPACK_IMPORTED_MODULE_1__.getprojects)();\n  let currentProject = (0,_localProjects__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject)();\n  let currentTask = (0,_localProjects__WEBPACK_IMPORTED_MODULE_1__.getCurrentTask)();\n  projects[currentProject].taskList.splice(currentTask, 1);\n  (0,_localProjects__WEBPACK_IMPORTED_MODULE_1__.setprojects)(projects);\n  (0,_content__WEBPACK_IMPORTED_MODULE_0__.renderContent)();\n}\n\n\n//# sourceURL=webpack://todo-list/./my_modules/eventListeners.js?");

/***/ }),

/***/ "./my_modules/header.js":
/*!******************************!*\
  !*** ./my_modules/header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ \"./my_modules/create.js\");\n\n\nlet header = (0,_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"h1\");\nheader.innerHTML = \"Project Manager\";\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);\n\n\n//# sourceURL=webpack://todo-list/./my_modules/header.js?");

/***/ }),

/***/ "./my_modules/localProjects.js":
/*!*************************************!*\
  !*** ./my_modules/localProjects.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setprojects\": () => (/* binding */ setprojects),\n/* harmony export */   \"getprojects\": () => (/* binding */ getprojects),\n/* harmony export */   \"setCurrentProject\": () => (/* binding */ setCurrentProject),\n/* harmony export */   \"setCurentTask\": () => (/* binding */ setCurentTask),\n/* harmony export */   \"getCurrentTask\": () => (/* binding */ getCurrentTask),\n/* harmony export */   \"getCurrentProject\": () => (/* binding */ getCurrentProject),\n/* harmony export */   \"addNewProject\": () => (/* binding */ addNewProject),\n/* harmony export */   \"deleteProject\": () => (/* binding */ deleteProject),\n/* harmony export */   \"setTaskIds\": () => (/* binding */ setTaskIds)\n/* harmony export */ });\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../my_modules/nav */ \"./my_modules/nav.js\");\n/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content */ \"./my_modules/content.js\");\n\n\n\n\nfunction setprojects(projects) {\n  localStorage.projects = JSON.stringify(projects);\n}\n\nfunction getprojects() {\n  let projects = JSON.parse(localStorage.projects);\n  setProjectIds(projects);\n  setprojects(projects);\n  return projects;\n}\n\nfunction setCurrentProject(i = 0) {\n  localStorage.currentProject = i;\n}\n\nfunction setCurentTask(task) {\n  localStorage.currentTask = task;\n  // console.log(localStorage.currentTask)\n}\n\nfunction getCurrentTask() {\n  return localStorage.currentTask;\n}\n\nfunction getCurrentProject() {\n  return localStorage.currentProject;\n}\n\nfunction addNewProject() {\n  let projects = getprojects();\n  let input = document.querySelector(\"#projectInput\");\n  if (input.value) {\n    projects.push({ title: input.value, taskList: [] });\n    setProjectIds(projects);\n    setTaskIds();\n    (0,_nav__WEBPACK_IMPORTED_MODULE_0__.appendNavItems)(projects);\n    setprojects(projects);\n    input.value = \"\";\n  } else {\n    alert(\"project must have a title\");\n  }\n}\n\nfunction setProjectIds(projects) {\n  for (let i = 0; i < projects.length; i++) {\n    projects[i].id = i;\n    for (let j = 0; j < projects[i].taskList.length; j++) {\n      projects[i].taskList[j].id = j;\n    }\n  }\n}\n\nfunction deleteProject() {\n  let projects = getprojects();\n  let currentProject = getCurrentProject();\n  projects.splice(currentProject, 1);\n  setprojects(projects);\n  (0,_nav__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  setCurrentProject();\n  (0,_content__WEBPACK_IMPORTED_MODULE_1__.renderContent)();\n}\n\nfunction setTaskIds() {\n  let projects = getprojects();\n  projects.forEach((project) => {\n    for (let i = 0; i < project.taskList.length; i++) {\n      project.taskList[i].id = i;\n    }\n  });\n  setprojects(projects);\n}\n\n\n//# sourceURL=webpack://todo-list/./my_modules/localProjects.js?");

/***/ }),

/***/ "./my_modules/nav.js":
/*!***************************!*\
  !*** ./my_modules/nav.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderNav),\n/* harmony export */   \"appendNavItems\": () => (/* binding */ appendNavItems)\n/* harmony export */ });\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ \"./my_modules/create.js\");\n/* harmony import */ var _my_modules_localProjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../my_modules/localProjects */ \"./my_modules/localProjects.js\");\n/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventListeners */ \"./my_modules/eventListeners.js\");\n\n\n\n\nlet projects = (0,_my_modules_localProjects__WEBPACK_IMPORTED_MODULE_1__.getprojects)();\n\n// nav elements\nlet nav = (0,_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\");\nlet navItems = (0,_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\");\nnavItems.id = \"navItems\";\n\n// render nav function\nfunction renderNav() {\n  nav.innerHTML = \"\";\n  let projects = (0,_my_modules_localProjects__WEBPACK_IMPORTED_MODULE_1__.getprojects)();\n  let inputSection = (0,_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"input\");\n  inputSection.id = \"projectInput\";\n  inputSection.placeholder = \"Enter project title\";\n\n  let header = (0,_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"h2\");\n\n  let buttonContainer = (0,_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\");\n  buttonContainer.classList.add(\"buttonContainer\");\n  let createButton = (0,_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"button\");\n  createButton.innerHTML = \"Add new project\";\n  createButton.id = \"addNewProject\";\n  createButton.addEventListener(\"click\",_my_modules_localProjects__WEBPACK_IMPORTED_MODULE_1__.addNewProject)\n  let deleteButton = (0,_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"button\");\n  deleteButton.innerHTML = \"Delete project\";\n  deleteButton.id = \"deleteProject\";\n  deleteButton.addEventListener(\"click\",_my_modules_localProjects__WEBPACK_IMPORTED_MODULE_1__.deleteProject)\n  buttonContainer.append(createButton, deleteButton);\n\n  header.innerHTML = \"Projects\";\n  nav.id = \"nav\";\n  nav.append(header, inputSection, buttonContainer, navItems);\n  appendNavItems(projects);\n\n  return nav;\n}\n\nfunction appendNavItems(projects) {\n  if(projects.length > 0){\n    navItems.innerHTML = \"\";\n    for (let i = 0; i < projects.length; i++) {\n      let item = (0,_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\");\n      item.innerHTML = projects[i].title;\n      item.classList.add(\"project\");\n      item.id = projects[i].id;\n      navItems.append(item);\n    }\n    (0,_eventListeners__WEBPACK_IMPORTED_MODULE_2__.projectEvents)();\n  }else{\n    navItems.innerHTML = \"Sorry you have no projects\";\n\n  }\n}\n\n\n//# sourceURL=webpack://todo-list/./my_modules/nav.js?");

/***/ }),

/***/ "./my_modules/project.js":
/*!*******************************!*\
  !*** ./my_modules/project.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n// project class\nclass Project {\n  constructor(title, taskList = []) {\n    this.title = title;\n    this.taskList = taskList;\n    this.addTask = (task) => {\n      this.taskList.push(task);\n      this.setIds()\n    };\n    // set id for each task\n    this.setIds = () => {\n      for (let i = 0; i < this.taskList.length; i++) {\n        this.taskList[i].id = i;\n      }\n    };\n    this.setIds();\n  }\n}\n\n\n//# sourceURL=webpack://todo-list/./my_modules/project.js?");

/***/ }),

/***/ "./my_modules/task.js":
/*!****************************!*\
  !*** ./my_modules/task.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\n// task class\nclass Task {\n  constructor(title) {\n      this.title = title;\n      this.done;\n      this.id;\n    }\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./my_modules/task.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  transition: 0.3s ease;\\n}\\n\\nbody {\\n  margin: 0px;\\n}\\n\\nh1 {\\n  background-color: #424242;\\n  color: whitesmoke;\\n  margin: 0px;\\n  padding: 15px;\\n  text-align: center;\\n}\\n\\nh2{\\n  border-bottom: 2px solid black;\\n  padding: 10px;\\n}\\n\\nmain {\\n  display: flex;\\n}\\n\\nmain > div {\\n  padding: 10px;\\n}\\n\\nmain #nav {\\n  flex: 1;\\n}\\n\\nmain #content {\\n  flex: 3;\\n}\\n\\n#contentContainer {\\n  border: 1px solid;\\n  padding: 10px;\\n  display: flex;\\n  max-width: 1200px;\\n  margin: auto;\\n}\\n\\n#contentContainer > div {\\n  border: 1px solid;\\n  padding: 5px;\\n}\\n\\n#projectsContainer {\\n  flex: 1;\\n}\\n#tasksContainer {\\n  flex: 2;\\n}\\n\\n.project {\\n  border: 1px solid black;\\n  font-size: 20px;\\n  margin-bottom: 10px;\\n  padding: 10px;\\n}\\n\\n.project:hover {\\n  border-color: transparent;\\n  box-shadow: 0px 0px 3px #424242;\\n}\\n\\n.task {\\n  border: 1px solid black;\\n  font-size: 20px;\\n  margin-bottom: 10px;\\n  padding: 10px;\\n}\\n\\n.taskDone {\\n  border-color: lawngreen;\\n}\\n\\nbutton {\\n  padding: 10px;\\n  margin-bottom: 10px;\\n  display: block;\\n}\\n\\ninput {\\n  padding: 10px;\\n  margin-bottom: 10px;\\n  width: 80%;\\n}\\n\\np{\\n  margin: 0px;\\n}\\n\\n.buttonContainer{\\n  display: flex;\\n  gap: 10px;\\n}\\n\\n.active{\\n  background-color: lightgreen;\\n  color: white;\\n}\\n\\n.activeTask{\\n  box-shadow: 0px 0px 3px green;\\n  border: none;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _my_modules_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../my_modules/create */ \"./my_modules/create.js\");\n/* harmony import */ var _my_modules_localProjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../my_modules/localProjects */ \"./my_modules/localProjects.js\");\n/* harmony import */ var _my_modules_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../my_modules/task */ \"./my_modules/task.js\");\n/* harmony import */ var _my_modules_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../my_modules/project */ \"./my_modules/project.js\");\n/* harmony import */ var _my_modules_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../my_modules/header */ \"./my_modules/header.js\");\n/* harmony import */ var _my_modules_nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../my_modules/nav */ \"./my_modules/nav.js\");\n/* harmony import */ var _my_modules_content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../my_modules/content */ \"./my_modules/content.js\");\n/* harmony import */ var _src_styles_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/styles.css */ \"./src/styles.css\");\n/* harmony import */ var _my_modules_eventListeners__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../my_modules/eventListeners */ \"./my_modules/eventListeners.js\");\n\n\n\n\n\n\n\n\n\n\n\n(0,_my_modules_localProjects__WEBPACK_IMPORTED_MODULE_1__.setCurrentProject)();\nlet currentProject = (0,_my_modules_localProjects__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject)();\n(0,_my_modules_content__WEBPACK_IMPORTED_MODULE_6__.renderContent)();\n\nlet task1 = new _my_modules_task__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"walk dog\");\nlet task2 = new _my_modules_task__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"feed dog\");\nlet task3 = new _my_modules_task__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"bath dog\");\nlet project1 = new _my_modules_project__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"dog\", [task1, task2]);\n\nlet task4 = new _my_modules_task__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"walk cat\");\nlet task5 = new _my_modules_task__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"feed cat\");\nlet task6 = new _my_modules_task__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"bath cat\");\nlet project2 = new _my_modules_project__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"cat\", [task4, task5]);\n\nproject1.addTask(task3);\n(0,_my_modules_localProjects__WEBPACK_IMPORTED_MODULE_1__.setprojects)([project1, project2]);\n\nlet body = document.querySelector(\"body\");\n\nlet main = (0,_my_modules_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"main\");\n\nmain.append((0,_my_modules_nav__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(), _my_modules_content__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n\nbody.append(_my_modules_header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], main);\n\n(0,_my_modules_eventListeners__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n\nlet projects = Array.from(document.querySelectorAll(\".project\"));\nprojects[0].classList.add(\"active\");\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;