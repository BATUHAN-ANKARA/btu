const { StatusCodes } = require("http-status-codes");
const userService = require("../services/index");

exports.register = async (req, res) => {
  try {
    const json = await userService.userService.register(req);
    res.status(StatusCodes.CREATED).json({
      message: "Kayıt başarılı",
      code: StatusCodes.CREATED,
      data: json,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Kusura bakma",
      code: StatusCodes.INTERNAL_SERVER_ERROR,
      error: error.message
    });
  }
};
