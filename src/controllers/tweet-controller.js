const { TweetService} = require('../services');

// const tweetService = new TweetService();

console.log(typeof  TweetService )

 

 const createTweet = async (req,res) => {
    try {
        const data = req.body;
        const response = await TweetService.create(data)
      
        return res.status(201).json({
            success:true,
            message:"Successfully Created a tweet ",
            data: response,
            err:{}
        });
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Error Encountered in creating  tweet",
            data: {},
            err:error
        });
        
    }
}

 const getTweet = async (req,res) => {
    try {
        const response = await tweetService.getTweet(req.params.id)
      
        return res.status(201).json({
            success:true,
            message:"Successfully fetched a tweet",
            data: response,
            err:{}
        });
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Error Encountered in getting a tweet",
            data: {},
            err:error
        });
        
    }
}

module.exports = {createTweet, getTweet }