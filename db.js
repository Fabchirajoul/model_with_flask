import * as sqlite from 'sqlite';
import xlsx  from 'xlsx';
import sqlite3  from 'sqlite3'

const workbook = xlsx.readFile('../complete_data.xlsx');
const sheetName = workbook.SheetNames[0]; // Assuming data is in the first sheet
const worksheet = workbook.Sheets[sheetName];
const excelData = xlsx.utils.sheet_to_json(worksheet);

const db = await sqlite.open({
    filename: './capstonedb.db',
    driver: sqlite3.Database
});

// const db = new sqlite3.Database('capstonedb.db');

const createTableQuery = `
CREATE TABLE IF NOT EXISTS delays (
    id integer primary key AUTOINCREMENT,
    Delay real,
    laborers real,
    cash_flow real,
    Errors real,
    communication real,
    Change_schedule real,
    bid_price real,
    scope_change real,
    Weather_conditions real,
    Accidents real
)
`;

// db.serialize(() => {
//     db.run(createTableQuery);
  
//     // Step 5: Import data into SQLite database
//     const insertQuery = `INSERT INTO delays (Delay, laborers, cash_flow, Errors, communication, Change_schedule, bid_price, scope_change, Weather_conditions, Accidents) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;
    
//     excelData.forEach(row => {
//       const values = Object.values(row);
//       db.run(insertQuery, values, err => {
//         if (err) {
//           console.error('Error inserting data:', err);
//         }
//       });
//     });
//   });

  
  // Close the database connection after all operations
  // db.close((err) => {
  //   if (err) {
  //     console.error('Error closing the database:', err.message);
  //   } else {
  //     console.log('Data imported successfully.');
  //   }
  // });

  export async function check_delay(Delay, laborers, cash_flow, Errors, communication, Change_schedule, bid_price, scope_change, Weather_conditions, Accidents) {
    await db.run(`insert into delays (
      Delay, laborers, cash_flow, Errors, communication, 
      Change_schedule, bid_price, scope_change, Weather_conditions, 
      Accidents) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [Delay, laborers, cash_flow, Errors, communication, Change_schedule, bid_price, scope_change, Weather_conditions, Accidents]);
    // const insertQuery = `INSERT INTO delays (Delay, laborers, cash_flow, Errors, communication, Change_schedule, bid_price, scope_change, Weather_conditions, Accidents) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;
  }

// delays
export async function delay_history() {
  const result = await db.all(`
      SELECT
      Delay,
      laborers,
      cash_flow,
      Errors,
      Communication,
      Change_schedule,
      bid_price,
      scope_change,
      Weather_conditions,
      Accidents
      FROM delays 
      ORDER BY id DESC
      LIMIT 5`);
      return result
  }
  
const resultdelays = await delay_history()
console.log(resultdelays)