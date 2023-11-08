import express from "express";
import { connectToMongoDB } from "./connect"
import url from "./routes/url"
import URL from "./models/url";

const app = express()
const port = 3000

app.use(express.json())
app.use("/url", url)

app.get("/:shortUrl", async (req: any, res: any) => {
  const shortUrl = req.params.shortUrl;
  try {
    const result = await URL.findOneAndUpdate(
      { shortUrl },
      {
        $push: {
          visitAtUrl: {
            timestamp: Date.now()
          }
        }
      }
    )

    if (!result) {
      return res.status(404).json({ error: "URL not found" })
    }

    res.redirect(result.redirectUrl)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" })
  }
})

app.listen(port, () => console.log("server is running at: " + port))

connectToMongoDB("mongodb://127.0.0.1:27017/url_shortener")
.then(() => console.log("Mongo db connected"))