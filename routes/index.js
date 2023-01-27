import { Router } from "express";
import checkCsv from "../controller/checkCsv.js";
import checkEmail from "../controller/checkEmail.js";
import upload from "../fileUploading.js";
const router = Router();
router.get('/check/:email',checkEmail);
router.post('/csv', upload.single('csvFile'), checkCsv);
export default router;