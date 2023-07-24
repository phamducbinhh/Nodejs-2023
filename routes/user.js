import express from "express";
import { body } from "express-validator";
import { userControllers } from "../controllers/index.js";

// Khởi tạo Router
const router = express.Router();
// Middleware kiểm tra email và password
const validateLoginInput = [
  body("email").isEmail().withMessage("Email không hợp lệ"),
  body("password")
    .isLength({ min: 5 })
    .withMessage("Mật khẩu phải có ít nhất 5 ký tự"),
];
// Định nghĩa tuyến cho các loại yêu cầu khác nhau
router.get("/:id", userControllers.getDetailsUser);
router.post("/login", validateLoginInput, userControllers.login);
router.post("/register", validateLoginInput, userControllers.register);

// Thêm Router vào ứng dụng chính

export default router;
