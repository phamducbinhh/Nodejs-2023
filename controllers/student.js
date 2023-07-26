import HttpStatusCode from "../exception/HttpStatusCode.js";
import { studentRepository } from "../repositories/index.js";
import { MAX_RECORD_SIZE } from "../Global/constants.js";
const getAllStudent = async (req, res) => {
  let { page = 1, size = MAX_RECORD_SIZE, search = "" } = req.query;
  size = size >= MAX_RECORD_SIZE ? MAX_RECORD_SIZE : size;
  try {
    const student = await studentRepository.getAllStudents({
      size,
      page,
      search,
    });
    res.status(HttpStatusCode.OK).json({
      message: "Get students successfully",
      size: student.length,
      page,
      search,
      data: student,
    });
  } catch (exception) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
      message: exception.message,
    });
  }
};
const getStudentById = async (req, res) => {
  try {
    const student = await studentRepository.getDetailsStudent(req.params.id);
    res.status(HttpStatusCode.OK).json({
      message: "Get detail student successfully",
      data: student,
    });
  } catch (exception) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
      message: exception.message,
    });
  }
};
const updateStudent = async (req, res) => {
  res.send("Update student");
};
const createStudent = async (req, res) => {
  try {
    const response = await studentRepository.createStudents(req.body);
    res.status(HttpStatusCode.INSERT_OK).json({
      message: "Student Created Successfully",
      data: response,
    });
  } catch (exception) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
      message: exception.message,
    });
  }
};

export default {
  getAllStudent,
  getStudentById,
  updateStudent,
  createStudent,
};
