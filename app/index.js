// import yargs from "yargs"; // ES6

const yargs = require("yargs"); // ES5 ( common js )
const fs = require("fs");
const chalk = require("chalk");
const {
  readAllTask,
  createTask,
  readDetailTask,
  updateTask,
  removeTaskById,
} = require("./model/task");

// CRUD

// create - node app/index.js create --title="Hello" --description="Very easy"
yargs.command({
  command: "create",
  builder: {
    title: {
      type: "string",
    },
    description: {
      type: "string",
    },
  },
  handler: (args) => {
    const { title, description } = args;
    const newTask = createTask(title, description);
    console.log(`Đã tạo mới công việc thành công: `, newTask);
  },
});

// read-all - node app/index.js read-all
yargs.command({
  command: "read-all",
  handler: () => {
    const result = readAllTask();
    console.log(chalk.blue("taskJson : "), result);
  },
});

// read-detail - node app/index.js read-detail --id="123"
yargs.command({
  command: "read-detail",
  builder: {
    id: {
      type: "string",
    },
  },
  handler: (args) => {
    const { id } = args;
    const task = readDetailTask(id);
    if (task) {
      console.log("task: ", task);
    } else {
      console.log("Not found");
    }
  },
});

// update - node app/index.js update --id="123" --title="Hoc JS" --description="Very difficult"
yargs.command({
  command: "update",
  builder: {
    id: {
      type: "string",
    },
    title: {
      type: "string",
    },
    description: {
      type: "string",
    },
  },
  handler: (args) => {
    const { id, title, description } = args;
    const task = updateTask(id, title, description);
    if (task) {
      console.log("Task updated", task);
    } else {
      console.log("Not Found!");
    }
  },
});

// delete - node app/index.js delete --id="123"
yargs.command({
  command: "delete",
  builder: {
    id: {
      type: "string",
    },
  },
  handler: (args) => {
    const { id } = args;
    const task = removeTaskById(id);
    if (task) {
      console.log("Delete task: ", task);
    } else {
      console.log(chalk.red("Not found!"));
    }
  },
});

// Lưu lại các lệnh vừa tạo
yargs.parse();
