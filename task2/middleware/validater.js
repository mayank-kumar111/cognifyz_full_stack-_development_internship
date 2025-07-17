module.exports.validateForm = (req, res, next) => {
  const { username, email, age, password } = req.body;

  if (username.trim() === "") {
    throw new Error("Username is required");
  }
  if (username.length < 3) {
    throw new Error("Username must be three characters long.");
  }
  if (password === "") {
    throw new Error("Password is required");
  }
  if (password.length < 8) {
    throw new Error("Password must be at least 8 characters long");
  }

  if (email === "") {
    throw new Error("Email is Required");
  }

  if (age < 16) {
    throw new Error("Age must be equal or greater than 16");
  }
  next();
};
