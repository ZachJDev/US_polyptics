const nPlus = require('./functions/nPlus')
const Twit = require('twit')

const T = new Twit({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_SECRET,
    timeout_ms: 60 * 1000
})
const NUM_OF_TWEETS = 15


async function findTweets() {
    let data = await T.get("search/tweets", {
        q: "US politics",
        lang: "en",
        count: NUM_OF_TWEETS,
        result_type: "popular"
    })
    return data.data.statuses
}
async function getTweetText(id) {
    const tweet = await T.get("statuses/show", {id: id, tweet_mode: "extended"})
    return tweet.data.full_text
}
async function makeNewTweet(text) {
   return await T.post('statuses/update', {status: text})
}


const findAndTweet = async () => {

    let statuses = await findTweets();
    let newTweet = ''
    console.log("Tweeting...")
    for (let status of statuses) {
        try {
            let tweetId = status.in_reply_to_status_id_str || status.id_str
            console.log(`trying ${tweetId}`)
            const tweetText = await getTweetText(tweetId)
            console.log(tweetText)
            const newTweet = nPlus(tweetText, 7)
            await makeNewTweet(newTweet)
            break
        } catch (e) {
            console.log(e.allErrors[0].message)
            console.log("failed, Trying again...")
            continue
        }


    }
}

findAndTweet();




