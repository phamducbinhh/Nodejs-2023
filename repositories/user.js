const login = async ({ email, password }) => {
  console.log("email:", email);
  console.log("password:", password);
};

const register = async ({ name, email, password, phoneNumber, address }) => {
  console.log("register user:", name, email, password, phoneNumber, address);
};

export default {
  login,
  register,
};
