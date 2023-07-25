import { print, OutPutType } from "../helpers/print.js";
import { User } from "../models/index.js";
import Exception from "../exception/Exception.js";

const login = async ({ email, password }) => {
  print("login user in user repository:", OutPutType.INFORMATION);
};

const register = async ({ name, email, password, phoneNumber, address }) => {
  try {
    const existingUser = await User.finOne({ email });
    if (!existingUser) {
      throw new Exception("User already exists");
    }
  } catch (exception) {}
  // print("Register user in user repository:", OutPutType.INFORMATION);
};

export default {
  login,
  register,
};
