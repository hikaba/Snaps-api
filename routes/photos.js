import express from "express";
const router = express.Router();
import fs from "fs";
import crypto from "crypto";

router.get("/", (_req, res) => {
    // reading photos from json file
    const dataBuffer = fs.readFileSync("./data/photos.json");
    const photosData = JSON.parse(dataBuffer);
    //returning photos array
    res.send(photosData);
})

export default router;