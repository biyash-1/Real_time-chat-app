import express from "express";
const router = express.Router();
import authenticate from "../middleware/authmiddleware.js"

import {getMessages, getUsersForSidebar, sendMessage,deleteMessage} from "../controllers/messageController.js";


router.get("/getUsers", getUsersForSidebar);

router.get("/:id", authenticate, getMessages);
router.post("/send/:id", authenticate, sendMessage);
router.delete("/delete/:id", authenticate, deleteMessage);

export default router;

