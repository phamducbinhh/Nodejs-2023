import express from "express";
import dotenv from "dotenv";
import { userRouter, studentRouter } from "./routes/index.js";
import connect from "./databases/database.js";
dotenv.config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

//router user
app.use("/user", userRouter);
//router student
app.use("/student", studentRouter);
//root router
app.get("/", (req, res) => {
  res.send("Response from root router !!");
});
// connect to database
connect()
  .then(() => console.log("Database connected."))
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
  
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
});
