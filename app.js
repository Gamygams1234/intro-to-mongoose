const mongoose = require("mongoose")
const Tweet = require("./tweet")
const mongoURI = 'mongodb://127.0.0.1:27017/'+ 'tweets'
const db = mongoose.connection
// const express = require("express")
// const app = express();
// const PORT = 3000;

mongoose.connect(mongoURI, ()=>{
    console.log("Mongoose connection is established")
})
const manyTweets = [
    {
      title: 'Deep Thoughts',
      body: 'Friends, I have been navel-gazing',
      author: 'Karolin'
    },
    {
      title: 'Sage Advice',
      body: 'Friends, I am vegan and so should you',
      author: 'Karolin',
      likes: 20
    },
    {
      title: 'Whole Reality',
      body: 'I shall deny friendship to anyone who does not exclusively shop at Whole Foods',
      author: 'Karolin',
      likes: 40
    },
    {
      title: 'Organic',
      body: 'Friends, I have spent $2300 to be one of the first people to own an organic smartphone',
      author: 'Karolin',
      likes: 162
    },
    {
      title: 'Confusion',
      body: 'Friends, why do you just respond with the word `dislike`? Surely you mean to click the like button?',
      author: 'Karolin',
      likes: -100
    },
    {
      title: 'Vespa',
      body: 'Friends, my Vespa has been upgraded to run on old french fry oil. Its top speed is now 11 mph',
      author: 'Karolin',
      likes: 2
    },
    {
      title: 'Licensed',
      body: 'Friends, I am now officially licensed to teach yogalates. Like this to get 10% off a private lesson',
      author: 'Karolin',
      likes: 3
    },
    {
      title: 'Water',
      body: 'Friends, I have been collecting rain water so I can indulge in locally sourced raw water. Ask me how',
      author: 'Karolin',
    },
  ]

  Tweet.insertMany(manyTweets , (error, tweet) => {
    if (error) { // if there is an error console log it
      console.log(error)
    } else { // else show us the created tweet
      console.log(tweet)
    }
    // get control of terminal back
    // you can also just use control-c
    db.close()
  })

db.on("error", (err)=>{
    console.log(err, "Is mongoose not running")
})

db.on("connected", ()=>{
    console.log("We are connected")
})

db.on("disconnected", ()=>{
    console.log("We are disconnected")
})




// app.listen(PORT, ()=>{
//     console.log("Listening on PORT", PORT)
// })