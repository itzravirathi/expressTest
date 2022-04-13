import express, {Request,Response,Application} from 'express';

// const express =  require("express");
const  app = express();
const userRouter = require("./routes/users")

app.listen(3000)
app.set("view engine","ejs")
app.use(logger);

app.use(express.static("public"));
app.use(express.urlencoded({extended : true}));

app.get('/', (req: Request, res: Response) => {
    console.log("Home page");
    res.status(200)
        .render("index",{name: "Ravi Prakash Rathi"});
})

app.get('/string', (req: express.Request, res: express.Response)=> {
    console.log("string page");
    res.status(200)
        .send('Hi');
})

app.get('/download', (req: express.Request, res: express.Response) => {
    console.log("download page");
    res.status(200)
        .download("server.js")
})


app.get('/getJson', (req: express.Request, res: express.Response) => {
    console.log("getJson page");
    res.status(200)
        .json({message: "Hi there !!"})

})

app.get('/getJsonWithSingleMiddleware',logger, (req, res) => {
    console.log("getJson page");
    try {
        res.json({message: "Hi there !!"})
            .status(200)
            .send();
    } catch (e) {
        res.status(500)
            .json({error: "Sorry !! Something went."})
            .send();
    }

})

function logger(request: express.Request , response: express.Response, next: express.NextFunction) {
    console.log("Via TS Logger :" + request.originalUrl);
    next();
}