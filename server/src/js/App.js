import express from "express";
import Minilog from "minilog";
import router from "./Router";


Minilog.enable();
var log = Minilog("app");

const options = {
    httpPort: 3000
};

const app = express();

app.use(express.static(`${__dirname}/../../client/dist`));
app.use("/api", router);

app.listen(
    options.httpPort,
    () => log.info(`Server is listening on http port ${options.httpPort}`)
);