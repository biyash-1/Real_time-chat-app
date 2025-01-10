import express from "express";

const router = express.Router();
import authenticate from "../middleware/authmiddleware.js"

import { signupUser, loginUser, logoutUser,checkAuth,updateProfile } from "../controllers/authcontroller.js";


router.post("/signup", signupUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

router.patch("/update-profile", authenticate,updateProfile)
router.get("/checkAuth",authenticate, checkAuth);

export default router;
