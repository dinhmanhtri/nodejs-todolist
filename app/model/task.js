const fs = require("fs");
const readAllTask = () => {
  const buffer = fs.readFileSync("task.json", "utf-8"); // Mã hex
  // chuyển sang Object
  const taskObject = JSON.parse(buffer);
  return taskObject;
};
module.exports = readAllTask;