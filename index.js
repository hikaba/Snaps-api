import express from "express";
const app = express();
import photosRoutes from "./routes/photos.js";
import tagsRoutes from "./routes/tags.js";
import cors from "cors";
import "dotenv/config";

//setting server port value found .env
const PORT = process.env.PORT || 7070;
//midleware
app.use(cors());
app.use(express.json());

//routes
app.use("/tags", tagsRoutes);
app.use("/photos", photosRoutes);

//default 'home' route
app.get("/", (_req, res)=>{
    res.send("welcome to the compliments server!!!")
});

app.listen(PORT, ()=>{
    console.log(`Server running at ${process.env.BACKEND_URL}${PORT}`);
});
