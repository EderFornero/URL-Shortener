const express = require("express")
export {express}
const app = express()
const port = 3000
const urlRoute = require("./routes/url")

app.use("/url", urlRoute)

app.listen(port, () => console.log("server is running at: " + port))