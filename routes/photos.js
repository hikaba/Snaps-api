import express from "express";
const router = express.Router();
import fs from "fs";
import crypto from "crypto";
// GET /photos that responds with an array of photo objects.
router.get("/", (_req, res) => {
    // reading photos from json file
    const dataBuffer = fs.readFileSync("./data/photos.json");
    const photosData = JSON.parse(dataBuffer);
    //returning photos array
    res.send(photosData);
})
// GET /photos/:id that responds with a single object containing the details of the photo with an id of :id.
router.get("/:id", (req, res) => {
    console.log(req.params);

    const dataBuffer = fs.readFileSync("./data/photos.json");
    const photosData = JSON.parse(dataBuffer);

    const foundPhoto = photosData.find((photo) => {
        return photo.id === req.params.id;
    });

    if(!foundPhoto) {
        res.status(404).send("Error: photo with this id does not exist");
    }

    res.send(foundPhoto);
})
// GET /photos/:id/comments that responds with an array of comment objects associated with the photo, specified with an id of :id.
router.get("/:id/comments", (req, res) => {
    console.log(req.params);

    const dataBuffer = fs.readFileSync("./data/photos.json");
    const photosData = JSON.parse(dataBuffer);

    const foundPhoto = photosData.find((photo) => {
        return photo.id === req.params.id;
    });
    //error msg if not found
    if(!foundPhoto) {
        res.status(404).send("Error: photo with this id does not exist");
    }
    res.send(foundPhoto.comments);
})
// POST /photos/:id/comments that will add a new comment to the comments list of the photo with an id of :id. A unique id and timestamp is generated for each comment added.
router.post("/:id/comments", (req, res) => {
    console.log("req.body: ", req.body);
    console.log("photoID: ", req.params.id);

    //create a new comment object
    const newComment = {
        name: req.body.name,
        comment: req.body.comment,
        id: crypto.randomUUID(),
        timestamp: Date.now(),
    }

    // read all comments in json file
    const dataBuffer = fs.readFileSync("./data/photos.json");
    const photosData = JSON.parse(dataBuffer);
    const foundPhoto = photosData.find((photo) => {
        return photo.id === req.params.id;
    });
    if(!foundPhoto) {
        res.status(404).send("Error: photo with this id could not be found")
    }
    // add new comment to foundPhoto
    foundPhoto.comments.push(newComment);
    //Stringify for json
    const stringComments = JSON.stringify(photosData);
    // write to json file
    fs.writeFileSync("./data/photos.json", stringComments);
    // send res confirmation status and msg
    res.status(201).send("succesfully posted");
})
export default router;