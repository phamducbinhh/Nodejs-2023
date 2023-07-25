import mongoose from "mongoose";
import { OutPutType, print } from "../helpers/print.js";
import Exception from "../exception/Exception.js";
const connect = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    print("Connecting to success", OutPutType.SUCCESS);
    return connection;
  } catch (error) {
    print(error, OutPutType.ERROR);
    throw new Exception("cannot connect to server");
  }
};

export default connect;
