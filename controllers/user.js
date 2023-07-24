import { validationResult } from "express-validator";
import { userRepository } from "../repositories/index.js";

const login = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array()[0].msg });
    }
    const { email, password } = req.body;
    // Gọi phương thức login trong userRepository và chờ cho đến khi hoàn thành
    await userRepository.login({ email, password });
    res.status(200).json({
      message: "Login user successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Đã xảy ra lỗi khi xử lý yêu cầu" });
  }
};

const register = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array()[0].msg });
    }
    const { name, email, password, phoneNumber, address } = req.body;
    // Gọi phương thức register trong userRepository và chờ cho đến khi hoàn thành
    await userRepository.register({
      name,
      email,
      password,
      phoneNumber,
      address,
    });
    res.status(201).json({
      message: "Register user successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Đã xảy ra lỗi khi xử lý yêu cầu" });
  }
};

const getDetailsUser = async (req, res) => {
  try {
    res.send("GET Details user success");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Đã xảy ra lỗi khi xử lý yêu cầu" });
  }
};

export default { login, register, getDetailsUser };
