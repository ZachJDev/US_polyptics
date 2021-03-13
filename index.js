const nPlus = require('./functions/nPlus')
const Twit = require('twit')

const T = new Twit({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_SECRET,
    timeout_ms: 60 * 1000
})
const NUM_OF_TWEETS = 5

const ONE_MINUTE = 60 * 1000
const ONE_HOUR = 60 * ONE_MINUTE
const tweetIds = {}


const findAndTweet = () => {
    let newTweet = ''
    console.log("Tweeting...")
    T.get("search/tweets", {q: "politics", count: NUM_OF_TWEETS, result_type: "popular"}).then(data => {
        let tweet;
        for (let i = 0; i < NUM_OF_TWEETS; i++) { // loop over the
            const {statuses} = data.data
            const tweetData = statuses[i]
            tweet = tweetData.quoted_status_id_str || tweetData.in_reply_to_status_id_str || tweetData.id_str
            if (!tweetIds[tweet]) {
                tweetIds[tweet] = true;
                break
            }
        }
        return T.get("statuses/show", {id: tweet, tweet_mode: "extended"})
    }).then(data => {
        const tweetText = data.data.full_text
        newTweet = nPlus(tweetText, 7)
        console.log(newTweet)
        return T.post('statuses/update', {status: newTweet})

    }).then(postedTweet => {
        return newTweet + "@"+ new Date(Date.now()).toLocaleString()
    }).catch(e => {
        console.log('failed... Trying again:')
        findAndTweet()
    })

}

console.log(findAndTweet());






