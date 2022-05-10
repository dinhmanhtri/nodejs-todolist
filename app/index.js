// import yargs from "yargs"; // ES6

const yargs = require("yargs"); // ES5 ( common js )
const fs = require('fs');
const readAllTask = require('./model/task');
console.log(`Đây là code hay cực kỳ`);

// Tạo lệnh test
// node app/index.js test
yargs.command({
  command: "test",
  handler: () => {
    console.log("Test");
  },
});

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
    console.log("title: ", title);
    console.log("description: ", description);
    console.log("create");
  },
});

// read-all - node app/index.js read-all
yargs.command({
  command: "read-all",
  handler: () => {
    const result = readAllTask();
    console.log(result);
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
    console.log(id);
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
    console.log(id, title, description);
    console.log("update");
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
    console.log(`id : ${id}`);
    console.log("delete success");
  },
});

// Lưu lại các lệnh vừa tạo
yargs.parse();
