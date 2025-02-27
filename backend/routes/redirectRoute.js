import express from "express";
import {  redirectWebsite } from "../controller/shorterController.js";
const router = express.Router();

router.get("/:shortCode", redirectWebsite); 

export default router;