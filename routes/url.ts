import express from "express"
import newUrl from "../controllers/url"

const router = express.Router()
router.post("/", newUrl)

export default router