var Twit = require('twit')
var Tabletop = require('tabletop')

var bot = new Twit({
  consumer_key: process.env.LEARNINGBOT_CONSUMER_KEY,
  consumer_secret: process.env.LEARNINGBOT_CONSUMER_SECRET,
  access_token: process.env.LEARNINGBOT_ACCESS_TOKEN,
  access_token_secret: process.env.LEARNINGBOT_ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000
})

var spreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1nf3GbHz-nkntGx9c4eyGwbD8__TWSB1L5yKyu-acVew/pubhtml'

Tabletop.init({
  key: spreadsheetUrl,
  callback: function(data, tabletop) {
    console.log(data)
    data.forEach(function(d) {
      var status = d.URL + ' is a great API to use for Twitter bots!'
      bot.post('statuses/update', {status: status}, function(err, response, data) {
        if (err) { console.log(err) }
        else {
          console.log('Posted!')
        }
      })
    })
  },
  simpleSheet: true
})
