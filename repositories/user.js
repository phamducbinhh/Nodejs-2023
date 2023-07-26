import { print, OutPutType } from "../helpers/print.js";
import { User } from "../models/index.js";
import Exception from "../exception/Exception.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const login = async ({ email, password }) => {
  // Kiểm tra xem người dùng có tồn tại trong cơ sở dữ liệu không
  const existingUser = await User.findOne({ email }).exec();
  if (existingUser) {
    //not encrypted password
    const isPasswordMatch = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!!isPasswordMatch) {
      //create json web token
      const token = jwt.sign(
        {
          data: existingUser,
        },
        process.env.JWT_SECRET_KEY,
        {
          expiresIn: process.env.JWT_EXPIRES_IN,
        }
      );
      return {
        name: existingUser.name,
        password: "not show",
        token: token,
      };
    } else {
      throw new Exception(Exception.WRONG_EMAIL_AND_PASSWORD);
    }
  } else {
    throw new Exception(Exception.WRONG_EMAIL_AND_PASSWORD);
  }
};

const register = async ({ name, email, password, phoneNumber, address }) => {
  try {
    // Kiểm tra xem người dùng có tồn tại trong cơ sở dữ liệu
    const existingUser = await User.findOne({ email }).exec();
    if (!!existingUser) {
      throw new Exception(Exception.USER_EXIST);
    }
    // mã hóa password
    const hashedPassword = await bcrypt.hash(
      password,
      parseInt(process.env.SALT_ROUNDS)
    );
    // insert to db
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      phoneNumber,
      address,
    });
    return {
      ...newUser._doc,
      password: "Not show",
    };
  } catch (error) {
    throw new Exception(Exception.CANNOT_REGISTER_USER);
  }
};

export default {
  login,
  register,
};
