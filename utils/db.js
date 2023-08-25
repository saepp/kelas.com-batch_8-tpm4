import mysql from "mysql2/promise";

const dbPool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "batch_8",
  port: 3306,
});

export default dbPool;
