import express from "express";
const router = express.Router();
import fs from "fs";
import crypto from "crypto";
// get that responds with an array of photo objects.
router.get("/", (_req, res) => {
    // reading photos from json file
    const dataBuffer = fs.readFileSync("./data/photos.json");
    const photosData = JSON.parse(dataBuffer);
    //returning photos array
    res.send(photosData);
})
//get that responds with a single object containing the details of the photo with an id of :id.
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
//get that responds with an array of comment objects associated with the photo, specified with an id of :id.
router.get("/:id/comments", (req, res) => {
    console.log(req.params);

    const dataBuffer = fs.readFileSync("./data/photos.json");
    const photosData = JSON.parse(dataBuffer);

    const foundPhoto = photosData.find((photo) => {
        return photo.id === req.params.id;
    });

    if(!foundPhoto) {
        res.status(404).send("Error: photo with this id does not exist");
    }
    res.send(foundPhoto.comments);
})
export default router;