const express = require("express");
const router = express.Router();
const users =  [{name: "Zero"},{name: "First"},{name: "Second"}];

router.get('/new', (request, response) => {
    response.render("newuser");
})

router.get('/', (request, response) => {
    console.log("Finding " + request.query.name);
    response.status(200)
        .send('Fetching :' + request.query.name);
})

router.post('/', (request, response) => {
    const isValid = false;
    console.log("Adding"+request.body.fname);
    if(isValid) {
        users.push({name: request.body.fname});
        response.redirect(`/users/${users.length -1}`);
    }
    else {
        response.render("newuser", {fname: request.body.fname });
    }
})

router.route('/v2/:id')
     .get((request, response) => {
         console.log("Finding " + request.params.id);
         response.status(200)
             .send();
     })
    .post((request, response) => {
        console.log("Finding " + request.params.id);
        response.status(200)
            .send('Fetching' + request.params.id);
    })
    .delete((req, res) => {
        console.log("Deleting " + request.params.id);
        response.status(200)
            .send('Fetching' + request.params.id);
    })

router.get('/:id', (request, response) => {
    console.log("Finding " + request.params.id);
    response.status(200)
        .send('Fetching' + request.params.id);
})

router.post('/:id', (request, response) => {
    console.log("Adding " + request.params.id);
    response.status(200)
        .send('Fetching' + request.params.id);
})

router.delete('/:id', (request, response) => {
    console.log("Deleting " + request.params.id);
    response.status(200)
        .send('Fetching' + request.params.id);
})

router.param("id", (req, res, next) => {
    console.log(req.originalUrl);
    console.log(users[req.params.id]);
    next();
})

module.exports = router;