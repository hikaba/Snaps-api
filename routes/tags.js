import express from "express";
const router = express.Router();
import fs from "fs";


router.get("/",(_req, res) =>{
    // reading tags from json file
    const dataBuffer = fs.readFileSync("./data/tags.json");
    const tagsData = JSON.parse(dataBuffer);
    //return tags arrays
    res.send(tagsData);
});
export default router;