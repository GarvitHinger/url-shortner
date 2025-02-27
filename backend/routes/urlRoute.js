import express from "express";
import { addUrl,toggleUrl,deleteUrl,urlList } from "../controller/urlController.js";
const router = express.Router();

router.post("/add", addUrl);
router.post("/toggle", toggleUrl);
router.delete("/delete", deleteUrl);
router.get("/urllist", urlList);

export default router;