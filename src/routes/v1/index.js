const express = require("express");
const {TweetController} = require("../../controllers")

const router = express.Router();

const { InfoController } = require("../../controllers");

router.get("/info", InfoController.info);
router.post("/tweet",TweetController.createTweet)

module.exports = router;
