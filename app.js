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
const myFirstTweet = {
    title: 'Deep Thoughts',
    body: 'Friends, I have been navel-gazing',
    author: 'Karolin'
  }

  Tweet.create(myFirstTweet , (error, tweet) => {
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