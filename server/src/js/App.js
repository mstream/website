import express from "express";


var app = express();

app.get("/", (request, response) => {
    response.send("OK");
});

app.listen(3000);