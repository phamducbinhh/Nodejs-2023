import { Student } from "../models/index.js";
import Exception from "../exception/Exception.js";

const getAllStudents = async ({ page, size, search }) => {
  //aggregate data for all students
  page = parseInt(page);
  size = parseInt(size);
  //searchString? name, email, address contains searchString
  let filteredStudents = await Student.aggregate([
    {
      $match: {
        $or: [
          {
            name: { $regex: `.*${search}.*`, $options: "i" }, //ignore case
          },
          {
            email: { $regex: `.*${search}.*`, $options: "i" }, //ignore case
          },
          {
            address: { $regex: `.*${search}.*`, $options: "i" }, //ignore case
          },
        ],
      },
    },
    { $skip: (page - 1) * size },
    { $limit: size },
  ]);
  return filteredStudents;
};

const createStudents = async ({
  name,
  email,
  languages,
  gender,
  phoneNumber,
  address,
}) => {
  try {
    const student = await Student.create({
      name,
      email,
      languages,
      gender,
      phoneNumber,
      address,
    });
    return student;
  } catch (exception) {
    throw new Exception(exception.message);
  }
};

const getDetailsStudent = async (id) => {
  const student = await Student.findById(id);
  if (!student) {
    throw new Exception("Cannot find Student with id " + id);
  }
  return student || {};
};

export default {
  getAllStudents,
  createStudents,
  getDetailsStudent,
};
