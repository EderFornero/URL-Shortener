import { nanoid } from "nanoid"
import url from "../models/url"

const newUrl = async (req: { body: any }, res: any ) => {
  const body = req.body

  if(!body.url) return res.status(400).send({error: "Invalid url"})

  const shortId = nanoid(8)
  await url.create({
    shortUrl: shortId,
    redirectUrl: body.url,
    visitAtUrl: []
  })
  return res.status(200).json({id: shortId})
}

export default newUrl