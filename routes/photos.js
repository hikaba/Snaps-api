import express from 'express';
import fs from "fs";
const router = express.Router();

router.get("/", (req,res)=>{
    const data = fs.readFileSync("./data/compliments.json");
    console.log(data);
    res.send("made it to get /compliments");
});
export default router;
