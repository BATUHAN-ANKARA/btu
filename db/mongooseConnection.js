const mongoose = require("mongoose");

exports.connectToMongoDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      dbName: process.env.MONGODB_COLLECTION,
      connectTimeoutMS: process.env.MONGODB_CONNECTION_TIMEOUT,
    });
    console.log("Veritabanı bağlantısı başarılı.");
  } catch (error) {
    console.log("Db bağlantısı sırasında hata oluştu:", error.message);
  }
};
