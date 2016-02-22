import express from "express";


const options = {
    httpPort: 3000
};

const app = express();

app.use(express.static(__dirname + '/../../client/dist'));

app.listen(
    options.httpPort,
    () => console.log(`Server is listening on http port ${options.httpPort}`)
);