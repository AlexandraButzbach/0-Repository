// import express
import express from "express";

// import function from controller
import { showMigraines, showMigraineById, createMigraine, updateMigraine, deleteMigraine } from "../controllers/migraine.js";

// init express router
const router = express.Router();

// Get All Migraine
router.get('/migraines', showMigraines);

// Get Single Migraine
router.get('/migraines/:id', showMigraineById);

// Create New Migraine
router.post('/migraines', createMigraine);

// Update Migraine
router.put('/migraines/:id', updateMigraine);

// Delete Migraine
router.delete('/migraines/:id', deleteMigraine);

// export default router
export default router;