const express =  require("express");
const  app = express();
const userRouter = require("./routes/users")

app.listen(3000)
app.set("view engine","ejs")
app.use(logger);

app.use(express.static("public"));
app.use(express.urlencoded({extended : true}));

app.use('/users',userRouter)

app.get('/', (req, res) => {
    console.log("Home page");
    res.status(200)
        .render("index",{name: "Ravi Prakash Rathi"});
})

app.get('/string', (req, res) => {
    console.log("string page");
    res.status(200)
        .send('Hi');
})

app.get('/download', (req, res) => {
    console.log("download page");
    res.status(200)
        .download("server.js")
})


app.get('/getJson', (req, res) => {
    console.log("getJson page");
    res.status(200)
        .json({message: "Hi there !!"})

})

app.get('/getJsonWithSingleMiddleware',logger, (req, res) => {
    console.log("getJson page");
    res.status(200)
        .json({message: "Hi there !!"})

})

function logger(request , response , next) {
    console.log("Via Logge :" + request.originalUrl);
    next();
}