import express from "express";
import { isAuthenticated } from "../middleware/auth.js";
import { addToWatchlist, fetchAll, removeFromWatchlist } from "../controllers/watchlistController.js";

const router=express.Router();

router.post("/add",isAuthenticated,addToWatchlist);
router.post("/remove",isAuthenticated,removeFromWatchlist);
router.get("/fetchall",isAuthenticated,fetchAll);

export default router;