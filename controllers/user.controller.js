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
    console.log(Date.now());
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      data: json,
      success: true,
      timestamp: Date.now(),
      code: StatusCodes.OK,
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
