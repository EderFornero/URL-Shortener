import mongoose from "mongoose"

export const connectToMongoDB = async (url: any) => {
  return mongoose.connect(url)
}

