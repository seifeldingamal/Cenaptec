import express from "express";
import controller from "../controllers/helloController";
const router = express.Router();

router.get('/Hello', controller.getText);
router.post('/Hello', controller.addText);

export = router;