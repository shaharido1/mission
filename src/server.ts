import { routes } from "./routes/routesFunction";
import { appConfig } from "./config/appConfig";

import express from "express";
import http from "http";
import morgan from "morgan";
import bodyParser from "body-parser";
import { LogService } from "./logs/logHandler";

const app = express();
const server = http.createServer(app);

app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
const logService = new LogService();

app.set("port", appConfig.port);
routes(app);

server.listen(appConfig.port, () => {

  console.log(`running on localhost:${appConfig.port}`);

});
function stop() {
  server.close();
}

module.exports = {
  stop,
  logService,
  server: server,
  app: app
};

