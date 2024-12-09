import express from "express";

const app = express();

const PORT = 8080;

app.get("/", (req, res)=>{
    res.send("welcome to the compliments server!")
});

app.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`)
});
