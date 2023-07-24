import express from "express";
import dotenv from "dotenv";
import { userRouter, studentRouter } from "./routes/index.js";
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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
