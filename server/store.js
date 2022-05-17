let mysql = require("mysql");

let HOST = "localhost";
let PORT = "3306";
let USER_NAME = "sammy";
let PASSWORD = "password";
let DATABASE = "todo";

let connection = mysql.createConnection({
  host: HOST,
  port: PORT,
  user: USER_NAME,
  password: PASSWORD,
  database: DATABASE,
});

connection.connect();

const ADD_TASK = `INSERT INTO tasks (id,description) VALUES (?,?)`;

const add_task = (id, description, created_at) => {
  connection.beginTransaction(function (err) {
    if (err) {
      throw err;
    }
    connection.query(
      ADD_TASK,
      [id, description],
      function (error, results, fields) {
        if (error) {
          return connection.rollback(function () {
            throw error;
          });
        }
        connection.commit(function (err) {
          if (err) {
            return connection.rollback(function () {
              throw err;
            });
          }
          console.log("success!");
        });
      }
    );
  });
};

exports.add_task = add_task;
