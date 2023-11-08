const express = require("express")
const { newUrl } = require("../controllers/url")

const router = express.Router()
router.post("/", newUrl)

module.exports = router