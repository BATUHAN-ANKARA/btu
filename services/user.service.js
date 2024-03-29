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

exports.login = async (req) => {
  try {
    let { password, email } = req.body;
    let _password = md5(password);
    const json = await User.find({ email: email, password: _password });
    if (json.length === 0 || json === null || json === undefined) {
      throw new Error("Şifre veya e-posta hatalı.");
    } else {
      return json;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.changePassword = async (req) => {
  try {
    let { password } = req.body;
    let userId = req.params.id;
    let _password = md5(password);
    const json = await User.findByIdAndUpdate(
      userId,
      { password: _password },
      { new: true }
    );
    return json;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getUserById = async (req) => {
  try {
    const { id } = req.params;
    const json = await User.findById(id);
    if (json && json != null && json != undefined) {
      return json;
    } else {
      throw new Error("Kullanıcı bulunamadı.");
    }
  } catch (error) {
    throw new Error(error);
  }
};

exports.getAllUsers = async () => {
  try {
    const json = await User.find();
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getUserByName = async (req) => {
  try {
    const { name } = req.params;
    const json = await User.find({ name: name });
    if (json && json.length > 0) {
      return json;
    } else {
      throw new Error("Kullanıcı bulunamadı.");
    }
  } catch (error) {
    throw new Error(error);
  }
};

exports.updateUser = async (req) => {
  try {
    const { id } = req.params;
    const { name, surname } = req.body;
    const json = await User.findByIdAndUpdate(
      id,
      { name, surname },
      { new: true }
    );
    return json;
  } catch (error) {
    throw new Error(error);
  }
};
