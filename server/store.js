let mysql = require("mysql");

let HOST = "";
let PORT = "";
let USER_NAME = "";
let PASSWORD = "";
let DATABASE = "todo";

let connection = mysql.createConnection({
  host: HOST,
  port: PORT,
  user: USER_NAME,
  password: PASSWORD,
  database: DATABASE,
});

connection.connect();

const ADD_TASK = `INSERT INTO tasks (id,description,created_at) VALUES (?, ?, ?)`;

const add_task = () => {
  connection.beginTransaction(function (err) {
    if (err) {
      throw err;
    }
    connection.query(ADD_TASK, {}, function (error, results, fields) {
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
    });
  });
};
