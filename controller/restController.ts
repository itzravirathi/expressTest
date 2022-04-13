import * as express from "express";

class RestController{
    public router = express.Router();

    constructor() {
        this.router.get('/v3/:id', this.getUserbyId);
    }

    private getUserbyId = (request: express.Request, response:express.Response) => {
        console.log("Finding " + request.params.id);
        response.status(200)
            .send('Fetching' + request.params.id);
    }
}

const restController = new RestController()
module.exports = restController;