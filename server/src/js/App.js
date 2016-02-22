import express from "express";
import Minilog from "minilog";


Minilog.enable();
var log = Minilog("app");

const options = {
    httpPort: 3000
};

const app = express();

app.use(express.static(__dirname + '/../../client/dist'));

app.listen(
    options.httpPort,
    () => log.info(`Server is listening on http port ${options.httpPort}`)
);