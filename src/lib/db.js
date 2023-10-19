import mysql from "mysql2";

const dbconnection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  port: process.env.MYSQL_PORT,
});

export async function query({ query, values = [] }) {
  const constDB = dbconnection.promise();
  try {
    const [rows, fields] = await constDB.execute(query, values);
    return rows;
  } catch (error) {
    throw new Error(error.message);
  }
}
