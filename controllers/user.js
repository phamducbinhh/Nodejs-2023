import { validationResult } from "express-validator";
import { userRepository } from "../repositories/index.js";
import HttpStatusCode from "../exception/HttpStatusCode.js";

const login = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(HttpStatusCode.BAD_REQUEST)
        .json({ errors: errors.array()[0].msg });
    }
    const { email, password } = req.body;
    // Gọi phương thức login trong userRepository và chờ cho đến khi hoàn thành
    await userRepository.login({ email, password });
    res.status(HttpStatusCode.OK).json({
      message: "Login user successfully",
    });
  } catch (error) {
    console.error(error);
    res
      .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
      .json({ error: "Đã xảy ra lỗi khi xử lý yêu cầu" });
  }
};

const register = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(HttpStatusCode.BAD_REQUEST)
        .json({ errors: errors.array()[0].msg });
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
    res.status(HttpStatusCode.INSERT_OK).json({
      message: "Register user successfully",
    });
  } catch (error) {
    console.error(error);
    res
      .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
      .json({ error: "Đã xảy ra lỗi khi xử lý yêu cầu" });
  }
};

const getDetailsUser = async (req, res) => {
  try {
    res.send("GET Details user success");
  } catch (error) {
    console.error(error);
    res
      .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
      .json({ error: "Đã xảy ra lỗi khi xử lý yêu cầu" });
  }
};

export default { login, register, getDetailsUser };
