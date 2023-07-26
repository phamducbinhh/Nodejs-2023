import HttpStatusCode from "../exception/HttpStatusCode.js";
import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  // Bỏ qua xác thực cho các route /user/login và /user/register
  if (
    ["/user/login", "/user/register"].includes(req.url.toLowerCase().trim())
  ) {
    return next();
  }
  const token = req.headers?.authorization?.split(" ")[1];
  if (!token) {
    return res
      .status(HttpStatusCode.BAD_REQUEST)
      .json({ message: "Không có token, truy cập bị từ chối" });
  }
  try {
    const jwtObject = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const isExpired = Date.now() >= jwtObject.exp * 1000;
    if (isExpired) {
      res.status(HttpStatusCode.BAD_REQUEST).json({
        message: "Token hết hạn",
      });
      res.end();
    } else {
      next();
    }
  } catch (exception) {
    return res.status(HttpStatusCode.BAD_REQUEST).json({
      message: exception.message,
    });
  }
};

export default authMiddleware;
