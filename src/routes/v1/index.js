const express = require("express");
const {TweetController,UserController,} = require("../../controllers")
const {Authenticate} = require("../../middlewares")
const router = express.Router();

const { InfoController } = require("../../controllers");

router.get("/info", InfoController.info);
router.post("/tweet",TweetController.createTweet);
router.get('/tweet/:id',TweetController.getTweet);
router.post('/signUp',UserController.signUp);
router.post('/signIn',UserController.signIn);
router.post('/likes/toggle',Authenticate,toggleLike)

module.exports = router;
