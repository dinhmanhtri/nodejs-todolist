const fs = require("fs");

const readAllTask = () => {
  const buffer = fs.readFileSync("task.json", "utf-8"); // Mã hex
  // chuyển sang Object
  const taskObject = JSON.parse(buffer);
  return taskObject;
};

const createTask = (title, description) => {
  const newTask = {
    id: Math.random().toString(),
    title,
    description,
  };
  let taskList = readAllTask();
  taskList = [...taskList, newTask];
  fs.writeFileSync("task.json", JSON.stringify(taskList));
  return newTask;
};

readDetailTask = (id) => {
  const taskList = readAllTask();
  // for (let i = 0; i < taskList.length; i++) {
  //   if (taskList[i].id === id) {
  //     return taskList[i];
  //   }
  // }
  let task = taskList.find((task) => id === task.id);
  return task;
};

const updateTask = (id, title, description) => {
  const taskList = readAllTask();
  let index = taskList.findIndex((task) => task.id === id);
  if (index !== -1) {
    // Thực hiện update
    let oldTask = taskList[index];
    let newTask = { ...oldTask, title, description };
    taskList[index] = newTask;
    fs.writeFileSync("task.json", JSON.stringify(taskList));
    return newTask;
  } else {
    // Thông báo cho người dùng biết nếu không tìm thấy
    return false;
  }
};

module.exports = {
  readAllTask,
  createTask,
  readDetailTask,
  updateTask,
};
