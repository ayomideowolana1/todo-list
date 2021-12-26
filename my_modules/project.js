// project class
export default class Project {
  constructor(title, taskList = []) {
    this.title = title;
    this.taskList = taskList;
    this.addTask = (task) => {
      this.taskList.push(task);
      this.setIds()
    };
    // set id for each task
    this.setIds = () => {
      for (let i = 0; i < this.taskList.length; i++) {
        this.taskList[i].id = i;
      }
    };
    this.setIds();
  }
}
