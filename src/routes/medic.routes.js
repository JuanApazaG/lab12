import { Router } from "express";
import {
  getMedics,
  createMedic,
  updateMedic,
  getMedic,
  deleteMedic,
} from "../controllers/medic.controller.js";

const router = Router();

router.post("/", createMedic);
router.get("/", getMedics);
router.put("/:id", updateMedic);
router.delete("/:id", deleteMedic);
router.get("/:id", getMedic);

export default router;
