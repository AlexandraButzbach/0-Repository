// import connection
import db from "../config/database.js";
 
// Get All Migraines

export const getMigraines = (result) => {
//@Work hier FROM "migraine" ersetzen
    db.query("SELECT * FROM migraine", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Get Single Migraine
export const getMigraineById = (id, result) => {
    db.query("SELECT * FROM migraine WHERE migraine_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
 
// Insert Migraine to Database
export const insertMigraine = (data, result) => {
    db.query("INSERT INTO migraine SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update Migraine to Database
export const updateMigraineById = (data, id, result) => {
    
    db.query("UPDATE migraine SET migraine_datum = ?, migraine_start = ?, 	migraine_ende = ?, 	migraine_dauer = ?, 	migraine_intensitaet = ? WHERE migraine_id = ?", 
    [data.migraine_datum, migraine_start, migraine_ende, migraine_dauer, migraine_intensitaet, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete Migraine to Database
export const deleteMigraineById = (id, result) => {
    db.query("DELETE FROM migraine WHERE migraine_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
