// Import function from Migraine Model
import { getMigraines, getMigraineById, insertMigraine, updateMigraineById, deleteMigraineById } from "../models/migraineModel.js";
 
// Get All Migraines
export const showMigraines = (req, res) => {
    getMigraines((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Get Single Migraine 
export const showMigraineById = (req, res) => {
    getMigraineById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Create New Migraine
export const createMigraine = (req, res) => {
    const data = req.body;
    insertMigraine(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Update Migraine
export const updateMigraine = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateMigraineById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Delete Migraine
export const deleteMigraine = (req, res) => {
    const id = req.params.id;
    deleteMigraineById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
