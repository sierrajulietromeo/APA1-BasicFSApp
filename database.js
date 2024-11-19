const sqlite3 = require('sqlite3').verbose();

const DBSOURCE = "database.db"; 

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message);
      throw err;
    }else{
        console.log('Connected to the SQLite database.');
        db.run(`CREATE TABLE products (
            id TEXT PRIMARY KEY,
            name TEXT,
            price REAL,
            quantity INTEGER,
            type TEXT,
            size TEXT,
            material TEXT,
            brand TEXT,
            warranty TEXT
            )`,
        (err) => {
            if (err) {
                // Table already created
            }else{
                console.log('Product table created');
            }
        });  
    }
});


module.exports = db;