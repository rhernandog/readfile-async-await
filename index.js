const fs = require("fs");
const path = require("path");

const getData = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname + filePath), (err, data) => {
      if (!err) {
        resolve(JSON.parse(data));
      } else {
        reject(err);
      }
    });
  });
};

const getAllUsers = async () => {
  try {
    const allUsers = await getData("/data/users.json");
    console.log(allUsers);
  } catch (err) {
    console.error(err);
  }
};

getAllUsers();
