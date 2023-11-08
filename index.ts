import express from "express";

const app = express()
const port = 3000

import { connectToMongoDB } from "./connect"
connectToMongoDB("mongodb://127.0.0.1:27017/url_shortener")
.then(() => console.log("Mongo db connected"))
import urlRoute from "./routes/url"


app.use("/url", urlRoute)

app.listen(port, () => console.log("server is running at: " + port))