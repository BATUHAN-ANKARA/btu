const express = require("express");
const app = express();
const db = require("./db/index");
const configs = require("./configs/index");
const routerPrefix = require("./consts/router.prefix");
const router = require("./routers/index");

configs.serverConfig.initialServerConfig();

const PORT = 3000;
app.use(express.json());

app.use(`${process.env.APP_PREFIX}${routerPrefix.USER}`, router.userRouter);

db.mongooseConnection.connectToMongoDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server ${PORT} portunda çalışıyor.`);
  });
});
