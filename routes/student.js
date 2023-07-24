import express from "express";
import { studentControllers } from "../controllers/index.js";

// Khởi tạo Router
const router = express.Router();
// Định nghĩa tuyến cho các loại yêu cầu khác nhau
router.get("/", studentControllers.getAllStudent);
router.get("/:id", studentControllers.getStudentById);
router.post("/insert", studentControllers.createStudent);
router.patch("/", studentControllers.updateStudent);

// Thêm Router vào ứng dụng chính

export default router;
