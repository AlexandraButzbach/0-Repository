import mysql from "mysql2";
 
// create the connection to database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
//@WorkEigenes Passwort
  password: '1001Elfi',
//@Work hier anpassen
  database: 'migraine_db'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Database connected!');
});

export default db;