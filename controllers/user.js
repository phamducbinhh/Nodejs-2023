import { validationResult } from "express-validator";
import { userRepository } from "../repositories/index.js";
import HttpStatusCode from "../exception/HttpStatusCode.js";

const login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(HttpStatusCode.BAD_REQUEST)
      .json({ errors: errors.array()[0].msg });
  }
  const { email, password } = req.body;
  try {
    const user = await userRepository.login({ email, password });
    res.status(HttpStatusCode.OK).json({
      message: "Login user successfully",
      data: user,
    });
  } catch (exception) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
      message: exception.message,
    });
  }
};

const register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(HttpStatusCode.BAD_REQUEST)
      .json({ errors: errors.array()[0].msg });
  }
  const { name, email, password, phoneNumber, address } = req.body;
  try {
    const user = await userRepository.register({
      name,
      email,
      password,
      phoneNumber,
      address,
    });
    res.status(HttpStatusCode.INSERT_OK).json({
      message: "Register user successfully",
      data: user,
    });
  } catch (exception) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
      message: exception.message,
    });
  }
};

const getDetailsUser = async (req, res) => {
  try {
    res.send("GET Details user success");
  } catch (error) {
    res
      .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
      .json({ error: "Đã xảy ra lỗi khi xử lý yêu cầu" });
  }
};

export default { login, register, getDetailsUser };
