import mongoose, { Schema, ObjectId } from "mongoose";
import isEmail from "validator/lib/isEmail.js";

const User = mongoose.model(
  "User",
  new Schema({
    id: {
      type: ObjectId,
    },
    name: {
      type: String,
      required: true, // NOT NULL
      validate: {
        validator: (value) => {
          return value.length > 3;
        },
        message: "User name must be at least 3 characters",
      },
    },
    email: {
      type: String,
      required: true, // NOT NULL
      validate: {
        validator: () => isEmail,
        message: "Email is incorrect format",
      },
    },
    password: {
      type: String,
      required: true, // NOT NULL
    },
    phoneNumber: {
      type: String,
      required: false, // NOT NULL
    },
    address: {
      type: String,
      required: false, // NOT NULL
    },
  })
);

export default User;
