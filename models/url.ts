const mongoose = require("mongoose")

const urlSchema = new mongoose.Schema({
  shortUrl: {
    type: String,
    required: true,
    unique: true
  },
  redirectUrl: {
    type: String,
    require: true
  },
  visitAtUrl: [
    {
      timestamp:
        { type: Number }
    }
  ],
  },
  {
    timestamps: true
  }
)

const url = mongoose.model("url", urlSchema)
export {url}
module.exports = url; 