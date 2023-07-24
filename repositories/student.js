const getAllStudents = async ({ page, size, search }) => {
  console.log("Get all students...");
};

const createStudents = async ({
  name,
  email,
  languages,
  gender,
  phoneNumber,
  address,
}) => {
  console.log(" Create students...");
};

export default {
  getAllStudents,
  createStudents,
};
