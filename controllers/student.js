const getAllStudent = async (req, res) => {
  res.status(200).json({
    message: "Get All Student Successfully",
    data: [],
  });
};
const getStudentById = async (req, res) => {
  res.send("Get student details");
};
const updateStudent = async (req, res) => {
  res.send("Update student");
};
const createStudent = async (req, res) => {
  res.send("Create student");
};

export default {
  getAllStudent,
  getStudentById,
  updateStudent,
  createStudent,
};