// Basic server configuration

const express = require("express");
const bodyParser = require("body-parser")

const { ServerConfig, Logger,Connect } = require("./config");

const apiRoutes = require("./routes");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, async() => {
  console.log(`Successfully started the server on PORT: ${ServerConfig.PORT}`);
  // Logger.info("Successfully started the server ", "root", {});
  Connect();
   console.log("Mongo DB connected");

  //  Tweet.create({
  //    content:"This is my tweet",
  //    likes:120,
  //    noOfReteets:12,
  //    comment:"this is my first commit"
  //  })

// Hashtag.create({
//   text:"travel",
//   tweets:['65785e5285a1e134eda41ea0']
// })
// const tweetRepo = new TweetRepository();
// let tweet = await tweetRepo.deleteTweet({"_id":"6578741428f5cfc0d6a7adc9"})
// console.log(tweet);
});
