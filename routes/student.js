import express from "express";
import { studentControllers } from "../controllers/index.js";
import authMiddleware from "../middleware/auth.js";

// Khởi tạo Router
const router = express.Router();
// Định nghĩa tuyến cho các loại yêu cầu khác nhau
router.get("/", authMiddleware, studentControllers.getAllStudent);
router.get("/:id", studentControllers.getStudentById);
router.post("/insert", authMiddleware, studentControllers.createStudent);
router.patch("/", studentControllers.updateStudent);

// Thêm Router vào ứng dụng chính

export default router;
