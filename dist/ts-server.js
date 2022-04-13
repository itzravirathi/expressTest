"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// const express =  require("express");
const app = (0, express_1.default)();
const userRouter = require("./routes/users");
app.listen(3000);
app.set("view engine", "ejs");
app.use(logger);
app.use(express_1.default.static("public"));
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    console.log("Home page");
    res.status(200)
        .render("index", { name: "Ravi Prakash Rathi" });
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
    res.status(200)
        .json({ message: "Hi there !!" });
});
function logger(request, response, next) {
    console.log("Via TS Logger :" + request.originalUrl);
    next();
}
