import express from "express";
import photosRoutes from "./routes/photos.js";
import tagsRoutes from "./routes/tags.js";
import cors from "cors";

const app = express();

const PORT = 8080;
app.use(cors());

//routes
app.use("/tags", tagsRoutes);
app.use("/photos", photosRoutes);

//default 'home' route
app.get("/", (_req, res)=>{
    res.send("welcome to the compliments server!!!")
});

app.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`)
});
