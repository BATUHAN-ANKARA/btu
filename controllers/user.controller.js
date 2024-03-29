const { StatusCodes } = require("http-status-codes");
const userService = require("../services/index");
const baseResponse = require("../dto/baseResponse.dto");

exports.register = async (req, res) => {
  try {
    const json = await userService.userService.register(req);
    res.status(StatusCodes.CREATED).json({
      ...baseResponse,
      data: json,
      success: true,
      timestamp: Date.now(),
      code: StatusCodes.CREATED,
      message: "Kayıt başarılı.",
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      success: false,
      error: true,
      timestamp: Date.now(),
      code: StatusCodes.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const json = await userService.userService.login(req);
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      data: json,
      success: true,
      timestamp: Date.now(),
      code: StatusCodes.OK,
      message: "Giriş başarılı.",
    });
  } catch (error) {
    let errorCode = error.message === "Şifre veya e-posta hatalı." ? 400 : 500;
    res.status(errorCode).json({
      ...baseResponse,
      success: false,
      error: true,
      timestamp: Date.now(),
      code: errorCode,
      message: error.message,
    });
  }
};

exports.changePassword = async (req, res) => {
  try {
    const json = await userService.userService.changePassword(req);
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      data: json,
      success: true,
      timestamp: Date.now(),
      code: StatusCodes.OK,
      message: "Şifreniz başarıyla değiştirildi.",
    });
  } catch (error) {
    let errorCode = error.message === "Şifre veya e-posta hatalı." ? 400 : 500;
    res.status(errorCode).json({
      ...baseResponse,
      success: false,
      error: true,
      timestamp: Date.now(),
      code: errorCode,
      message: error.message,
    });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const json = await userService.userService.getUserById(req);
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      data: json,
      success: true,
      timestamp: Date.now(),
      code: StatusCodes.OK,
      message: "Kullanıcı bilgileri getirildi.",
    });
  } catch (error) {
    let errorCode = error.message === "Şifre veya e-posta hatalı." ? 400 : 500;
    res.status(errorCode).json({
      ...baseResponse,
      success: false,
      error: true,
      timestamp: Date.now(),
      code: errorCode,
      message: error.message,
    });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const json = await userService.userService.getAllUsers(req);
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      data: json,
      success: true,
      timestamp: Date.now(),
      code: StatusCodes.OK,
      message: "Tüm kullanıcı bilgileri getirildi.",
    });
  } catch (error) {
    let errorCode = error.message === "Şifre veya e-posta hatalı." ? 400 : 500;
    res.status(errorCode).json({
      ...baseResponse,
      success: false,
      error: true,
      timestamp: Date.now(),
      code: errorCode,
      message: error.message,
    });
  }
};

exports.getUserByName = async (req, res) => {
  try {
    const json = await userService.userService.getUserByName(req);
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      data: json,
      success: true,
      timestamp: Date.now(),
      code: StatusCodes.OK,
      message: "Kullanıcı bilgileri getirildi.",
    });
  } catch (error) {
    let errorCode = error.message === "Şifre veya e-posta hatalı." ? 400 : 500;
    res.status(errorCode).json({
      ...baseResponse,
      success: false,
      error: true,
      timestamp: Date.now(),
      code: errorCode,
      message: error.message,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const json = await userService.userService.updateUser(req);
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      data: json,
      success: true,
      timestamp: Date.now(),
      code: StatusCodes.OK,
      message: "Kullanıcı bilgileri güncellendi.",
    });
  } catch (error) {
    let errorCode = error.message === "Şifre veya e-posta hatalı." ? 400 : 500;
    res.status(errorCode).json({
      ...baseResponse,
      success: false,
      error: true,
      timestamp: Date.now(),
      code: errorCode,
      message: error.message,
    });
  }
};
