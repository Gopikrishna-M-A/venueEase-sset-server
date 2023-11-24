import express from 'express';
import { registerUser, getUser, getUserByEmail, getAllUser }  from '../controllers/user.js';
const router = express.Router();

router.post("/register", registerUser)
router.get("/email/:id", getUserByEmail)
router.get("/:id", getUser)
router.get("/", getAllUser)



export default router;
