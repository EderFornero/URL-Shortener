import mongoose from "mongoose"

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
export default url