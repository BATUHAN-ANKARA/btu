const jwt = require("jsonwebtoken");
const fs = require("fs");
const os = require("os");
const md5 = require("md5");

const createToken = (userId, name) => {
  const token = jwt.sign({ userId, name }, process.env.SECRET_KEY, {
    issuer: "localhost",
    expiresIn: "1h",
  });
  return token;
};

const verifyToken = (token) => {
  const isVerify = { decodedToken: null };
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    isVerify.decodedToken = decodedToken;
  } catch (error) {
    isVerify.decodedToken = null;
    console.log("Error in verifyToken", error.message);
  }
  return isVerify;
};

const hashPassword = (password) => {
  return md5(password);
};

const createUploadDir = (str) => {
  if (!fs.existsSync(str)) {
    fs.mkdirSync(str, { recursive: true });
  }
};

module.exports = {
  createToken,
  verifyToken,
  hashPassword,
  createUploadDir,
};
