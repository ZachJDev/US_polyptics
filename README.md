# US_polyptics
A Twitter bot that searches for political tweets and n+7s them. [Give it a follow!](https://twitter.com/US_polyps)

## Procedure:

This bot searches for political tweets, parses their text, and replaces each noun with the seventh noun after it in a dictionary. Based on the [OuLiPo's n+7 method.](https://en.wikipedia.org/wiki/Oulipo#Constraints)

"Polyp" is the seventh noun after "politics" in the [list I'm using](http://www.desiquintans.com/nounlist). Mostly unchanged, but I do try to add words when I find unchanged nouns in the tweets.

## Limitations:

Right now, there is no procedure to capture plural words, which I think is the biggest weakness of this bot.

The code is ineffiencent and calls the Twitter API more than it needs to. Fixing that will be my first major rewrite of the bot.
