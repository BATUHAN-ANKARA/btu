const User = require("../models/user.model");
const md5 = require("md5");

exports.register = async (req) => {
  try {
    let { name, surname, birthDate, gender, password, email } = req.body;
    let _password = md5(password);
    birthDate = new Date(birthDate);
    const user = new User({
      name,
      surname,
      birthDate,
      gender,
      password: _password,
      email,
    });
    const json = await user.save();
    return json;
  } catch (error) {
    throw new Error(error.message);
  }
};
