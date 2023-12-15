const express = require("express");
const {TweetController,UserController} = require("../../controllers")

const router = express.Router();

const { InfoController } = require("../../controllers");

router.get("/info", InfoController.info);
router.post("/tweet",TweetController.createTweet);
router.get('/tweet/:id',TweetController.getTweet);
router.post('/signUp',UserController.signUp)

module.exports = router;
