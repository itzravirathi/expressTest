"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// const express =  require("express");
const app = (0, express_1.default)();
const userRouter = require("./routes/users");
const axios = require("axios");
const restController = require("./controller/restController");
app.listen(3000);
app.set("view engine", "ejs");
app.use(logger);
app.use('/users', restController.router);
app.use(express_1.default.static("public"));
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    var _a;
    console.log("Home page");
    res.status(200)
        .render("index", { name: "Max Muster" });
    const options = {
        method: 'GET',
        url: 'https://api2.binance.com/api/v3/ticker/24hr'
    };
    (_a = axios.request) === null || _a === void 0 ? void 0 : _a.call(axios, options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
});
app.get('/string', (req, res) => {
    console.log("string page");
    res.status(200)
        .send('Hi');
});
app.get('/download', (req, res) => {
    console.log("download page");
    res.status(200)
        .download("server.js");
});
app.get('/getJson', (req, res) => {
    console.log("getJson page");
    res.status(200)
        .json({ message: "Hi there !!" });
});
app.get('/getJsonWithSingleMiddleware', logger, (req, res) => {
    console.log("getJson page");
    try {
        res.json({ message: "Hi there !!" })
            .status(200)
            .send();
    }
    catch (e) {
        res.status(500)
            .json({ error: "Sorry !! Something went." })
            .send();
    }
});
function logger(request, response, next) {
    console.log("Via TS Logger :" + request.originalUrl);
    next();
}
